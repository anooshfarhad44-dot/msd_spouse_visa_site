"use client";

import React, { useState } from 'react';

const reviewsData = [
  {
    name: "Osama Shinwari",
    date: "Nov 3, 2025",
    reviewTitle: "I had my asylum case refused at first...",
    reviewBody: "I had my asylum case refused at first and was very stressed, but Mr Hamza Khan handled my appeal with great care and attention. He carefully addressed every issue raised by the Home Office and kept me updated throughout the process. Thanks to his hard work and detailed submissions, the Home Office granted my asylum without even needing a hearing. I'm truly grateful for his dedication, knowledge, and support. I highly recommend him to anyone needing help with immigration or asylum matters.",
    stars: 5
  },
  {
    name: "Elizabeth Sidley",
    date: "May 19, 2026",
    reviewTitle: "Excellent service",
    reviewBody: "Excellent service, very professional. We acquired a Visa very promptly. It was all handled for us, delays on our part were dealt with at no extra charge, Hasan was available to answer any questions or problems that arose.",
    stars: 5
  },
  {
    name: "Charlyn B",
    date: "Mar 3, 2026",
    reviewTitle: "Medexpress is better and fast",
    reviewBody: "Medexpress is better and fast, but sometimes the clinical review they ened to check order history at times to see about the gap thing, they have access of my account and all, Im sure they can see the gap etc, but I like the website its cheaper compared to others.",
    stars: 5
  },
  {
    name: "Hadi",
    date: "Apr 20, 2026",
    reviewTitle: "Excellent services",
    reviewBody: "Excellent services",
    stars: 5
  },
  {
    name: "MR MANIDEEP DAMERA",
    date: "Aug 7, 2025",
    reviewTitle: "I want to express my heartfelt thanks...",
    reviewBody: "I want to express my heartfelt thanks to my lawyer, Javed, for successfully helping me secure my Skilled Worker Visa. From the very beginning, Javed guided me through every step of the process with great care and professionalism. He didn’t just handle my case—he truly understood it. He double-checked every detail, took multiple references, and made well-researched decisions that showed his intelligence and dedication. What stood out most was how available and supportive he was throughout the journey. He took on the stress that I was carrying and made the entire process smooth and manageable for me. His commitment and expertise were key in getting me across the finish line. Thank you very much, Javed, and I wish you all the best in your future cases. You're an exceptional lawyer and I’m grateful for everything you’ve done!",
    stars: 5
  },
  {
    name: "Gabriel Tebogo Mooke",
    date: "4 months ago",
    reviewTitle: "I would like to thank Hamza Khan...",
    reviewBody: "I would like to thank Hamza Khan for full support, patience and professionalism throughout my wife’s dependent visa application. He took me through the whole process smoothly and the results had positively paid off. We are grateful for your service. Keep up the excellent work Mr Hamza.",
    stars: 5
  },
  {
    name: "G Boss",
    date: "5 months ago",
    reviewTitle: "Highly recommend MSD Solicitors...",
    reviewBody: "Highly recommend MSD Solicitors, I was worried when I first met with Zain, his advise, his knowledge, his confidence was amazing. Zain made every effort to address all questions I had. He was available all the time, because of my worries whatever questions I had he always listen and answer. Beyond anything his knowledge on immigration laws and confidence was excellent. First day he said he will get visa sorted and accordingly without any problems he have sorted the visa. It was smooth process. Highly recommend Zain and his team.",
    stars: 5
  },
  {
    name: "Poppy",
    date: "5 months ago",
    reviewTitle: "Highly recommend MSD SOLICITORS...",
    reviewBody: "Highly recommend MSD SOLICITORS. I'm glad I found this firm. Mr.Hamza Khan helped us from deportation flight. I was and am still very anxious about our case. It is still ongoing but I have full trust in Mr Hamza Khan and MSD Solicitors. I believe they will be with us throughout our journey. I'm feeling grateful. Mr.Hamza Khan is truly a professional. He is always available when we need him. I'll be forever grateful.",
    stars: 5
  },
  {
    name: "Pradnya Gage",
    date: "6 months ago",
    reviewTitle: "Huge thanks to Mr. Hamza Khan...",
    reviewBody: "Huge thanks to Mr. Hamza Khan from MSD Solicitors. He was so calm, helpful and genuinely professional throughout the whole process. I was really stressed, but he kept reassuring me and handled everything so smoothly. He even helped me after his working hours just to make sure my application was sorted on time. Really grateful for his support — couldn’t recommend him enough.",
    stars: 5
  },
  {
    name: "Jominder Duggal",
    date: "6 months ago",
    reviewTitle: "Thank you so much to Mr Hamza...",
    reviewBody: "Thank you so much to Mr Hamza, he was very helpful throughout my applications process and successful results at the end. I also want to say thank you to Tasnim whenever I couldn't reach to Hamza she passed my messages to him and i always have response back from Hamza. I definitely recommend MSD Solicitors whoever looking for help with immigration matters.",
    stars: 5
  }
];

const StarRating = ({ stars }: { stars: number }) => {
  return (
    <div className="stars-container">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < stars ? "#FFD700" : "none"}
          stroke="#FFD700"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: typeof reviewsData[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = review.reviewBody.length > 100;
  const displayBody = shouldTruncate && !isExpanded
    ? review.reviewBody.slice(0, 100) + "..."
    : review.reviewBody;

  // Generate avatar initials
  const initials = review.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar">{initials}</div>
        <div className="review-user-info">
          <h4 className="review-name">{review.name}</h4>
          <p className="review-date">{review.date}</p>
        </div>
      </div>
      <StarRating stars={review.stars} />
      <h5 className="review-title">{review.reviewTitle}</h5>
      <p className="review-body">{displayBody}</p>
      {shouldTruncate && (
        <button
          className="show-more-btn"
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

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === reviewsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviewsData.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="reviews-carousel-section">
      <div className="container">
        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="carousel-track">
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .reviews-carousel-section {
          background: var(--soft);
          padding: 32px 0;
          border-bottom: 1px solid var(--line);
        }
        .carousel-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          overflow: hidden;
        }
        .carousel-btn {
          background: var(--white);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          color: var(--teal);
          flex-shrink: 0;
          z-index: 10;
        }
        .carousel-btn:hover {
          background: var(--teal);
          color: var(--white);
          transform: scale(1.1);
        }
        .carousel-track {
          display: flex;
          flex: 1;
          transition: transform 0.5s ease;
        }
        .carousel-slide {
          min-width: 100%;
          padding: 0 8px;
        }
        .review-card {
          background: var(--white);
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        }
        .review-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .review-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--teal), var(--teal-deep));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-weight: 900;
          font-size: 1.3rem;
        }
        .review-user-info {
          display: flex;
          flex-direction: column;
        }
        .review-name {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--ink);
        }
        .review-date {
          margin: 4px 0 0 0;
          font-size: 0.9rem;
          color: var(--muted);
        }
        .stars-container {
          display: flex;
          gap: 4px;
          margin-bottom: 12px;
        }
        .review-title {
          margin: 0 0 12px 0;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--teal);
        }
        .review-body {
          margin: 0;
          line-height: 1.7;
          color: var(--ink);
          font-size: 1rem;
        }
        .show-more-btn {
          margin-top: 12px;
          background: transparent;
          border: none;
          color: var(--teal);
          font-weight: 900;
          cursor: pointer;
          font-size: 0.95rem;
          padding: 4px 0;
        }
        .show-more-btn:hover {
          text-decoration: underline;
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
        }
        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--teal);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .carousel-dot.active {
          background: var(--teal);
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .carousel-btn {
            width: 40px;
            height: 40px;
          }
          .review-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
