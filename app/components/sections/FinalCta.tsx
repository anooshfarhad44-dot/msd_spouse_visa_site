import Link from "next/link";

export default function FinalCta() {
  return (
    <section
      className="py-24 text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(6,47,54,0.9), rgba(6,47,54,0.62)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[680px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug font-[var(--font-montserrat)] m-0">
          Speak to an immigration solicitor about your spouse visa.
        </h2>
        <p className="mt-4 mb-7 text-white leading-relaxed text-lg">
          MSD Solicitors can provide clarity on government guidance, processes
          and eligibility criteria before you submit your application.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#062f36] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
        >
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
}
