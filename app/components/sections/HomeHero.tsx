import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function HomeHero() {
  return (
    <section
      className="min-h-[600px] relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 70% 20%, rgba(244,196,0,0.2), transparent 20rem), linear-gradient(90deg, rgba(6,47,54,0.94), rgba(6,47,54,0.56)), url('/images/heroImg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* fade bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/96 pointer-events-none" />

      <div className="relative z-10 min-h-[600px] flex items-center py-16">
        <div className="w-full max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,680px)_minmax(300px,1fr)] gap-10">
          {/* Left panel */}
          <div>
            <Reveal>
              <div className="inline-flex items-center px-3 py-2 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
                Spouse &amp; Family Visa Solicitors
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[clamp(2.35rem,6vw,4.35rem)] font-extrabold text-white leading-tight font-[var(--font-montserrat)]">
                Family and Spouse Visa Solicitors in Manchester
              </h1>
              <p className="mt-5 text-white/84 text-lg leading-relaxed max-w-[560px]">
                MSD Solicitors are experts in immigration law and visa applications. Our team of
                experienced immigration solicitors can help you find out which type of visa you need
                and support you through submission and follow-up.
              </p>
              <p className="mt-3 text-white/84 text-lg leading-relaxed max-w-[560px]">
                We strive to understand the unique details of your circumstances and make sure your case
                is handled with care. With immigration solicitors based in Manchester, Birmingham and
                London, we keep in close contact with clients throughout the process.{" "}
                <Link href="https://www.msdsolicitors.co.uk/family-law/divorce" className="underline underline-offset-4 hover:text-[#f4c400] transition-colors">
                  Our experience in divorce law
                </Link>{" "}
                also means we can advise where family law intersects with immigration.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <Link href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#062f36] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,196,0,0.35)] transition-all duration-200">
                  Speak to an immigration solicitor
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold text-white border border-white/50 bg-white/12 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200">
                  Our Services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right panel */}
          <div>
            <Reveal delay={120}>
              <img
                src="/images/heroImg.png"
                alt="Family illustration"
                className="w-full rounded-2xl shadow-[0_18px_50px_rgba(6,47,54,0.12)]"
              />
              <div className="mt-6">
                <div className="flex gap-3 justify-center mb-5 flex-wrap">
                  {[
                    { icon: "⚡", label: "Takes 2 Minutes" },
                    { icon: "⭐", label: "100% Free" },
                    { icon: "🛡️", label: "No Obligation" },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full text-[#062f36] font-extrabold text-sm border-2 border-[#0f6b72] shadow-[0_4px_12px_rgba(6,47,54,0.15)]"
                    >
                      <span>{b.icon}</span>
                      {b.label}
                    </div>
                  ))}
                </div>
                {/* Eligibility CTA button with popup + glow + ripple + shimmer */}
                <div className="relative mt-1">
                  {/* Ripple rings — behind the button */}
                  <span aria-hidden="true" className="btn-ripple" />
                  <span aria-hidden="true" className="btn-ripple-2" />

                  <Link
                    href="/eligibility/check"
                    className="btn-eligibility relative z-10 flex items-center justify-center w-full min-h-[64px] px-8 text-xl font-black rounded-full overflow-hidden bg-[#f4c400] text-[#062f36] hover:scale-[1.04] hover:-translate-y-1 transition-transform duration-300"
                  >
                    {/* shimmer sweep */}
                    <span aria-hidden="true" className="btn-shimmer" />
                    {/* content */}
                    <span className="relative z-10 flex items-center gap-2.5">
                      <span className="arrow-nudge">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                      Check Your Eligibility Now
                    </span>
                  </Link>
                </div>
                <p className="mt-5 text-center text-white font-extrabold text-lg tracking-wide">
                  Find out instantly if you meet the core requirements for a UK Spouse Visa.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
