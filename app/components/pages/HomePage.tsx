import CtaStrip from "../sections/CtaStrip";
import FinalCta from "../sections/FinalCta";
import HomeHero from "../sections/HomeHero";
import ProcessOverview from "../sections/ProcessOverview";
import ServicesOverview from "../sections/ServicesOverview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CtaStrip />
      <ServicesOverview />
      <ProcessOverview />
      <FinalCta />
    </>
  );
}
