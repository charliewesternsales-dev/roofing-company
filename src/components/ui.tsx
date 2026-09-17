import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check, House, Wrench, Search, Layers, CloudRain, Leaf, MapPin, ShieldCheck } from 'lucide-react';
import { services, steps, site } from '@/lib/site';

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Company name placeholder — home"><svg viewBox="0 0 55 43" fill="none" aria-hidden="true"><path d="M3 25 26 5l25 20M12 28l14-12 16 13M12 25v13h30V25M21 38V27h11v11" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="miter"/><path d="M37 13V6h7v14" stroke="currentColor" strokeWidth="2.2"/></svg><span><strong>{site.name.toUpperCase()}</strong><small>PORTLAND RESIDENTIAL ROOFING</small></span></Link>;
}

export function Button({ children = 'Get a free estimate', href = '/contact#estimate', variant = '', className = '' }: { children?: React.ReactNode; href?: string; variant?: string; className?: string }) {
  return <Link href={href} className={`button ${variant} ${className}`}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>;
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span />{children}</p>;
}

export function SectionHeading({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy?: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>{children}</div>;
}

export function Photo({ src, alt, className = '', priority = false, sizes = '(max-width: 700px) 100vw, 50vw' }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes={sizes} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} /></div>;
}

const icons = { house: House, tool: Wrench, search: Search, layers: Layers, cloud: CloudRain, leaf: Leaf };
export function ServiceCard({ service, index, compact = false }: { service: typeof services[number]; index: number; compact?: boolean }) {
  const Icon = icons[service.icon as keyof typeof icons];
  return <Link href={`/${service.slug}`} className={`service-card ${compact ? 'service-compact' : ''}`}>
    {!compact && <div className="service-photo"><Photo src={service.image} alt={`Residential home reference for ${service.name.toLowerCase()}`} sizes="(max-width: 700px) 100vw, 33vw"/><span className="service-number">0{index + 1}</span></div>}
    <div className="service-body"><Icon className="service-icon" size={27} strokeWidth={1.4}/><h3>{service.name}</h3><p>{service.description}</p><span className="text-link">Learn more <ArrowUpRight size={17}/></span></div>
  </Link>;
}

export function TrustBar() {
  return <div className="trust-bar"><div className="container trust-inner"><div><House/><span>Focused on your home<small>Residential roofing</small></span></div><div><MapPin/><span>Rooted in the Northwest<small>Portland, Oregon</small></span></div><div><Check/><span>A clear place to start<small>Request an estimate</small></span></div><div><ShieldCheck/><span>{site.licenseVerified && site.insuranceVerified ? 'Licensed & insured' : 'Credentials, clearly stated'}<small>{site.licenseVerified && site.insuranceVerified ? `OR CCB ${site.license}` : '[License & insurance to be verified]'}</small></span></div></div></div>;
}

export function ProcessSteps() {
  return <section className="section process-section"><div className="container"><SectionHeading eyebrow="WHAT TO EXPECT" title="A simple roofing process." copy="Good work starts with a clear plan. Here’s how we get there, together."><Button variant="button-outline">Start your project</Button></SectionHeading><div className="process-grid">{steps.map(([title, copy], i) => <div className="process-step" key={title}><div className="step-top"><span>0{i+1}</span>{i < 3 && <ArrowRight size={20}/>}</div><h3>{title}</h3><p>{copy}</p></div>)}</div><p className="small-note">Proposed process · final project scope and scheduling will be confirmed in your estimate.</p></div></section>;
}

export function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><Eyebrow light>LET’S TAKE CARE OF YOUR HOME</Eyebrow><h2>Your roof protects<br/>everything under it.</h2><p>A leak. Aging shingles. A fresh start. Whatever brings you here,<br className="desktop-break"/> let’s take a closer look at your roof.</p></div><div className="cta-actions"><Button variant="button-sand">Get your free estimate</Button><span className="cta-phone">{site.phoneHref ? <a href={site.phoneHref}>Call {site.phone}</a> : <span>Call {site.phone}</span>}</span></div></div></section>;
}

export function PageHero({ eyebrow, title, copy, image = '/images/pnw-home.webp', cta = true }: { eyebrow: string; title: string; copy: string; image?: string; cta?: boolean }) {
  return <section className="page-hero"><div className="page-hero-image"><Photo src={image} alt="Illustrative residential roofing and home exterior" priority/></div><div className="container"><div className="page-hero-content"><Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><p>{copy}</p>{cta && <Button variant="button-sand"/>}</div></div></section>;
}
