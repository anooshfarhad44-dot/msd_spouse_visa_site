"use client";

import React from "react";
import PageHero from "../ui/PageHero";
import ProcessLeadForm from "../ui/ProcessLeadForm"; 
// All data cleanly imported from your central configuration file
import { personalFees, businessFees, appealsFees } from "@/app/data/site"; 

export default function FeesPageContent() {
  return (
    <section className="py-6 lg:py-4 min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#f8fbfb]">
      <div className="w-full max-w-[1240px] mx-auto px-4">
        
        {/* Top Header Section */}
        <div className="max-w-[890px] mx-auto mb-12 text-center lg:text-left">
          <PageHero eyebrow="Transparent Pricing" title="Clear and upfront options for your visa support.">
            Pricing can depend on complexity, urgency and whether the application is from inside or
            outside the UK. Check our structured schedule below and receive a tailored assessment.
          </PageHero>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Side: Structured Pricing Categories */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Personal Immigration */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,107,114,0.03)]">
              <h3 className="text-base font-black uppercase tracking-wider text-[#062f36] border-b border-slate-100 pb-4 mb-5">
                Personal Immigration
              </h3>
              <div className="space-y-3">
                {personalFees && personalFees.map((fee: any, idx: number) => (
                  <div 
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      fee.isMain 
                        ? "bg-[#0f6b72]/5 border-2 border-[#0f6b72] relative shadow-md shadow-[#0f6b72]/5" 
                        : "bg-slate-50/40 border border-slate-100 hover:bg-slate-50 hover:border-slate-200/80"
                    }`}
                  >
                    {/* Highlight Badge for Spouse Visa */}
                    {fee.isMain && (
                      <span className="absolute -top-3 left-4 bg-[#0f6b72] text-white font-extrabold text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm">
                        Most Demanded / Primary Focus
                      </span>
                    )}
                    <span className={`text-sm ${fee.isMain ? "font-bold text-[#062f36]" : "font-medium text-slate-700"}`}>
                      {fee.label}
                    </span>
                    <span className={`text-sm mt-1 sm:mt-0 ${fee.isMain ? "font-black text-[#0f6b72] text-base" : "font-bold text-slate-900"}`}>
                      {fee.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Business Immigration */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,107,114,0.03)]">
              <h3 className="text-base font-black uppercase tracking-wider text-[#062f36] border-b border-slate-100 pb-4 mb-5">
                Business Immigration
              </h3>
              <div className="space-y-3">
                {businessFees && businessFees.map((fee: any, idx: number) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50/40 border border-slate-100 hover:bg-slate-50 hover:border-slate-200/80 transition-all">
                    <span className="text-sm font-medium text-slate-700">{fee.label}</span>
                    <span className="text-sm font-bold text-slate-900 mt-1 sm:mt-0">{fee.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Appeals */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,107,114,0.03)]">
              <h3 className="text-base font-black uppercase tracking-wider text-[#062f36] border-b border-slate-100 pb-4 mb-5">
                Appeals & Specialized Cases
              </h3>
              <div className="space-y-3">
                {appealsFees && appealsFees.map((fee: any, idx: number) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between p-4 rounded-xl bg-slate-50/40 border border-slate-100 hover:bg-slate-50 hover:border-slate-200/80 transition-all gap-4">
                    <span className="text-sm font-medium text-slate-700 max-w-md leading-relaxed">{fee.label}</span>
                    <span className="text-sm font-bold text-slate-900 whitespace-nowrap">{fee.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Real-Time Validation Lead Form */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-8">
            <ProcessLeadForm 
              heading="Want a Detailed Quote?" 
              description="If you want to know more about the fee structures, optional expenses, or require an exact quote for your visa complexity, kindly contact us below."
            />
          </div>

        </div>

      </div>
    </section>
  );
}