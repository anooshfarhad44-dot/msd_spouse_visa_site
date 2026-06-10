import React from 'react';
import Reveal from '../ui/Reveal';
import Link from "next/link";

const TrustSection = () => {
  const features = [
    "UK Qualified Immigration Solicitors",
    "Fixed Fee Price Promise",
    "Free Consultation",
    "No Win No Fee",
    "Fast Track Processing Package available",
    "Competitively Priced Packages"
  ];

  const logos = [
    { src: "/images/socities_logos/c1.png", alt: "Logo 1" },
    { src: "/images/socities_logos/c2.png", alt: "Logo 2" },
    { src: "/images/socities_logos/c3.png", alt: "Logo 3" },
    { src: "/images/socities_logos/c4.png", alt: "Logo 4" },
  ];

  return (
    <section className="trust-section">
      <div className="container trust-grid">
        <div className="trust-content">
          <Reveal>
            <h2 className="trust-title">
              Apply For A UK Spouse Visa with{" "}
              <Link
                href="https://www.msdsolicitors.co.uk/"
                target="_blank"
                className="brand-link"
              >
                MSD Solicitors
              </Link>
            </h2>
            <h3 className="trust-subtitle">We Specialise in UK Marriage Visas</h3>

            <div className="success-rate">
              <span className="rate-number">99%</span>
              <div className="rate-text">
                <strong>Success Rate For</strong>
                <span>Spouse Visa Applications</span>
              </div>
            </div>

            <ul className="trust-features">
              {features.map((feature, index) => (
                <li key={index}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="trust-logos-carousel">
              <div className="carousel-track">
                {[...logos, ...logos].map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.alt} className="trust-logo" />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="trust-form-wrapper">
          <Reveal delay={200}>
            <div className="callback-card">
              <h3>Request A Call Back Now</h3>
              <form className="contact-form">
                <label>
                  Full name
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Phone number
                  <input type="tel" name="phone" placeholder="e.g. +44 7700 900000" />
                </label>
                <label>
                  Email address
                  <input type="email" name="email" placeholder="you@example.com" />
                </label>
                <label>
                  Case summary
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us where the applicant is applying from and any urgent dates."
                  />
                </label>
                <button type="submit" className="btn btn-accent">
                  Request Consultation
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
