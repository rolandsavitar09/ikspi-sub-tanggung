import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { GallerySection } from "@/components/sections/gallery-section";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { AboutSection } from "@/components/sections/about-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <GallerySection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
