"use client";

import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import Link from "next/link";

const TrustSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    { title: "UK-Regulated Immigration Solicitors", description: "Professional, qualified legal representation you can trust" },
    { title: "Guaranteed Fixed-Fee Services", description: "Transparent pricing with no hidden charges or surprises" },
    { title: "Free Initial Case Assessment", description: "Get expert advice on your eligibility before committing" },
    { title: "No Win, No Fee Representation", description: "Risk-free service with payment only on success" },
    { title: "Expedited Processing Options Available", description: "Fast-track your application when time is critical" },
    { title: "Cost-Effective Immigration Solutions", description: "Premium legal services at competitive, accessible rates" }
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
                <li 
                  key={index} 
                  className={`trust-feature-item ${openIndex === index ? 'open' : ''}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="feature-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <div className="feature-title-row">
                      <strong className="feature-title">{feature.title}</strong>
                      <span className={`expand-icon ${openIndex === index ? 'rotated' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </div>
                    {openIndex === index && (
                      <span className="feature-description">{feature.description}</span>
                    )}
                  </div>
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
