import { imagery } from '@/lib/imagery';
import { ShieldCheck, CloudRain, Wind, Leaf, Thermometer } from 'lucide-react';
import { Button, Eyebrow, Photo, SectionHeading, ServiceCard } from './ui';
import { reasons, services, site } from '@/lib/site';

export function HomeHero() {
  return <section className="home-hero"><Photo src={imagery['home-hero'].src} alt={imagery['home-hero'].alt} priority sizes="100vw"/><div className="hero-shade"/><div className="container hero-content"><Eyebrow light>CANBY & THE PORTLAND AREA.</Eyebrow><h1>Roofing that feels<br/><em>right for your home.</em></h1><p>Roof repairs, replacements, and inspections. A clear plan to protect your home through every Northwest season.</p><div className="hero-actions"><Button variant="button-sand"/><a className="hero-call" href={site.phoneHref || '/contact#contact-details'}>{site.phoneHref?'Call':'Contact'} {site.phone}<span>↗</span></a></div></div><div className="hero-bottom container"><span>PNW HOME CONCEPT · ILLUSTRATIVE IMAGE</span></div></section>;
}

export function Services({ full=false, summary=false }: { full?:boolean; summary?:boolean }) {
  return <section className="section services-section" id="services"><div className="container"><SectionHeading eyebrow="CARE FOR EVERY KIND OF ROOF" title="One home. Every roofing need." copy="A small repair or a fresh start. Find the right solution for your home, your priorities, and the seasons ahead.">{!full && <Button href="/roofing-services" variant="button-outline">Explore our services</Button>}</SectionHeading><div className="service-grid">{services.slice(0,3).map((service,i)=><ServiceCard key={service.slug} service={service} index={i}/>)}</div>{!summary && <div className="service-extra">{services.slice(3).map((service,i)=><ServiceCard key={service.slug} service={service} index={i+3} compact={!full}/>)}</div>}</div></section>;
}

export function WhyUs({ summary=false }: { summary?:boolean }) {
  return <section className="section why-section"><div className="container why-layout"><div className="why-photo"><Photo src={imagery.workmanship.src} alt={imagery.workmanship.alt}/><div className="image-caption"><span>IT’S ALL IN THE DETAILS.</span><small>Illustrative roofing photography</small></div><div className="photo-corner"><ShieldCheck size={27} strokeWidth={1.3}/><span>Your home deserves<br/>a thoughtful approach.</span></div></div><div className="why-content"><Eyebrow>THE WAY WE WORK</Eyebrow><h2>Roofing done right.<br/>From start to finish.</h2><p>A roof is more than shingles. It’s peace of mind, a dry home, and one less thing to worry about. Every detail should reflect that.</p><div className="reason-list">{(summary ? reasons.slice(0,3) : reasons).map(([title,copy],i)=><div className="reason" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div><Button href="/about" variant="button-outline">Get to know our approach</Button></div></div></section>;
}

export function Weather() {
  return <section className="weather-section"><div className="weather-photo"><Photo src={imagery['weather-rain'].src} alt={imagery['weather-rain'].alt}/></div><div className="container weather-inner"><div className="weather-copy"><Eyebrow light>MADE FOR LIFE HERE</Eyebrow><h2>Rain is part of the story.<br/><em>A good roof is, too.</em></h2><p>Built for Portland weather — from long rainy seasons to wind, moss, and changing temperatures. A roofing plan should consider the whole system.</p><p>Proper installation, well-detailed flashing, ventilation, and drainage all work together. The right materials and regular care help your roof handle life in the Northwest.</p><div className="weather-icons"><span><CloudRain/>Rain & moisture</span><span><Wind/>Seasonal wind</span><span><Leaf/>Moss & debris</span><span><Thermometer/>Temperature changes</span></div><Button href="/roof-inspection" variant="button-sand">Let’s take a closer look</Button></div></div></section>;
}

export function Warranty() {
  return <section className="warranty-section"><div className="container warranty-layout"><div><Eyebrow light>PEACE OF MIND, IN THE DETAILS</Eyebrow><h2>Confidence from<br/>the ground up.</h2><p>You deserve to understand what’s included, what’s covered, and what happens next.</p></div><div className="warranty-details"><div><span>01</span><h3>The scope of your project</h3><p>Review the work, materials, cleanup, and expected timeline before the project begins.</p></div><div><span>02</span><h3>Manufacturer coverage</h3><p>Product-specific terms and eligibility should be included with your material options.</p></div><div><span>03</span><h3>Workmanship coverage</h3><p>{site.warranty}</p></div></div></div></section>;
}
