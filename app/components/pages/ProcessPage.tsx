import { processSteps } from "../../data/site";
import PageHero from "../ui/PageHero";
import Timeline from "../ui/Timeline";

export default function ProcessPageContent() {
  return (
    <section className="py-24 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb]">
      <div className="w-full max-w-[890px] mx-auto px-4">
        <PageHero
          eyebrow="Our Process"
          title="Clear support at each stage of your spouse visa application."
        />
        <Timeline items={processSteps} />
      </div>
    </section>
  );
}
