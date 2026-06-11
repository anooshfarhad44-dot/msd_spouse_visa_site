"use client";

import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import Link from "next/link";
import HubSpotForm from "../ui/HubSpotForm";

const features = [
  { title: "UK-Regulated Immigration Solicitors", description: "Professional, qualified legal representation you can trust" },
  { title: "Guaranteed Fixed-Fee Services", description: "Transparent pricing with no hidden charges or surprises" },
  { title: "Free Initial Case Assessment", description: "Get expert advice on your eligibility before committing" },
  { title: "No Win, No Fee Representation", description: "Risk-free service with payment only on success" },
  { title: "Expedited Processing Options Available", description: "Fast-track your application when time is critical" },
  { title: "Cost-Effective Immigration Solutions", description: "Premium legal services at competitive, accessible rates" },
];

const logos = [
  { src: "/images/socities_logos/c1.png", alt: "Logo 1" },
  { src: "/images/socities_logos/c2.png", alt: "Logo 2" },
  { src: "/images/socities_logos/c3.png", alt: "Logo 3" },
  { src: "/images/socities_logos/c4.png", alt: "Logo 4" },
  { src: "/images/socities_logos/c5.png", alt: "Logo 5" },
  { src: "/images/socities_logos/c6.png", alt: "Logo 6" },
];

export default function TrustSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1120px] mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left content */}
        <div className="flex-1 max-w-[600px]">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-[#062f36] m-0 mb-2">
              Apply For A UK Spouse Visa with{" "}
              <Link href="https://www.msdsolicitors.co.uk/" target="_blank" className="text-[#f4c400] underline underline-offset-4 font-bold hover:opacity-80 transition-opacity">
                MSD Solicitors
              </Link>
            </h2>
            <h3 className="text-2xl font-medium text-[#b8860b] mb-8 mt-0">
              We Specialise in UK Marriage Visas
            </h3>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-7xl font-extrabold text-[#062f36] leading-none">99%</span>
              <div className="flex flex-col text-lg text-[#062f36]">
                <strong className="text-xl">Success Rate For</strong>
                <span>Spouse Visa Applications</span>
              </div>
            </div>

            <ul className="list-none p-0 m-0 grid gap-4 mb-12">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3.5 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                    openIndex === index
                      ? "border-[#0f6b72] bg-[#f0fdf4]/50"
                      : "border-[#e2e8f0]/80 bg-[#f8fafc]/90 hover:bg-white hover:border-[#0f6b72] hover:shadow-[0_6px_16px_rgba(6,47,54,0.08)] hover:-translate-y-0.5"
                  }`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="shrink-0 w-11 h-11 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-500 rounded-xl text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center gap-3">
                      <strong className="text-base font-extrabold text-[#062f36]">{feature.title}</strong>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`shrink-0 text-[#62777d] transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#0f6b72]" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    {openIndex === index && (
                      <span className="block text-sm text-[#62777d] leading-relaxed mt-2.5 animate-[fadeIn_0.3s_ease]">
                        {feature.description}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Logo carousel */}
            <div className="w-full overflow-hidden mt-6">
              <div
                className="flex items-center gap-12"
                style={{
                  animation: "scroll 20s linear infinite",
                  width: "fit-content",
                }}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-28 h-28 rounded-full bg-white object-contain p-5 shrink-0 shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right form */}
        <div className="w-full lg:w-[540px] shrink-0">
          <Reveal delay={200}>
            <div className="bg-white p-8 rounded-2xl border border-[#dbe7e9] shadow-[0_20px_60px_rgba(6,47,54,0.12)]">
              <HubSpotForm />
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
