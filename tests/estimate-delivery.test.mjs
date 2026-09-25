import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const { NextRequest } = require('next/server');
const valid = { firstName:'Alex',lastName:'Example',phone:'5035550100',email:'alex@example.com',address:'123 Example Street',city:'Canby',zip:'97013',projectType:'Roof Repair',timeline:'ASAP',message:'Please inspect the valley. <script>example</script>',website:'' };

// Load the real route and its local dependencies with isolated env and mocked transport.
function loadRoute(env, transport) {
  function load(file) {
    const source=fs.readFileSync(file,'utf8');
    const code=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
    const exports={};
    vm.runInNewContext(code,{exports,process:{env},AbortSignal,URL,fetch:transport,require:(name)=>{
      if(name.startsWith('@/'))return load(path.resolve('src',name.slice(2)+'.ts'));
      if(name.startsWith('.'))return load(path.resolve(path.dirname(file),name+'.ts'));
      return require(name);
    }});
    return exports;
  }
  return load(path.resolve('src/app/api/estimate/route.ts'));
}
function request(body=valid,origin='https://roofing.example') {
  return new NextRequest('https://roofing.example/api/estimate',{method:'POST',headers:{'content-type':'application/json',origin},body:JSON.stringify(body)});
}
const env={RESEND_API_KEY:'test-only-key',RESEND_FROM_EMAIL:'estimates@roofing.example',ESTIMATE_TO_EMAIL:'owner@example.com'};

test('Resend receives validated details, fixed recipient, reply-to, and a stable retry key',async()=>{
  const calls=[];
  const route=loadRoute(env,async(url,options)=>{calls.push({url,...options});return Response.json({id:'email-test-id'});});
  assert.equal((await route.POST(request())).status,200);
  assert.equal((await route.POST(request())).status,200);
  const payload=JSON.parse(calls[0].body);
  assert.equal(calls[0].url,'https://api.resend.com/emails');
  assert.equal(payload.from,env.RESEND_FROM_EMAIL);
  assert.deepEqual(payload.to,['owner@example.com']);
  assert.equal(payload.reply_to,valid.email);
  for(const [key,value] of Object.entries(valid))if(key!=='website')assert.ok(payload.text.includes(value),key);
  assert.equal(payload.html,undefined);
  assert.equal(calls[0].headers['Idempotency-Key'],calls[1].headers['Idempotency-Key']);
  await route.POST(request({...valid,message:'A different inquiry'}));
  assert.notEqual(calls[0].headers['Idempotency-Key'],calls[2].headers['Idempotency-Key']);
});

test('missing configuration and invalid requests never send mail',async()=>{
  let calls=0;
  const transport=async()=>{calls++;throw Error('Must not send');};
  assert.equal((await loadRoute({},transport).POST(request())).status,503);
  const route=loadRoute(env,transport);
  assert.equal((await route.POST(request({}))).status,400);
  assert.equal((await route.POST(request({...valid,website:'spam'}))).status,400);
  assert.equal((await route.POST(request(valid,'https://unrelated.example'))).status,403);
  assert.equal(calls,0);
});

test('provider rejection, timeout, and malformed receipts never report success',async()=>{
  for(const transport of [async()=>Response.json({message:'Invalid key'},{status:401}),async()=>{throw Error('Timeout');},async()=>Response.json({})]) {
    const response=await loadRoute(env,transport).POST(request());
    assert.equal(response.status,502);
    assert.equal((await response.json()).success,undefined);
  }
});
