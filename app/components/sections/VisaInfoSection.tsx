import Link from "next/link";
import Reveal from "../ui/Reveal";
import Accordion from "../ui/Accordion";
import DownloadChecklist from "../ui/DownloadChecklist";

export default function VisaInfoSection() {
  return (
    <section className="py-24 bg-white overflow-x-hidden">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
            {/* Left */}
            <div className="min-w-0">
              <p className="mb-3 text-[#0f6b72] font-extrabold text-sm tracking-widest uppercase">
                Detailed Guidance
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#062f36] leading-tight m-0">
                Spouse Family Visa
              </h2>
              <p className="text-[#62777d] text-lg mt-1 mb-6">(also known as Spouse Entry Clearance)</p>

              <p className="text-[#556b6e] text-lg leading-relaxed">
                If you would like your partner to join you in the UK, you will need to apply for a Spouse
                Family Visa. To take this route, you must be a British citizen or have settled status in the UK.
              </p>

              <div className="p-6 bg-[#f4c400]/5 border-l-[5px] border-[#f4c400] rounded-xl mt-8 mb-2">
                <strong className="block text-[#062f36] text-lg font-extrabold mb-2">
                  Professional Legal Assistance
                </strong>
                <p className="text-[#556b6e] m-0">
                  Personalised advice, document checks and a managed application process from our offices in Manchester, Birmingham and London.
                </p>
              </div>

              <Accordion
                items={[
                  { title: "Spouse Family Visa, also known as Spouse Entry Clearance", content: "This route allows partners to join UK residents when eligibility criteria are met. It is the primary path for families seeking to reunite in the UK." },
                  { title: "Applications for married partners and civil partners", content: "If your marriage or civil partnership is recognised in the UK, you can apply under the spouse route. We ensure all legal certifications meet Home Office standards." },
                  { title: "Applications for partners who have lived together for at least 2 years", content: "Long-term cohabiting partners may be eligible if they can evidence living together for two years through shared financial and residential records." },
                  { title: "Fiance and proposed civil partner visa guidance", content: "If you plan to marry in the UK within six months of arrival, this route can be used. We guide you through the specific intent requirements for this visa." },
                ]}
              />

              <div className="mt-10 flex gap-4 items-center flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#062f36] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Book a free consultation
                </Link>
                <DownloadChecklist />
              </div>
            </div>

            {/* Right sticky card */}
            <aside className="lg:sticky lg:top-[140px] p-8 bg-white border-[1.5px] border-[#dbe7e9]/80 rounded-3xl shadow-[0_20px_50px_rgba(6,47,54,0.08)]">
              <h3 className="text-2xl font-bold text-[#062f36] m-0">Quick Summary</h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#0f6b72] to-[#f4c400] rounded-full my-3" />
              <p className="text-[#556b6e] text-sm leading-relaxed">
                Typical processing times vary by location. We focus on preparing complete, "decision-ready" applications to minimize delays.
              </p>

              <div className="flex flex-col gap-5 my-6">
                {[
                  {
                    title: "First-time success",
                    text: "Rigorous document checks to significantly improve acceptance chances.",
                  },
                  {
                    title: "Local offices",
                    text: "Manchester, Birmingham & London branches for in-person support.",
                  },
                ].map((stat) => (
                  <div key={stat.title} className="p-4 bg-[#f8fafb] rounded-2xl border border-[#dbe7e9]/50">
                    <strong className="block text-[#0f6b72] font-extrabold text-base">{stat.title}</strong>
                    <p className="text-[#62777d] text-sm mt-1 leading-relaxed m-0">{stat.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-[#dbe7e9]/50">
                <Link
                  href="/services"
                  className="flex items-center gap-2 font-extrabold text-[#0f6b72] hover:text-[#062f36] transition-colors"
                >
                  See full services &amp; pricing <span>→</span>
                </Link>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
