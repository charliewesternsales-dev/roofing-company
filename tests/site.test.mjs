import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { chromium, expect } from '@playwright/test';
import fs from 'node:fs';

const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
let browser;
before(async()=>{browser=await chromium.launch({headless:true});fs.mkdirSync('artifacts',{recursive:true});});
after(async()=>{await browser?.close();});

test('all public pages load with one H1 and no broken local links',async()=>{
  const page=await browser.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const routes=['/','/about','/roofing-services','/roof-replacement','/roof-repair','/roof-inspection','/new-roof-installation','/storm-damage-roofing','/roof-maintenance','/projects','/service-areas','/reviews','/contact','/privacy-policy','/terms-of-service'];
  for(const route of routes){
    const response=await page.goto(base+route);assert.equal(response.status(),200,route);
    assert.equal(await page.locator('h1').count(),1,route+' needs exactly one H1');
    assert.match(await page.title(),/Platinum Exterior Inc\./);
    const links=await page.locator('a[href^="/"]').evaluateAll(links=>links.map(a=>new URL(a.href).pathname));
    for(const link of links)assert.ok(routes.includes(link),`Unknown route ${link} on ${route}`);
  }
  assert.deepEqual(errors,[]);
  assert.equal((await page.goto(base+'/missing-page')).status(),404);
  await page.close();
});

test('responsive layout, loaded imagery, and navigation',async()=>{
  const page=await browser.newPage();
  for(const width of [1440,1024,768,390,360]){
    await page.setViewportSize({width,height:1000});await page.goto(base);await page.evaluate(()=>document.fonts.ready);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),`horizontal overflow at ${width}`);
    await page.locator('.home-hero img').evaluate(img=>img.decode());
    if(width===1440||width===390)await page.screenshot({path:`artifacts/home-${width}.png`,fullPage:true});
  }
  await page.getByRole('button',{name:'Open navigation'}).click();
  await page.locator('#mobile-navigation').getByRole('link',{name:'Our Projects'}).click();
  await page.waitForURL('**/projects');
  assert.equal(await page.locator('#mobile-navigation').count(),0);
  assert.ok(await page.locator('.mobile-bottom').isVisible());
  await page.close();
});

test('project filters, accessible modal, FAQ, materials, and service area controls',async()=>{
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  await page.goto(base+'/projects');
  await page.getByRole('button',{name:'Roof Repair',exact:true}).click();
  assert.equal(await page.locator('.project-card').count(),1);
  await page.locator('.project-card').click();assert.ok(await page.locator('dialog').isVisible());
  await page.keyboard.press('Escape');assert.equal(await page.locator('dialog').isVisible(),false);
  await page.getByRole('button',{name:'All projects',exact:true}).click();assert.equal(await page.locator('.project-card').count(),4);
  await page.goto(base+'/roofing-services');
  const material=page.locator('.materials-grid article').first().getByRole('button');await material.click();assert.equal(await material.getAttribute('aria-expanded'),'true');
  const faq=page.getByRole('button',{name:'How long does a roof replacement take?'});await faq.click();assert.equal(await faq.getAttribute('aria-expanded'),'true');
  await faq.click();assert.equal(await faq.getAttribute('aria-expanded'),'false');
  await page.goto(base+'/service-areas');await page.getByRole('button',{name:'Beaverton',exact:true}).click();
  assert.match(await page.locator('.map-card').innerText(),/Beaverton/);
  await page.getByRole('link',{name:'Check project availability'}).click();await page.waitForURL('**/contact?city=Beaverton#estimate');
  await expect(page.locator('[name=city]')).toHaveValue('Beaverton');
  await page.close();
});

test('estimate form validates, never fakes delivery, and downloads the inquiry',async()=>{
  const page=await browser.newPage();await page.goto(base+'/contact');
  await page.getByRole('button',{name:'Request my free estimate'}).click();
  assert.equal(await page.locator('input:invalid').count()>0,true);
  const data={firstName:'Test',lastName:'Homeowner',phone:'5035550100',email:'test@example.com',address:'123 Test Street',city:'Portland',zip:'97201',message:'A test inquiry. No real customer information.'};
  for(const[name,value]of Object.entries(data))await page.locator(`[name="${name}"]`).fill(value);
  await page.locator('[name=projectType]').selectOption('Roof Repair');await page.locator('[name=timeline]').selectOption('Just Exploring Options');
  await page.getByRole('button',{name:'Request my free estimate'}).click();
  assert.match(await page.getByRole('status').innerText(),/Nothing has been sent/);
  const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Download my inquiry'}).click();
  const download=await downloadPromise;assert.equal(download.suggestedFilename(),'roofing-inquiry.txt');
  await page.getByRole('button',{name:'Edit my details'}).click();assert.equal(await page.locator('[name=firstName]').inputValue(),'Test');
  await page.close();
});

test('estimate endpoint rejects invalid payloads and reports unconfigured delivery',async()=>{
  const valid={firstName:'Test',lastName:'Homeowner',phone:'5035550100',email:'test@example.com',address:'123 Test Street',city:'Portland',zip:'97201',projectType:'Roof Repair',timeline:'ASAP',message:'Test only',website:''};
  const post=(body,headers={})=>fetch(base+'/api/estimate',{method:'POST',headers:{'Content-Type':'application/json',...headers},body:JSON.stringify(body)});
  assert.equal((await post({})).status,400);
  assert.equal((await post({...valid,website:'bot'})).status,400);
  assert.equal((await post({...valid,zip:'not-a-zip'})).status,400);
  assert.equal((await post(valid,{Origin:'https://another-site.example'})).status,403);
  assert.equal((await post(valid)).status,503);
  assert.equal((await post({...valid,message:'a'.repeat(17000)})).status,413);
});

test('preview remains excluded from search indexing',async()=>{
  assert.match(await (await fetch(base+'/robots.txt')).text(),/Disallow: \//);
  const page=await browser.newPage();await page.goto(base);
  assert.match(await page.locator('meta[name=robots]').getAttribute('content'),/noindex/);
  assert.equal(await page.locator('script[type="application/ld+json"]').count(),0);
  await page.close();
});
