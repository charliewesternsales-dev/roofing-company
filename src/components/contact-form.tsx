'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, LockKeyhole, Phone, Mail, MapPin } from 'lucide-react';
import { site } from '@/lib/site';
import { estimateSchema, projectTypes, timelines } from '@/lib/estimate-schema';
import { Eyebrow } from './ui';

export default function ContactForm({ defaultService = '' }: { defaultService?: string }) {
  const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [error,setError]=useState('');
  const [city,setCity]=useState('');
  const submitting=useRef(false);
  useEffect(()=>{setCity(new URLSearchParams(window.location.search).get('city') || '');},[]);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(submitting.current)return;
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const parsed = estimateSchema.safeParse(data);
    if(!parsed.success){setStatus('error');setError('Please check the form. Use a valid phone number and a five-digit US ZIP code.');return;}
    submitting.current=true;
    setStatus('sending');setError('');
    try {
      const response = await fetch('/api/estimate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(parsed.data)});
      if(!response.ok)throw new Error();
      const result=await response.json();
      if(result.success!==true)throw new Error();
      setStatus('sent');
    } catch {setStatus('error');setError('Your request could not be delivered. Your details are still in the form. Please try again or call us using the contact details alongside this form.');}
    finally{submitting.current=false;}
  }
  return <section className="section contact-section" id="estimate"><div className="container contact-layout"><div className="contact-intro"><Eyebrow>IT STARTS WITH A CONVERSATION</Eyebrow><h2>Let’s talk<br/>about your roof.</h2><p>Tell us a little about your home and what you need. We’ll take it from there.</p><div className="contact-details" id="contact-details"><div><Phone/><span><small>OFFICE</small><a href={site.phoneHref}>{site.phone}</a></span></div><div><Phone/><span><small>CELL · {site.owner.toUpperCase()}</small><a href={site.cellPhoneHref}>{site.cellPhone}</a></span></div><div><Mail/><span><small>SEND A NOTE</small><a href={site.emailHref}>{site.email}</a></span></div><div><MapPin/><span><small>MAILING ADDRESS</small>{site.address}</span></div><div><Phone/><span><small>FAX</small>{site.fax}</span></div></div><p className="contact-aside">A considered approach.<br/>A clear next step.<br/>A roof that feels right for your home.</p></div><div className="form-panel"><h3>Request your free roofing estimate</h3><p className="form-subtitle">A few details help us understand your project.</p>{status==='sent'?<div className="form-success" role="status"><CheckCircle2 size={40}/><h3>Your inquiry has been sent.</h3><p>The company will use your contact details to follow up about your roofing project.</p><button className="text-link" onClick={()=>setStatus('idle')}>Start another inquiry <ArrowUpRight size={16}/></button></div>:null}<form onSubmit={submit} hidden={status==='sent'}><div className="form-grid"><label>First name <span>*</span><input name="firstName" autoComplete="given-name" placeholder="First name" required maxLength={80}/></label><label>Last name <span>*</span><input name="lastName" autoComplete="family-name" placeholder="Last name" required maxLength={80}/></label><label>Phone <span>*</span><input name="phone" type="tel" autoComplete="tel" placeholder="(503) 000-0000" required minLength={7} maxLength={30}/></label><label>Email <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></label><label className="full-width">Property address <span>*</span><input name="address" autoComplete="street-address" placeholder="Street address" required minLength={3} maxLength={200}/></label><label>City <span>*</span><input name="city" autoComplete="address-level2" placeholder="Portland" required minLength={2} maxLength={100} value={city} onChange={e=>setCity(e.target.value)}/></label><label>ZIP code <span>*</span><input name="zip" autoComplete="postal-code" inputMode="numeric" placeholder="97201" required pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10}/></label><label>Project type <span>*</span><select name="projectType" required defaultValue={defaultService}><option value="" disabled>Select your project</option>{projectTypes.map(p=><option key={p}>{p}</option>)}</select></label><label>Approximate timeline <span>*</span><select name="timeline" required defaultValue=""><option value="" disabled>When are you thinking?</option>{timelines.map(t=><option key={t}>{t}</option>)}</select></label><label className="full-width">A little about your project<textarea name="message" placeholder="Tell us what’s happening with your roof…" rows={4} maxLength={4000}/></label><div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label></div></div>{status==='error'&&<p role="alert" className="form-error">{error}</p>}<button type="submit" className="button form-submit" disabled={status==='sending'}>{status==='sending'?'Sending your request…':'Request my free estimate'}<ArrowUpRight size={18}/></button><p className="form-privacy"><LockKeyhole size={12}/> We’ll use your information only to respond to your roofing inquiry.</p><p className="small-note">* Required fields · <a href="/privacy-policy">Privacy policy</a></p></form></div></div></section>;
}
