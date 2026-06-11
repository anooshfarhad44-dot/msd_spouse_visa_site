import Link from "next/link";
import { quickSteps } from "../../data/site";

export default function ProcessOverview() {
  return (
    <section className="py-24 bg-[#f5f8f8] bg-[radial-gradient(circle_at_top_left,rgba(15,107,114,0.07),transparent_28rem)]">
      <div className="w-full max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
        <div>
          <p className="mb-3 text-[#0f6b72] font-extrabold text-sm tracking-widest uppercase">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#182d32] leading-snug m-0">
            A calm route from first call to submission.
          </h2>
          <p className="mt-4 text-[#62777d] text-lg leading-relaxed">
            Each stage is designed to reduce confusion, spot weak evidence early and keep the
            application professionally organised.
          </p>
          <Link href="/process" className="inline-flex mt-6 text-[#073f47] font-extrabold hover:text-[#0f6b72] transition-colors">
            View the full process →
          </Link>
        </div>
        <ol className="grid gap-3.5 m-0 p-0 list-none">
          {quickSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-5 min-h-[70px] px-5 py-4 bg-white border-l-[5px] border-[#f4c400] rounded-2xl font-extrabold text-[#182d32] shadow-[0_18px_50px_rgba(6,47,54,0.08)]"
            >
              <span className="text-[#0f6b72] font-extrabold">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
