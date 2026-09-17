import { NextRequest, NextResponse } from 'next/server';
import { estimateSchema } from '@/lib/estimate-schema';

export async function POST(request:NextRequest){
  const origin=request.headers.get('origin');
  if(origin&&origin!==request.nextUrl.origin)return NextResponse.json({error:'Invalid request origin.'},{status:403});
  if(!request.headers.get('content-type')?.includes('application/json'))return NextResponse.json({error:'JSON required.'},{status:415});
  if(Number(request.headers.get('content-length')||0)>16000)return NextResponse.json({error:'Request too large.'},{status:413});
  let body:unknown;
  try{const text=await request.text();if(text.length>16000)return NextResponse.json({error:'Request too large.'},{status:413});body=JSON.parse(text);}catch{return NextResponse.json({error:'Invalid JSON.'},{status:400});}
  const parsed=estimateSchema.safeParse(body);
  if(!parsed.success)return NextResponse.json({error:'Please check your inquiry details.'},{status:400});
  const endpoint=process.env.ESTIMATE_WEBHOOK_URL;
  if(!endpoint)return NextResponse.json({error:'Inquiry delivery is not connected. No request has been sent.'},{status:503});
  try{
    const target=new URL(endpoint);
    if(target.protocol!=='https:')return NextResponse.json({error:'Inquiry delivery is not configured correctly.'},{status:503});
    const {website,...inquiry}=parsed.data;
    const response=await fetch(target,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.ESTIMATE_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.ESTIMATE_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({...inquiry,source:'roofing-website'}),signal:AbortSignal.timeout(10000),redirect:'error'});
    if(!response.ok)throw new Error('Delivery failed');
    return NextResponse.json({success:true});
  }catch{return NextResponse.json({error:'Your inquiry could not be delivered. Please try again later.'},{status:502});}
}
