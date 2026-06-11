import { serviceItems } from "../../data/site";
import Checklist from "../ui/Checklist";
import PageHero from "../ui/PageHero";

export default function ServicesPageContent() {
  return (
    <section className="py-24 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb]">
      <div className="w-full max-w-[890px] mx-auto px-4">
        <PageHero
          eyebrow="Spouse Family Visa"
          title="Spouse Family Visa, also known as Spouse Entry Clearance."
        >
          If you want your partner to join you in the UK, you may need to apply under the family visa
          route. We help married partners, civil partners, long-term partners, fiances and proposed
          civil partners understand and prepare the right application.
        </PageHero>
        <Checklist items={serviceItems} />
      </div>
    </section>
  );
}
