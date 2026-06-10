import React from 'react';
import Link from 'next/link';

const EligibilityOverview = () => {
  const requirements = [
    "You and your partner are both over the age of 18 at the time of submitting the application.",
    "You are not in a forbidden relationship with your partner (i.e. too closely related).",
    "You have met your partner in person.",
    "You are in a genuine and subsisting marriage.",
    "You were free to marry (i.e. any previous marriages have been legally ended).",
    "You intend to live together with your partner permanently.",
    "The sponsoring partner must earn more than £18,600 per year or have enough savings to sponsor you (the income threshold is higher if dependant children are also being sponsored).",
    "You can provide proof of sufficient knowledge of the English language."
  ];

  const requirementIcons = [
    "👤",
    "🚫",
    "🤝",
    "❤️",
    "📄",
    "🏠",
    "💰",
    "🗣️"
  ];

  return (
    <section className="section eligibility-overview-section">
      <div className="container">
        <div className="eligibility-header">
          <h2 className="eligibility-title">
            UK <span className="gold-text">Spouse</span> Visa Eligibility
          </h2>
          <div className="title-divider"></div>
        </div>

        <p className="eligibility-subtitle">
          If you wish to join your Spouse or Partner in the United Kingdom, under the Appendix FM Immigration visa route and wish to be considered under this Visa category, you must
        </p>

        <div className="eligibility-requirements-grid">
          {requirements.map((req, index) => (
            <div key={index} className="eligibility-requirement-box">
              <div className="req-icon-wrapper">
                <span className="req-icon">{requirementIcons[index]}</span>
              </div>
              <span className="req-text">{req}</span>
            </div>
          ))}
        </div>

        {/* Eligibility Checker Button with Description */}
        <div className="eligibility-checker-btn-wrapper">
          <div className="checker-benefits">
            <span>⚡ Takes 2 Minutes</span>
            <span>💎 100% Free</span>
            <span>🛡️ No Obligation</span>
          </div>
          <Link href="/eligibility/check" className="eligibility-checker-btn">
            Check Your Eligibility Now
          </Link>
          <p className="checker-hint">Find out instantly if you meet the core requirements for a UK Spouse Visa.</p>
        </div>

        <div className="eligibility-text-content">
          <div className="text-card">
            <p>
              Applying for a UK Spouse Visa can be a complex process, and having the right legal support can significantly improve your chances of success.{" "}
              <a
                href="https://www.msdsolicitors.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold', color: '#f4c400', textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                MSD Solicitors
              </a>{" "}
              is a highly regarded UK law firm with extensive experience in immigration matters, helping individuals and families navigate the UK Spouse Visa process with confidence and clarity.
            </p>

            <p style={{ marginTop: '20px' }}>
              Their dedicated team of immigration solicitors and caseworkers provides tailored legal guidance throughout every stage of the application, from document preparation and eligibility assessments to submission and ongoing support. With a strong focus on accuracy, compliance, and client care, MSD Solicitors is committed to delivering professional legal services designed to maximise the prospects of a successful outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityOverview;
