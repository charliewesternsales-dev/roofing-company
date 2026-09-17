import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export default function robots():MetadataRoute.Robots{return site.url&&site.readyToPublish?{rules:{userAgent:'*',allow:'/',disallow:'/api/'},sitemap:`${site.url.replace(/\/$/,'')}/sitemap.xml`}:{rules:{userAgent:'*',disallow:'/'}};}
