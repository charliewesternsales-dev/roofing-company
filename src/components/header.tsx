'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, MapPin, ArrowUpRight, ChevronDown } from 'lucide-react';
import { navigation, services, site } from '@/lib/site';
import { Logo } from './ui';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => { if(e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);
  return <><div className="topbar"><div className="container topbar-inner"><span><MapPin size={12}/> Residential roofing in Portland, Oregon</span><span>Your home. Your roof. Our focus.</span></div></div><header className="header"><div className="header-inner container"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, href]) => <div className="nav-item" key={href}><Link href={href} aria-current={pathname===href ? 'page' : undefined}>{label}{label==='Roofing Services' && <ChevronDown size={11}/>}</Link>{label==='Roofing Services' && <div className="service-menu">{services.map(service=><Link key={service.slug} href={`/${service.slug}`}>{service.name}<ArrowUpRight size={14}/></Link>)}</div>}</div>)}</nav><div className="header-actions"><a href={site.phoneHref || '/contact#contact-details'} className="header-phone" aria-label={site.phoneHref ? `Call ${site.phone}` : 'View contact details'}><Phone size={17}/><span>{site.phone}</span></a><Link href="/contact#estimate" className="button header-cta">Free estimate<ArrowUpRight size={15}/></Link><button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label, href])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={pathname===href?'page':undefined}>{label}<ArrowUpRight size={17}/></Link>)}<p>Portland, Oregon · Residential roofing</p></nav>}</header><div className="mobile-bottom"><a href={site.phoneHref || '/contact#contact-details'}><Phone size={16}/>{site.phoneHref ? 'Call now' : 'Contact us'}</a><Link href="/contact#estimate">Get free estimate<ArrowUpRight size={17}/></Link></div></>;
}
