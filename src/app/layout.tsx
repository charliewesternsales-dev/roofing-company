import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url || 'http://localhost:3000'),
  title: { default: `Portland Roofing Contractor | ${site.name}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  robots: { index: site.readyToPublish && !!site.url, follow: site.readyToPublish && !!site.url },
  openGraph: { siteName: site.name, title: `Portland Residential Roofing | ${site.name}`, description: site.description, type: 'website', locale: 'en_US', images: [{url:'/images/pnw-home.webp',width:1672,height:941,alt:'Pacific Northwest craftsman home — illustrative concept'}] },
  twitter: { card:'summary_large_image', title:`Portland Residential Roofing | ${site.name}`, description:site.description, images:['/images/pnw-home.webp'] },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  const structuredData = site.readyToPublish && site.url ? { '@context':'https://schema.org', '@type':'RoofingContractor', name:site.name, logo:new URL('/brand/platinum-exterior-logo.svg',site.url).href, url:site.url, telephone:site.phone, email:site.email, faxNumber:site.fax, address:{'@type':'PostalAddress',...site.mailingAddress}, contactPoint:[{'@type':'ContactPoint',contactType:'office',telephone:site.phone},{'@type':'ContactPoint',contactType:'cell',telephone:site.cellPhone}], description:site.description, areaServed:{'@type':'City',name:'Portland'} } : null;
  return <html lang="en" data-scroll-behavior="smooth"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/>{structuredData&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/>}</body></html>;
}
