import { NextRequest, NextResponse } from 'next/server';
import { estimateSchema } from '@/lib/estimate-schema';
import { createHash } from 'node:crypto';
import { site } from '@/lib/site';

export async function POST(request:NextRequest){
  const origin=request.headers.get('origin');
  if(origin&&origin!==request.nextUrl.origin)return NextResponse.json({error:'Invalid request origin.'},{status:403});
  if(!request.headers.get('content-type')?.includes('application/json'))return NextResponse.json({error:'JSON required.'},{status:415});
  if(Number(request.headers.get('content-length')||0)>16000)return NextResponse.json({error:'Request too large.'},{status:413});
  let body:unknown;
  try{const text=await request.text();if(text.length>16000)return NextResponse.json({error:'Request too large.'},{status:413});body=JSON.parse(text);}catch{return NextResponse.json({error:'Invalid JSON.'},{status:400});}
  const parsed=estimateSchema.safeParse(body);
  if(!parsed.success)return NextResponse.json({error:'Please check your inquiry details.'},{status:400});
  const apiKey=process.env.RESEND_API_KEY;
  const from=process.env.RESEND_FROM_EMAIL;
  const to=process.env.ESTIMATE_TO_EMAIL || site.email;
  if(!apiKey||!from)return NextResponse.json({error:'Email is temporarily unavailable. Please call us to discuss your project.'},{status:503});
  try{
    const {website,...inquiry}=parsed.data;
    const text=[`${site.name} — Roofing estimate request`,'',`Name: ${inquiry.firstName} ${inquiry.lastName}`,`Email: ${inquiry.email}`,`Phone: ${inquiry.phone}`,`Property: ${inquiry.address}`,`City / ZIP: ${inquiry.city} ${inquiry.zip}`,`Project: ${inquiry.projectType}`,`Timeline: ${inquiry.timeline}`,'','Message:',inquiry.message || 'No additional message.'].join('\n');
    // Resend retains keys for 24 hours, making retries of the same inquiry safe.
    const payload={from,to:[to],reply_to:inquiry.email,subject:`Roofing estimate: ${inquiry.projectType}`,text};
    const key=createHash('sha256').update(JSON.stringify(payload)).digest('hex');
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${apiKey}`,'Idempotency-Key':`estimate/${key}`},body:JSON.stringify(payload),signal:AbortSignal.timeout(10000),redirect:'error'});
    if(!response.ok)throw new Error('Delivery failed');
    const result=await response.json();
    if(typeof result.id!=='string'||!result.id)throw new Error('Missing email receipt');
    return NextResponse.json({success:true});
  }catch{return NextResponse.json({error:'Your inquiry could not be delivered. Please try again later.'},{status:502});}
}
