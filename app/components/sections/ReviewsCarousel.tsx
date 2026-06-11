"use client";

import React, { useState } from "react";
import { reviewsData } from "../../data/site";

const StarRating = ({ stars }: { stars: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < stars ? "#FFD700" : "none"} stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: (typeof reviewsData)[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = review.reviewBody.length > 100;
  const displayBody = shouldTruncate && !isExpanded ? review.reviewBody.slice(0, 100) + "..." : review.reviewBody;
  const initials = review.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  return (
    <div className="bg-white rounded-2xl p-7 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0f6b72] to-[#062f36] flex items-center justify-center text-white font-black text-xl shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="m-0 text-lg font-black text-[#182d32]">{review.name}</h4>
          <p className="m-0 mt-1 text-sm text-[#62777d]">{review.date}</p>
        </div>
      </div>
      <StarRating stars={review.stars} />
      <h5 className="mt-3 mb-3 text-lg font-extrabold text-[#0f6b72] m-0">{review.reviewTitle}</h5>
      <p className="m-0 leading-relaxed text-[#182d32]">{displayBody}</p>
      {shouldTruncate && (
        <button
          className="mt-3 bg-transparent border-0 text-[#0f6b72] font-black cursor-pointer text-sm p-0 hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((p) => (p === reviewsData.length - 1 ? 0 : p + 1));
  const prevSlide = () => setCurrentIndex((p) => (p === 0 ? reviewsData.length - 1 : p - 1));

  return (
    <section className="py-8 bg-[#f5f8f8] border-b border-[#dbe7e9]">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <div className="flex items-center gap-4 relative overflow-hidden">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white border-0 flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-[#0f6b72] shrink-0 z-10 hover:bg-[#0f6b72] hover:text-white hover:scale-110 transition-all duration-300"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex flex-1 overflow-hidden">
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className="min-w-full px-2 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white border-0 flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-[#0f6b72] shrink-0 z-10 hover:bg-[#0f6b72] hover:text-white hover:scale-110 transition-all duration-300"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2.5 mt-6">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`w-3 h-3 rounded-full border-2 border-[#0f6b72] cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "bg-[#0f6b72] scale-125" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
