import { feeOptions } from "../../data/site";
import Checklist from "../ui/Checklist";
import PageHero from "../ui/PageHero";

export default function FeesPageContent() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <PageHero eyebrow="Fees" title="Transparent options for spouse visa support.">
          Pricing can depend on complexity, urgency and whether the application is
          from inside or outside the UK. Start with a free consultation and receive
          a clear quote before work begins.
        </PageHero>
        <Checklist items={feeOptions} className="fee-box" />
      </div>
    </section>
  );
}
