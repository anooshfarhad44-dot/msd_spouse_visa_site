import HomeHero from "./components/sections/HomeHero";
import TrustSection from "./components/sections/TrustSection";
import EligibilityOverview from "./components/sections/EligibilityOverview";
import CtaStrip from "./components/sections/CtaStrip";
import AboutSection from "./components/sections/AboutSection";
import VisaInfoSection from "./components/sections/VisaInfoSection";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <TrustSection />
      <EligibilityOverview />
      <CtaStrip />
      <AboutSection />
      <VisaInfoSection />
    </div>
  );
}
