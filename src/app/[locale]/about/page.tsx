import Navbar from '@/components/ui/navbar';
import AboutHero from '@/components/features/about-hero';
import AboutNarrative from '@/components/features/about-narrative';
import AboutMission from '@/components/features/about-mission';
import AboutTimeline from '@/components/features/about-timeline';
import Footer from '@/components/ui/footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutNarrative />
        <AboutMission />
        <AboutTimeline />
      </main>
      <Footer />
    </>
  );
}
