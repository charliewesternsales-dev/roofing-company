import type { MetadataRoute } from 'next';
import { site, services } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap {if(!site.url||!site.readyToPublish)return[];return['','about','roofing-services',...services.map(s=>s.slug),'projects','service-areas','reviews','contact','privacy-policy','terms-of-service'].map(path=>({url:`${site.url.replace(/\/$/,'')}/${path}`,changeFrequency:'monthly' as const,priority:path===''?1:0.7}));}
