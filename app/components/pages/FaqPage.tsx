import { faqs } from "../../data/site";
import PageHero from "../ui/PageHero";
import Timeline from "../ui/Timeline";

export default function FaqPageContent() {
  const items = faqs.map((faq) => ({ title: faq.q, text: faq.a }));

  return (
    <section className="section page-section">
      <div className="container narrow">
        <PageHero eyebrow="FAQ" title="Common spouse visa questions." />
        <Timeline items={items} />
      </div>
    </section>
  );
}
