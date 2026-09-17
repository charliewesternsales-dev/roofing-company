'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/lib/site';
import { Eyebrow } from './ui';
export default function FAQ({ all = false }: { all?: boolean }) {
  const [active, setActive] = useState<number | null>(0);
  return <section className="section faq-section"><div className="container faq-layout"><div><Eyebrow>A LITTLE CLARITY</Eyebrow><h2>Good questions.<br/>Honest answers.</h2><p>Roofing can feel like a lot.<br/>Let’s make it a little simpler.</p><a className="text-link" href="/contact">Have another question? <span>↗</span></a></div><div className="faq-list">{(all ? faqs : faqs.slice(0,5)).map(([question,answer],i)=><div className={`faq-item ${active===i?'active':''}`} key={question}><h3><button aria-expanded={active===i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`} onClick={()=>setActive(active===i?null:i)}>{question}{active===i?<Minus size={18}/>:<Plus size={18}/>}</button></h3><div hidden={active!==i} id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`}><p>{answer}</p></div></div>)}</div></div></section>;
}
