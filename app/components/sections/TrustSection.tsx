"use client";

import React, { useState, useRef, useEffect } from "react";
import Reveal from "../ui/Reveal";
import Link from "next/link";
// All arrays are now cleanly integrated from data/site
import { countries, visaServices, features, logos } from "@/app/data/site";
import CaseReviewForm from "../ui/CaseReviewForm";

interface SearchableDropdownProps {
  options: string[];
  placeholder: string;
  selectedValue: string;
  onSelect: (value: string) => void;
}

function SearchableDropdown({ options, placeholder, selectedValue, onSelect }: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchTerm("");
        }}
        className={`w-full min-h-[52px] px-4 rounded-xl border flex items-center justify-between cursor-pointer bg-slate-50 transition-all text-sm font-medium ${
          isOpen 
            ? "border-[#0f6b72] ring-4 ring-[#0f6b72]/5 bg-white shadow-sm" 
            : "border-slate-200 text-[#062f36] hover:bg-white hover:border-slate-300"
        }`}
      >
        <span className={selectedValue ? "text-[#062f36] font-semibold" : "text-gray-400"}>
          {selectedValue || placeholder}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-[#0f6b72] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl border border-slate-200 shadow-[0_12px_30px_rgba(6,47,54,0.12)] overflow-hidden animate-[fadeIn_0.2s_ease] origin-top">
          <div className="p-2 border-b border-slate-100 bg-slate-50">
            <input
              type="text"
              placeholder="Search option..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-9 px-3 text-xs font-medium rounded-lg border border-slate-200 bg-white text-[#062f36] placeholder-gray-400 focus:outline-none focus:border-[#0f6b72] focus:ring-2 focus:ring-[#0f6b72]/10"
            />
          </div>
          <ul className="max-h-[220px] overflow-y-auto p-1 list-none m-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2.5 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
                    selectedValue === option
                      ? "bg-[#0f6b72] text-white"
                      : "text-[#182d32] hover:bg-emerald-50 hover:text-[#0f6b72]"
                  }`}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-3 py-4 text-xs font-medium text-gray-400 text-center">
                No matching options found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function TrustSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryResidence: "",
    nationality: "",
    visaService: "",
    concerns: [] as string[],
    tailoredAdvice: "",
    consent: false,
  });

  const handleCheckboxChange = (concern: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Validated Dynamic Lead Data:", formData);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 13.33px)); }
        }
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 30px -10px rgba(15,107,114,0.15); }
          50% { transform: scale(1.02); box-shadow: 0 20px 35px -8px rgba(15,107,114,0.25), 0 0 15px 2px rgba(244,196,0,0.2); }
        }
      `}} />

      <div className="w-full max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Informational Content Panel */}
        <div className="flex-1 max-w-[620px]">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-[#062f36] m-0 mb-3 leading-[1.15] tracking-tight">
              Apply For A UK Spouse Visa with{" "}
              <Link href="https://www.msdsolicitors.co.uk/" target="_blank" className="text-[#f4c400] underline underline-offset-4 decoration-2 font-black hover:opacity-90 transition-opacity">
                MSD Solicitors
              </Link>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-[#0f6b72] mb-10 mt-0 tracking-wide">
              We Specialise in UK Marriage Visas
            </h3>

            {/* Premium Enhanced 99% Box */}
            <div 
              className="flex items-center gap-6 mb-10 bg-white p-6 rounded-2xl border border-slate-100 max-w-sm relative overflow-hidden group select-none"
              style={{ animation: 'subtle-pulse 4s ease-in-out infinite' }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#f4c400] to-[#0f6b72]" />
              <div className="absolute -right-12 -bottom-12 w-28 h-28 bg-[#0f6b72]/5 rounded-full blur-xl group-hover:bg-[#f4c400]/10 transition-colors duration-500" />
              
              <div className="relative flex items-baseline">
                <span className="text-6xl font-black text-[#062f36] leading-none tracking-tighter bg-gradient-to-br from-[#062f36] to-[#0f6b72] bg-clip-text text-transparent">
                  99
                </span>
                <span className="text-3xl font-extrabold text-[#0f6b72] ml-0.5">%</span>
              </div>

              <div className="flex flex-col leading-tight relative z-10">
                <strong className="text-lg font-black text-[#062f36] flex items-center gap-1.5">
                  Success Rate For
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </strong>
                <span className="text-sm font-semibold text-[#0f6b72] mt-0.5 tracking-wide uppercase text-[11px]">
                  Spouse Visa Applications
                </span>
              </div>
            </div>

            {/* Accordion Features List (Mapped dynamically from site data) */}
            <ul className="list-none p-0 m-0 grid gap-4 mb-14">
              {features && features.map((feature: any, index: number) => (
                <li
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    openIndex === index
                      ? "border-[#0f6b72] bg-white shadow-[0_10px_25px_-5px_rgba(15,107,114,0.1)]"
                      : "border-slate-200 bg-white hover:border-[#0f6b72]/60 hover:shadow-[0_8px_20px_rgba(6,47,54,0.05)] hover:-translate-y-0.5"
                  }`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0f6b72] to-[#0b5156] rounded-xl text-white shadow-sm shadow-[#0f6b72]/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center gap-3">
                      <strong className="text-base font-bold text-[#062f36]">{feature.title}</strong>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#0f6b72]" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    {openIndex === index && (
                      <span className="block text-sm text-slate-500 leading-relaxed mt-2.5 transition-all duration-200">
                        {feature.description}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Infinite Loop Carousel (Mapped dynamically from site data) */}
            <div className="w-full overflow-hidden mt-8 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
              <div
                className="flex items-center gap-10 hover:[animation-play-state:paused] cursor-pointer"
                style={{ 
                  width: "max-content",
                  animation: 'smooth-scroll 25s linear infinite'
                }}
              >
                {logos && [...logos, ...logos, ...logos].map((logo: any, index: number) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-24 h-24 rounded-2xl bg-white object-contain p-4 shrink-0 shadow-[0_4px_15px_rgba(6,47,54,0.04)] border border-slate-100 select-none pointer-events-none"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        

        <div>
          <CaseReviewForm/>
        </div>

      </div>
    </section>
  );
}