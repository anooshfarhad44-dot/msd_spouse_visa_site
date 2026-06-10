import { processSteps } from "../../data/site";
import PageHero from "../ui/PageHero";
import Timeline from "../ui/Timeline";

export default function ProcessPageContent() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <PageHero
          eyebrow="Our Process"
          title="Clear support at each stage of your spouse visa application."
        />
        <Timeline items={processSteps} />
      </div>
    </section>
  );
}
