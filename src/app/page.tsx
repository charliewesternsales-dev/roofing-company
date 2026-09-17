import { HomeHero, Services, WhyUs, Weather, Warranty } from '@/components/home-sections';
import { TrustBar, ProcessSteps, CTA } from '@/components/ui';
import { ProjectGallery, Materials } from '@/components/gallery';
import Reviews from '@/components/reviews';
import ServiceArea from '@/components/service-area';
import FAQ from '@/components/faq';
import ContactForm from '@/components/contact-form';
export default function Home() {
  return <><HomeHero/><TrustBar/><Services/><WhyUs/><Weather/><ProcessSteps/><ProjectGallery/><Materials/><Reviews/><Warranty/><ServiceArea/><FAQ all/><CTA/><ContactForm deliveryEnabled={!!process.env.ESTIMATE_WEBHOOK_URL}/></>;
}
