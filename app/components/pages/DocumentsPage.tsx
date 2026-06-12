import { documentGroups } from "../../data/site";
import PageHero from "../ui/PageHero";

export default function DocumentsPageContent() {
  return (
    <section className="py-4 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb]">
      <div className="w-full max-w-[890px] mx-auto px-4">
        <PageHero
          eyebrow="Documents"
          title="A spouse visa evidence pack that is easy to assess."
        >
          We help organise documents so the application tells a consistent story and directly answers
          the spouse visa requirements.
        </PageHero>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {documentGroups.map((group) => (
            <article
              key={group}
              className="min-h-[104px] grid grid-cols-[36px_1fr] gap-3 items-center p-5 bg-white border border-[#dbe7e9] rounded-2xl shadow-[0_18px_50px_rgba(6,47,54,0.08)] hover:-translate-y-1 hover:border-[#0f6b72]/30 hover:shadow-[0_24px_70px_rgba(6,47,54,0.14)] transition-all duration-200"
            >
              <span className="text-[#f4c400] text-2xl leading-none">✓</span>
              <p className="text-[#182d32] font-bold m-0">{group}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
