import { feeOptions } from "../../data/site";
import Checklist from "../ui/Checklist";
import PageHero from "../ui/PageHero";

export default function FeesPageContent() {
  return (
    <section className="py-24 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb]">
      <div className="w-full max-w-[890px] mx-auto px-4">
        <PageHero eyebrow="Fees" title="Transparent options for spouse visa support.">
          Pricing can depend on complexity, urgency and whether the application is from inside or
          outside the UK. Start with a free consultation and receive a clear quote before work begins.
        </PageHero>
        <div className="p-6 bg-white border border-[#dbe7e9] rounded-2xl shadow-[0_18px_50px_rgba(6,47,54,0.08)] mt-8">
          <Checklist items={feeOptions} />
        </div>
      </div>
    </section>
  );
}
