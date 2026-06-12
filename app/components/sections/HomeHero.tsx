// import Link from "next/link";
// import Reveal from "../ui/Reveal";

// export default function HomeHero() {
//   return (
//     <section
//       className="relative overflow-hidden min-h-[500px] lg:h-[60vh] flex items-center"
//       style={{
//         backgroundImage:
//           "radial-gradient(circle at 70% 20%, rgba(244,196,0,0.2), transparent 20rem), linear-gradient(90deg, rgba(6,47,54,0.94), rgba(6,47,54,0.56)), url('/images/heroImg.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Global Style Injector for Custom Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-6px); }
//         }
//         @keyframes subtle-pulse {
//           0%, 100% { transform: scale(1); box-shadow: 0 14px 30px rgba(244,196,0,0.25); }
//           50% { transform: scale(1.02); box-shadow: 0 20px 40px rgba(244,196,0,0.45); }
//         }
//         @keyframes shimmer-sweep {
//           0% { left: -100%; }
//           100% { left: 200%; }
//         }
//       `}</style>

//       {/* fade bottom */}
//       <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white/96 pointer-events-none" />

//       <div className="relative z-10 w-full py-6 lg:py-0">
//         <div className="w-full max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,660px)_minmax(300px,1fr)] gap-8 items-center">
          
//           {/* Left panel */}
//           <div>
//             <Reveal>
//               <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-3">
//                 Spouse &amp; Family Visa Solicitors
//               </div>
              
//               <h1 className="text-3xl md:text-4xl lg:text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white leading-tight tracking-tight">
//                 Top UK Spouse Visa Solicitors in Manchester
//               </h1>
              
//               <p className="mt-3 text-white/90 text-base md:text-lg leading-relaxed max-w-[560px] font-medium">
//                 Bringing families together is our core mission. MSD Solicitors specialize in navigating complex UK Spouse Visa applications, transforming stressful legal requirements into seamless, successful journeys.
//               </p>
              
//               <p className="mt-2.5 text-[#f4c400] text-lg font-black leading-relaxed max-w-[560px] flex items-center gap-2">
//                 <span className="inline-block w-2 h-2 rounded-full bg-[#f4c400] animate-ping" />
//                 Proudly Maintaining a 99% Success Ratio
//               </p>

//               <div className="flex flex-wrap items-center gap-4 mt-5">
//                 <Link 
//                   href="/contact" 
//                   className="relative overflow-hidden inline-flex items-center justify-center min-h-[52px] px-7 py-3 rounded-full font-black bg-[#f4c400] text-[#062f36] transition-all duration-300 text-sm animate-[subtle-pulse_3s_ease-in-out_infinite] hover:bg-[#ebd04b]"
//                 >
//                   <span 
//                     className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none animate-[shimmer-sweep_2.5s_infinite]"
//                     style={{ animationTimingFunction: 'linear' }}
//                   />
//                   <span className="relative z-10">Speak to an immigration solicitor</span>
//                 </Link>

//                 <Link href="/services" className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold text-white border border-white/50 bg-white/12 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200 text-sm">
//                   Our Services
//                 </Link>
//               </div>
//             </Reveal>
//           </div>

//           {/* Right panel */}
//           <div>
//             <Reveal delay={120}>
//               <div className="max-w-[420px] mx-auto lg:max-w-none">
//                 <img
//                   src="/images/heroImg.png"
//                   alt="Family illustration"
//                   className="w-full rounded-2xl shadow-[0_12px_40px_rgba(6,47,54,0.15)] max-h-[220px] lg:max-h-[280px] object-cover"
//                 />
                
//                 <div className="mt-4 flex flex-col items-center">
//                   {/* Eligibility CTA button with smooth Floating Keyframe Animation */}
//                   <div className="relative w-full group animate-[float_4s_ease-in-out_infinite]">
//                     <span aria-hidden="true" className="btn-ripple" />
//                     <span aria-hidden="true" className="btn-ripple-2" />

//                     <Link
//                       href="/eligibility/check"
//                       className="btn-eligibility relative z-10 flex items-center justify-center w-full min-h-[54px] px-6 text-lg font-black rounded-full overflow-hidden bg-[#f4c400] text-[#062f36] shadow-[0_10px_20px_rgba(244,196,0,0.25)] hover:scale-[1.02] transition-all duration-300"
//                     >
//                       <span aria-hidden="true" className="btn-shimmer" />
//                       <span className="relative z-10 flex items-center gap-2">
//                         <span className="arrow-nudge">
//                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M5 12h14M12 5l7 7-7 7" />
//                           </svg>
//                         </span>
//                         Check Your Eligibility Now
//                       </span>
//                     </Link>
//                   </div>

//                   {/* Badges shifted layout beneath the main button */}
//                   <div className="flex gap-2 justify-center mt-3.5 flex-wrap w-full">
//                     {[
//                       { icon: "⚡", label: "Takes 2 Minutes" },
//                       { icon: "⭐", label: "100% Free" },
//                       { icon: "🛡️", label: "No Obligation" },
//                     ].map((b) => (
//                       <div
//                         key={b.label}
//                         className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-[#062f36] font-black text-[11px] border-2 border-[#0f6b72] shadow-[0_2px_8px_rgba(6,47,54,0.1)] shrink-0"
//                       >
//                         <span>{b.icon}</span>
//                         {b.label}
//                       </div>
//                     ))}
//                   </div>

//                   <p className="mt-2.5 text-center text-white/90 font-bold text-xs tracking-wide max-w-xs">
//                     Find out instantly if you meet the core requirements for a UK Spouse Visa.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }













"use client";

import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[500px] lg:h-[60vh] flex items-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 70% 20%, rgba(244,196,0,0.2), transparent 20rem), linear-gradient(90deg, rgba(6,47,54,0.94), rgba(6,47,54,0.56)), url('/images/heroImg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Global Style Injector for Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 14px 30px rgba(244,196,0,0.25); }
          50% { transform: scale(1.02); box-shadow: 0 20px 40px rgba(244,196,0,0.45); }
        }
        @keyframes shimmer-sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>

      {/* fade bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white/96 pointer-events-none" />

      <div className="relative z-10 w-full py-6 lg:py-0">
        <div className="w-full max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,660px)_minmax(300px,1fr)] gap-8 items-center">
          
          {/* Left panel */}
          <div>
            <Reveal>
              <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-3">
                Spouse &amp; Family Visa Solicitors
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white leading-tight tracking-tight">
                Top UK Spouse Visa Solicitors in Manchester
              </h1>
              
              <p className="mt-3 text-white/90 text-base md:text-lg leading-relaxed max-w-[560px] font-medium">
                Bringing families together is our core mission. MSD Solicitors specialize in navigating complex UK Spouse Visa applications, transforming stressful legal requirements into seamless, successful journeys.
              </p>
              
              <p className="mt-2.5 text-[#f4c400] text-lg font-black leading-relaxed max-w-[560px] flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#f4c400] animate-ping" />
                Proudly Maintaining a 99% Success Ratio
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-5">
                <Link 
                  href="/contact" 
                  className="relative overflow-hidden inline-flex items-center justify-center min-h-[52px] px-7 py-3 rounded-full font-black bg-[#f4c400] text-[#062f36] transition-all duration-300 text-sm animate-[subtle-pulse_3s_ease-in-out_infinite] hover:bg-[#ebd04b]"
                >
                  <span 
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none animate-[shimmer-sweep_2.5s_infinite]"
                    style={{ animationTimingFunction: 'linear' }}
                  />
                  <span className="relative z-10">Speak to an immigration solicitor</span>
                </Link>

                <Link href="/services" className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold text-white border border-white/50 bg-white/12 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200 text-sm">
                  Our Services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right panel */}
          <div className="w-full flex justify-center lg:justify-end">
            <Reveal delay={120}>
              {/* Reduced max-width of container to 360px to keep it compact */}
              <div className="w-full max-w-[360px] bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
                
                {/* 📸 Image scale slightly reduced using max-h-[200px] and object-cover */}
                <img
                  src="/images/heroImg.png"
                  alt="Family illustration"
                  className="contain w-full h-auto max-h-[360px] rounded-xl shadow-[0_12px_40px_rgba(6,47,54,0.15)] object-cover"
                />
                
                <div className="mt-4 flex flex-col items-center w-full">
                  {/* Eligibility CTA button with smooth Floating Keyframe Animation */}
                  <div className="relative w-full group animate-[float_4s_ease-in-out_infinite]">
                    <span aria-hidden="true" className="btn-ripple" />
                    <span aria-hidden="true" className="btn-ripple-2" />

                    <Link
                      href="/eligibility/check"
                      className="btn-eligibility relative z-10 flex items-center justify-center w-full min-h-[50px] px-5 text-sm md:text-base font-black rounded-full overflow-hidden bg-[#f4c400] text-[#062f36] shadow-[0_10px_20px_rgba(244,196,0,0.25)] hover:scale-[1.02] transition-all duration-300"
                    >
                      <span aria-hidden="true" className="btn-shimmer" />
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="arrow-nudge">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                        Check Your Eligibility Now
                      </span>
                    </Link>
                  </div>

                  {/* Badges shifted layout beneath the main button */}
                  <div className="flex gap-1.5 justify-center mt-3.5 flex-wrap w-full">
                    {[
                      { icon: "⚡", label: "Takes 2 Minutes" },
                      { icon: "⭐", label: "100% Free" },
                      { icon: "🛡️", label: "No Obligation" },
                    ].map((b) => (
                      <div
                        key={b.label}
                        className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-[#062f36] font-black text-[10px] border-2 border-[#0f6b72] shadow-[0_2px_8px_rgba(6,47,54,0.1)] shrink-0"
                      >
                        <span>{b.icon}</span>
                        {b.label}
                      </div>
                    ))}
                  </div>

                  <p className="mt-2.5 text-center text-white/90 font-medium text-[11px] tracking-wide max-w-xs leading-relaxed">
                    Find out instantly if you meet the core requirements for a UK Spouse Visa.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}