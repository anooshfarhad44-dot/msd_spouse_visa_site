import Link from "next/link";
import Reveal from "../ui/Reveal";

const features = [
  {
    title: "Start-to-finish support",
    text: "Complete eligibility checks, rigorous document preparation, and direct submission management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Document expertise",
    text: "We help you gather, verify, and format evidence to strictly meet Home Office evidentiary standards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Clear timelines",
    text: "We outline realistic processing expectations and keep you updated at every critical stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            {/* Content */}
            <div>
              <p className="mb-3 text-[#0f6b72] font-extrabold text-sm tracking-widest uppercase">
                Professional Expertise
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#062f36] leading-tight font-[var(--font-montserrat)] m-0 mb-5">
                About Our Specialized Services
              </h2>
              <p className="text-[#0f6b72] text-xl leading-relaxed mb-10">
                Personal, practical immigration support for spouse and family visa applications.
              </p>
              <div className="flex flex-col gap-6">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-5 p-6 bg-[#f8fafb] border border-[#dbe7e9]/60 rounded-2xl hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(6,47,54,0.08)] hover:border-[#f4c400] transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 p-2 bg-[#f4c400] rounded-xl text-[#062f36]">
                      {f.icon}
                    </div>
                    <div>
                      <strong className="block text-lg font-extrabold text-[#062f36] mb-1.5 font-[var(--font-montserrat)]">
                        {f.title}
                      </strong>
                      <span className="text-[#62777d] text-base leading-relaxed">{f.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#062f36] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Book a free consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold text-[#062f36] border border-[#0f6b72]/30 bg-white/80 hover:-translate-y-0.5 transition-all duration-200"
                >
                  View services
                </Link>
              </div>
            </div>

            {/* Visual */}
            <Reveal delay={120}>
              <img
                src="/images/services_Image.png"
                alt="Specialized Services"
                className="block w-full h-auto rounded-[30px] shadow-[0_30px_70px_rgba(6,47,54,0.15)] border-[8px] border-white"
              />
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
