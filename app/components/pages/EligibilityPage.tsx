import { eligibilityRequirements } from "../../data/site";
import Checklist from "../ui/Checklist";
import PageHero from "../ui/PageHero";
import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function EligibilityPageContent() {
  return (
    <section className="py-5 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb] overflow-x-hidden">
      <div className="w-full max-w-[890px] mx-auto px-4">
        <Reveal>
          <PageHero eyebrow="Spouse Family Visa" title="Who is eligible for a Spouse Family Visa?">
            To apply as a spouse or partner, your sponsor will usually need to be a British citizen,
            settled in the UK, or otherwise eligible to sponsor you. We review your relationship,
            financial position and evidence before the application is submitted.
          </PageHero>
        </Reveal>

        {/* CTA box */}
        <Reveal delay={60}>
          <div className="relative overflow-hidden p-7 border border-[#f4c400]/40 rounded-2xl bg-gradient-to-br from-[#fff8d7] via-[#f4c400]/80 to-[#f3a600] shadow-[0_22px_56px_rgba(6,47,54,0.13)] mt-8 before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-1.5 before:bg-gradient-to-b before:from-[#0f6b72] before:to-[#062f36]">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#073f47]/12 bg-white/58 rounded-full font-bold text-sm text-[#062f36] shadow-[0_8px_20px_rgba(6,47,54,0.08)] mb-4">
              ✓ Free Eligibility Assessment
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#073f47] m-0 mb-3">
              Ready to Find Out If You Qualify?
            </h3>
            <p className="text-[#073f47]/88 leading-relaxed mb-4">
              Complete our quick eligibility check in under 2 minutes. No fees, no obligation, and instant guidance on your options.
            </p>
            <div className="flex gap-2.5 flex-wrap mb-6">
              {["✓ Takes 2 Minutes", "✓ 100% Free", "✓ No Obligation"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center min-h-[34px] px-3 py-1 border border-[#073f47]/10 rounded-full bg-white/42 text-[#062f36] text-sm font-semibold"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <Link
                href="/eligibility/check"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-full font-extrabold bg-[#062f36] text-white shadow-[0_14px_28px_rgba(6,47,54,0.18)] hover:-translate-y-0.5 hover:bg-[#0f6b72] transition-all duration-200"
              >
                Check My Eligibility
              </Link>
              <a
                href="tel:01615030553"
                className="inline-flex items-center justify-center min-h-[48px] px-4 py-2 border border-[#073f47]/14 rounded-full bg-white/44 text-[#062f36] font-extrabold hover:-translate-y-0.5 transition-all duration-200"
              >
                📞 0161 503 0553
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-2xl font-bold text-[#182d32] mt-10 mb-2">
            Quick eligibility checklist
          </h2>
          <p className="text-[#62777d] text-lg leading-relaxed">These are common requirements we check when assessing eligibility.</p>
          <Checklist items={eligibilityRequirements} />
        </Reveal>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-7">
          <Reveal delay={120}>
            <div className="p-5 bg-white border border-[#dbe7e9] rounded-2xl shadow-[0_18px_50px_rgba(6,47,54,0.08)]">
              <h3 className="text-lg font-extrabold text-[#073f47] m-0 mb-3">Common documents to prepare</h3>
              <ul className="list-none p-0 m-0 grid gap-2">
                {[
                  "Passports and ID for both partners",
                  "Marriage or civil partnership certificate",
                  "Proof of sponsor income (payslips, P60, bank statements)",
                  "Proof of accommodation",
                  "Photos, travel history and messages showing genuine relationship",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start text-sm text-[#62777d]">
                    <span className="text-[#f4c400] font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="p-5 bg-white border border-[#dbe7e9] rounded-2xl shadow-[0_18px_50px_rgba(6,47,54,0.08)]">
              <h3 className="text-lg font-extrabold text-[#073f47] m-0 mb-2">Typical timeline</h3>
              <p className="text-[#62777d] text-sm mt-0 mb-3">Applications vary depending on route and country. Typical steps:</p>
              <ol className="list-none p-0 m-0 grid gap-2 counter-reset-[step]">
                {[
                  "Initial assessment & document checklist (1–3 days)",
                  "Document gathering and application drafting (1–2 weeks)",
                  "Submission and Home Office processing (varies by country)",
                  "Follow-up and representation if needed",
                ].map((item, i) => (
                  <li key={item} className="flex gap-2.5 items-start text-sm text-[#62777d]">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#0f6b72] text-white text-xs font-bold grid place-items-center mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <Reveal delay={200}>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#182d32] mb-4">Frequently asked questions</h3>
            <div className="grid gap-3">
              {[
                {
                  q: "Can my partner work after arriving?",
                  a: "In most spouse visa routes, the partner is allowed to work in the UK. Specific restrictions may apply depending on the visa type — we verify this during the assessment.",
                },
                {
                  q: "What if my sponsor doesn't meet the income threshold?",
                  a: "There are alternative routes using savings, or relying on other exemptions such as being on certain benefits, or meeting alternative criteria. We can review your case for options.",
                },
                {
                  q: "Do I need legal representation?",
                  a: "You are not required to have a solicitor, but professional review reduces the risk of omission or incorrect evidence. We provide tailored support and raise application quality.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white border border-[#dbe7e9] px-4 py-3 rounded-xl open:shadow-[0_18px_50px_rgba(6,47,54,0.08)]"
                >
                  <summary className="cursor-pointer font-extrabold text-[#182d32]">{faq.q}</summary>
                  <div className="mt-2 text-[#62777d] text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Legal note */}
        <Reveal delay={260}>
          <div className="mt-6 p-5 border-l-[5px] border-[#f4c400] rounded-2xl bg-[#f4c400]/12 text-[#062f36] leading-relaxed">
            Financial requirements can change. GOV.UK currently states that many partner and spouse
            applications usually need at least £29,000 annual income, unless a different route or
            exemption applies.
            <div className="mt-3">
              <Link href="/contact" className="inline-flex font-extrabold text-[#073f47] hover:text-[#0f6b72] transition-colors">
                Contact us for a free eligibility check →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
