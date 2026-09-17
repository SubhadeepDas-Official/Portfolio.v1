import HeaderNav from "@/components/header-nav";
import HeroSection from "@/components/hero-section";
import SelectedWork from "@/components/selected-work";
import FeaturedWorkAnimation from "@/components/featured-work-animation";
import ServicesManifesto from "@/components/services-manifesto";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div className="w-full bg-paper min-h-screen">
      {/* Outer Postal Wrapper for Framed Master Poster Experience */}
      <main className="w-full max-w-[1600px] mx-auto border-t border-ink shadow-2xl relative">
        {/* Editorial Top Navigation */}
        <HeaderNav />

        {/* 01 — HERO SECTION */}
        <HeroSection />

        {/* 02 — SELECTED WORK STRIP */}
        <SelectedWork />

        {/* 03 — FEATURED ANIMATED WORK EXPERIENCE (Video / 12 Keyframes Reconstruction) */}
        <FeaturedWorkAnimation />

        {/* 04 — SERVICES / MANIFESTO / TECH STACK */}
        <ServicesManifesto />

        {/* 05 — FOOTER & FINAL CTA */}
        <FooterSection />
      </main>
    </div>
  );
}
