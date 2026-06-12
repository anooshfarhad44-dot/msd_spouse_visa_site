


// "use client";

// export interface ReviewProps {
//   name: string;
//   date: string;
//   reviewTitle: string;
//   reviewBody: string;
//   stars: number;
// }

// interface ReviewCardComponentProps {
//   review: ReviewProps;
//   onOpenModal: (review: ReviewProps) => void;
// }

// export default function ReviewCard({ review, onOpenModal }: ReviewCardComponentProps) {
//   const getInitials = (name: string) =>
//     name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

//   // Truncate body to ~90 chars for a clean preview without overflow
//   const previewBody =
//     review.reviewBody.length > 90
//       ? review.reviewBody.slice(0, 90).trimEnd() + "…"
//       : review.reviewBody;

//   return (
//     <div
//       onClick={() => onOpenModal(review)}
//       className="w-full flex items-center gap-4 cursor-pointer group py-2.5 px-4 select-none bg-white rounded-xl border border-[#dbe7e9]/60 shadow-[0_2px_8px_rgba(6,47,54,0.04)] hover:border-[#0f6b72]/40 transition-all duration-200 min-w-0"
//     >
//       {/* Avatar */}
//       <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0f6b72] to-[#062f36] text-white font-extrabold text-xs grid place-items-center shrink-0 shadow-sm border-2 border-white">
//         {getInitials(review.name)}
//       </div>

//       {/* Text block — min-w-0 ensures it can shrink and truncate correctly */}
//       <div className="flex-1 min-w-0 overflow-hidden">
//         <div className="flex items-center gap-2 mb-0.5 min-w-0">
//           <span className="font-black text-sm text-[#073f47] shrink-0">{review.name}</span>
//           <span className="text-[11px] text-[#62777d] font-semibold shrink-0">{review.date}</span>
//         </div>
//         {/* Single line with hard truncation — no overflow possible */}
//         <p className="text-xs text-[#3a4f54] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
//           <span className="italic font-bold text-[#0f6b72]">"{review.reviewTitle}"</span>
//           {" — "}
//           {previewBody}
//         </p>
//       </div>

//       {/* Stars + CTA — shrink-0 so it never wraps into the text */}
//       <div className="flex items-center gap-3 shrink-0 pl-2 border-l border-[#dbe7e9]/60">
//         <div className="flex items-center gap-0.5">
//           {[...Array(review.stars)].map((_, i) => (
//             <svg key={i} className="w-3.5 h-3.5 fill-[#00b67a]" viewBox="0 0 24 24">
//               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//             </svg>
//           ))}
//         </div>
//         <span className="text-[11px] font-black text-[#0f6b72] group-hover:text-[#f47a2a] uppercase tracking-wider flex items-center gap-0.5 transition-colors">
//           Read Full
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 transition-transform">
//             <polyline points="9 18 15 12 9 6" />
//           </svg>
//         </span>
//       </div>
//     </div>
//   );
// }












"use client";

export interface ReviewProps {
  name: string;
  date: string;
  reviewTitle: string;
  reviewBody: string;
  stars: number;
}

interface ReviewCardComponentProps {
  review: ReviewProps;
  onOpenModal: (review: ReviewProps) => void;
}

export default function ReviewCard({ review, onOpenModal }: ReviewCardComponentProps) {
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  // Truncate body to ~90 chars for a clean preview without overflow
  const previewBody =
    review.reviewBody.length > 90
      ? review.reviewBody.slice(0, 90).trimEnd() + "…"
      : review.reviewBody;

  return (
    <div
      onClick={() => onOpenModal(review)}
      className="w-full flex items-center gap-4 cursor-pointer group py-2.5 px-4 select-none bg-white rounded-xl border border-[#dbe7e9]/60 shadow-[0_2px_8px_rgba(6,47,54,0.04)] hover:border-[#0f6b72]/40 transition-all duration-200 min-w-0"
    >
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0f6b72] to-[#062f36] text-white font-extrabold text-xs grid place-items-center shrink-0 shadow-sm border-2 border-white">
        {getInitials(review.name)}
      </div>

      {/* Text block — min-w-0 ensures it can shrink and truncate correctly */}
      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="flex items-center gap-2 mb-0.5 min-w-0">
          <span className="font-black text-sm text-[#073f47] shrink-0">{review.name}</span>
          <span className="text-[11px] text-[#62777d] font-semibold shrink-0">{review.date}</span>
        </div>
        {/* Single line with hard truncation — no overflow possible */}
        <p className="text-xs text-[#3a4f54] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="italic font-bold text-[#0f6b72]">"{review.reviewTitle}"</span>
          {" — "}
          {previewBody}
        </p>
      </div>

      {/* Stars + CTA — shrink-0 so it never wraps into the text */}
      <div className="flex items-center gap-3 shrink-0 pl-2 border-l border-[#dbe7e9]/60">
        <div className="flex items-center gap-0.5">
          {[...Array(review.stars)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 fill-[#ffb400]" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <span className="text-[11px] font-black text-[#0f6b72] group-hover:text-[#f47a2a] uppercase tracking-wider flex items-center gap-0.5 transition-colors">
          Read Full
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 transition-transform">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}