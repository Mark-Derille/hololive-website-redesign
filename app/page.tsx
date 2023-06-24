import HeroSection from "@/components/hero-section/HeroSection";
import LatestNews from "./LatestNews";
import Talent from "./Talent";
import Audition from "./Audition";
import SiteShowcase from "./SiteShowcase";
import Share from "./Share";
import About from "./About";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <LatestNews />
      <Talent />
      <Audition />
      <About />
      <SiteShowcase />
      <Share />
    </main>
  );
}
