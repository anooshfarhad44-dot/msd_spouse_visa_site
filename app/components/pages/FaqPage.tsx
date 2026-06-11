import { faqs } from "../../data/site";
import PageHero from "../ui/PageHero";
import Timeline from "../ui/Timeline";

export default function FaqPageContent() {
  const items = faqs.map((faq) => ({ title: faq.q, text: faq.a }));

  return (
    <section className="py-24 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb]">
      <div className="w-full max-w-[890px] mx-auto px-4">
        <PageHero eyebrow="FAQ" title="Common spouse visa questions." />
        <Timeline items={items} />
      </div>
    </section>
  );
}
