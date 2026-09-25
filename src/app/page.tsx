import { HomeHero, Services, WhyUs } from '@/components/home-sections';
import { CTA } from '@/components/ui';
import { ProjectGallery } from '@/components/gallery';
export default function Home() {
  return <div className="home-simple">
    <HomeHero/>
    <Services summary/>
    <WhyUs summary/>
    <ProjectGallery/>
    <CTA/>
  </div>;
}
