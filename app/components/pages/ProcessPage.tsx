// "use client";

// import React from "react";
// import Image from "next/image";
// import PageHero from "../ui/PageHero";
// import ProcessLeadForm from "../ui/ProcessLeadForm"; // Import the new form component

// export default function ProcessPageContent() {
//   return (
//     <section className="py-4 min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#f8fbfb] overflow-hidden">
//       <div className="w-full max-w-[1240px] mx-auto px-4">

//         {/* Top Header Integration */}
//         {/* Top Header Integration */}
//         {/* <div className="max-w-[890px] mx-auto mb-10 text-center md:text-left">
//           <PageHero
//             eyebrow="Our Process"
//             title="Expert guidance and end-to-end support for your UK Spouse Visa."
//           />
//         </div> */}

//         {/* Modern Split Architecture Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* Left Sticky Media Illustration Column */}
//           <div className="lg:col-span-5 w-full lg:sticky lg:top-8 z-10">
//             <div className="relative w-full rounded-2xl bg-[#0f6b72]/5 p-4 border border-slate-100 backdrop-blur-sm shadow-[0_20px_50px_rgba(6,47,54,0.04)] group">

//               {/* Decorative Accent Background Design Blobs */}
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f4c400]/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0f6b72]/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

//               {/* Master Wrapper for Process Image */}
//               <div className="relative w-full aspect-[2/3] md:max-h-[680px] rounded-xl overflow-hidden bg-white shadow-md border border-slate-200/60 flex items-center justify-center">
//                 <Image
//                   src="/images/process_image.png"
//                   alt="Our Step-by-Step UK Spouse Visa Processing Framework"
//                   fill
//                   priority
//                   sizes="(max-width: 1024px) 100vw, 450px"
//                   className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
//                 />

//                 {/* Elegant Subtle Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#062f36]/5 via-transparent to-transparent opacity-60 pointer-events-none" />
//               </div>

//               {/* Modern Interactive Glassmorphic Floating Badge */}
//               <div className="absolute -bottom-4 -left-2 sm:left-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl p-4 flex items-center gap-3.5 shadow-[0_12px_30px_rgba(6,47,54,0.1)] transition-transform duration-300 hover:-translate-y-1 select-none">
//                 <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0f6b72] to-[#0b5156] flex items-center justify-center text-white shadow-sm shadow-[#0f6b72]/20">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx="12" cy="12" r="10" />
//                     <polyline points="12 6 12 12 16 14" />
//                   </svg>
//                 </div>
//                 <div className="flex flex-col">
//                   <strong className="text-xs font-black text-[#062f36] tracking-tight leading-none">Streamlined Delivery</strong>
//                   <span className="text-[10px] font-bold text-[#0f6b72] mt-1 uppercase tracking-wider">Stress-Free Timeline</span>
//                 </div>
//               </div>

//               {/* Floating Success Indicator Badge */}
//               <div className="absolute -top-4 -right-2 sm:right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl p-3 px-4 flex items-center gap-2 shadow-[0_12px_30px_rgba(6,47,54,0.1)] transition-transform duration-300 hover:-translate-y-1 select-none">
//                 <span className="flex h-2 w-2 rounded-full bg-emerald-500 relative">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 </span>
//                 <span className="text-xs font-bold text-[#062f36] tracking-tight">
//                   End-to-End Legal Support
//                 </span>
//               </div>

//             </div>
//           </div>

//           {/* Right Column - Timeline Cards Removed, Premium Lead Form Added */}
//           <div className="lg:col-span-7 w-full">
//             <ProcessLeadForm
//               heading="Ready to learn about our process?"
//               description="Provide your details below to get instant access to our comprehensive processing framework and personalized consultation options."
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
















"use client";

import React from "react";
import Image from "next/image";
import PageHero from "../ui/PageHero";
import ProcessLeadForm from "../ui/ProcessLeadForm"; // Import the new form component

export default function ProcessPageContent() {
  return (
    <section className="py-4 min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#f8fbfb] overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto px-4">

        {/* Top Header Integration */}
        <div className="max-w-[890px] mx-auto mb-10 text-center md:text-left">
          <PageHero
            eyebrow="Our Process"
            title="Expert guidance and end-to-end support for your UK Spouse Visa."
          />
        </div>

        {/* Modern Split Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Sticky Media Illustration Column - Optimized & Reduced Width */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none lg:sticky lg:top-8 z-10">
            <div className="relative w-full rounded-2xl bg-[#0f6b72]/5 p-4 border border-slate-100 backdrop-blur-sm shadow-[0_20px_50px_rgba(6,47,54,0.04)] group">

              {/* Decorative Accent Background Design Blobs */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f4c400]/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0f6b72]/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Master Wrapper for Process Image - Size Scaled Down Perfectly */}
              <div className="relative w-full aspect-[4/5] max-h-[490px] sm:max-h-[520px] rounded-xl overflow-hidden bg-white shadow-md border border-slate-200/60 flex items-center justify-center">
                <Image
                  src="/images/process_image.png"
                  alt="Our Step-by-Step UK Spouse Visa Processing Framework"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Elegant Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062f36]/5 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Modern Interactive Glassmorphic Floating Badge */}
              <div className="absolute -bottom-4 -left-2 sm:left-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl p-3 flex items-center gap-3 shadow-[0_12px_30px_rgba(6,47,54,0.1)] transition-transform duration-300 hover:-translate-y-1 select-none">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f6b72] to-[#0b5156] flex items-center justify-center text-white shadow-sm shadow-[#0f6b72]/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <strong className="text-[11px] font-black text-[#062f36] tracking-tight leading-none">Streamlined Delivery</strong>
                  <span className="text-[9px] font-bold text-[#0f6b72] mt-1 uppercase tracking-wider">Stress-Free Timeline</span>
                </div>
              </div>

              {/* Floating Success Indicator Badge */}
              <div className="absolute -top-4 -right-2 sm:right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-xl p-2.5 px-3.5 flex items-center gap-2 shadow-[0_12px_30px_rgba(6,47,54,0.1)] transition-transform duration-300 hover:-translate-y-1 select-none">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                </span>
                <span className="text-[11px] font-bold text-[#062f36] tracking-tight">
                  End-to-End Legal Support
                </span>
              </div>

            </div>
          </div>

          {/* Right Column - Premium Lead Form */}
          <div className="lg:col-span-7 w-full">
            <ProcessLeadForm
              heading="Ready to learn about our process?"
              description="Provide your details below to get instant access to our comprehensive processing framework and personalized consultation options."
            />
          </div>

        </div>
      </div>
    </section>
  );
}