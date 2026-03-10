import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrainingSystem from "@/components/TrainingSystem";
import PortfolioMarquee from "@/components/PortfolioMarquee";
import Collaboration from "@/components/Collaboration";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FadeUp delay={0.1}>
        <Hero />
      </FadeUp>
      <FadeUp delay={0.2}>
        <About />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Services />
      </FadeUp>
      <FadeUp delay={0.2}>
        <TrainingSystem />
      </FadeUp>
      <FadeUp delay={0.2}>
        <PortfolioMarquee />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Collaboration />
      </FadeUp>
      <FadeUp delay={0.2}>
        <CTA />
      </FadeUp>
      <Footer />
    </main>
  );
}
