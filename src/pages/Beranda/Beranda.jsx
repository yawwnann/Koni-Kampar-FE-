import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SportsSection from "./components/SportsSection";
import EventSection from "./components/EventSection";
import FAQSection from "./components/FAQSection";

export default function Beranda() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SportsSection />
      <EventSection />
      <FAQSection />
    </main>
  );
}
