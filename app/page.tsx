import Link from "next/link";
import Reveal from "./components/ui/Reveal";
import Accordion from "./components/ui/Accordion";
import TrustSection from "./components/sections/TrustSection";
import EligibilityOverview from "./components/sections/EligibilityOverview";
import DownloadChecklist from "./components/ui/DownloadChecklist";

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container hero-grid">
            <div className="hero-panel">
              <Reveal>
                <div className="hero-eyebrow eyebrow">Spouse & Family Visa Solicitors</div>
                <h1>Family and Spouse Visa Solicitors in Manchester</h1>
                <p className="hero-copy">
                  MSD Solicitors are experts in immigration law and visa applications. Our team of
                  experienced immigration solicitors can help you find out which type of visa you need
                  and support you through submission and follow-up.
                </p>
                <p className="hero-copy" style={{ marginTop: 12 }}>
                  We strive to understand the unique details of your circumstances and make sure your case
                  is handled with care. With immigration solicitors based in Manchester, Birmingham and
                  London, we keep in close contact with clients throughout the process. Our experience in
                  <Link href="https://www.msdsolicitors.co.uk/family-law/divorce"> divorce law</Link> also means we can advise where family law intersects with immigration.
                </p>
                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-accent">Speak to an immigration solicitor</Link>
                  <Link href="/services" className="btn btn-outline">Our Services</Link>
                </div>
              </Reveal>
            </div>

            <div className="hero-visual">
              <Reveal>
                <img src="/images/heroImg.png" alt="Family illustration" style={{ width: "100%", borderRadius: 16, boxShadow: "var(--shadow-soft)" }} />

                <div style={{ marginTop: 18 }} className="hero-stats">
                  <div>
                    <strong>Manchester</strong>
                    <span>Local offices and in-person advice</span>
                  </div>
                  <div>
                    <strong>Trusted</strong>
                    <span>Experienced immigration solicitors</span>
                  </div>
                  <div>
                    <strong>Support</strong>
                    <span>End-to-end application help</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      <EligibilityOverview />

      {/* <section className="section process-section">
        <div className="container narrow">
          <Reveal>
            <h2 className="page-title">How the process works</h2>
            <p className="lead">A clear timeline from eligibility checks to application and follow-up.</p>

            <div className="timeline" style={{ marginTop: 22 }}>
              <Reveal delay={80} className="timeline-item">
                <span>1</span>
                <div>
                  <h2>Initial assessment</h2>
                  <p>We evaluate your eligibility and recommend the strongest application route.</p>
                </div>
              </Reveal>

              <Reveal delay={160} className="timeline-item">
                <span>2</span>
                <div>
                  <h2>Document preparation</h2>
                  <p>We compile and review all supporting evidence to meet the Home Office standards.</p>
                </div>
              </Reveal>

              <Reveal delay={240} className="timeline-item">
                <span>3</span>
                <div>
                  <h2>Application & follow-up</h2>
                  <p>We submit the application and liaise with authorities until the outcome is reached.</p>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section> */}

      <section className="cta-strip">
        <div className="container strip-inner">
          <div>
            <strong style={{ fontSize: "1.12rem" }}>Ready to start your application?</strong>
            <div style={{ marginTop: 6, color: "rgba(255,255,255,0.95)" }}>Book a free consultation with our immigration team today.</div>
          </div>
          <div>
            <Link href="/contact" className="strip-link">Book a free consultation</Link>
          </div>
        </div>
      </section>

      <section className="page-section about-section">
        <div className="container">
          <Reveal>
            <div className="about-grid">
              <div className="about-content">
                <div className="eyebrow">Professional Expertise</div>
                <h2 className="page-title">About Our Specialized Services</h2>
                <p className="lead">Personal, practical immigration support for spouse and family visa applications.</p>

                <div className="feature-list">
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <div>
                      <strong>Start-to-finish support</strong>
                      <div className="muted">Complete eligibility checks, rigorous document preparation, and direct submission management.</div>
                    </div>
                  </div>

                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v6m-6 2h12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <div>
                      <strong>Document expertise</strong>
                      <div className="muted">We help you gather, verify, and format evidence to strictly meet Home Office evidentiary standards.</div>
                    </div>
                  </div>

                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="3"/></svg>
                    <div>
                      <strong>Clear timelines</strong>
                      <div className="muted">We outline realistic processing expectations and keep you updated at every critical stage.</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
                  <Link href="/contact" className="btn btn-accent">Book a free consultation</Link>
                  <Link href="/services" className="btn btn-outline" style={{ color: 'var(--teal-deep)', borderColor: 'var(--teal)' }}>View services</Link>
                </div>
              </div>

              <div className="about-visual-wrapper">
                <Reveal delay={120} className="about-visual">
                  <img src="/images/services_Image.png" alt="Specialized Services" />
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section visa-info-section">
        <div className="container">
          <Reveal>
            <div className="info-grid modern-info">
              <div className="info-left">
                <div className="eyebrow">Detailed Guidance</div>
                <h2 className="page-title">Spouse Family Visa</h2>
                <p className="lead">(also known as Spouse Entry Clearance)</p>

                <p style={{ marginTop: 24, fontSize: '1.1rem', color: "#556b6e", lineHeight: '1.7' }}>
                  If you would like your partner to join you in the UK, you will need to apply for a Spouse
                  Family Visa. To take this route, you must be a British citizen or have settled status in the UK.
                </p>

                <div className="feature-cta">
                  <strong>Professional Legal Assistance</strong>
                  <p style={{ margin: 0, color: "#556b6e" }}>
                    Personalised advice, document checks and a managed application process from our offices in Manchester, Birmingham and London.
                  </p>
                </div>

                <Accordion
                  items={[
                    { title: "Spouse Family Visa, also known as Spouse Entry Clearance", content: "This route allows partners to join UK residents when eligibility criteria are met. It is the primary path for families seeking to reunite in the UK." },
                    { title: "Applications for married partners and civil partners", content: "If your marriage or civil partnership is recognised in the UK, you can apply under the spouse route. We ensure all legal certifications meet Home Office standards." },
                    { title: "Applications for partners who have lived together for at least 2 years", content: "Long-term cohabiting partners may be eligible if they can evidence living together for two years through shared financial and residential records." },
                    { title: "Fiance and proposed civil partner visa guidance", content: "If you plan to marry in the UK within six months of arrival, this route can be used. We guide you through the specific intent requirements for this visa." },
                  ]}
                />

                <div style={{ marginTop: 40, display: "flex", gap: 16, alignItems: "center" }}>
                  <Link href="/contact" className="btn btn-accent">Book a free consultation</Link>
                  <DownloadChecklist />
                </div>
              </div>

              <aside className="info-right sticky-card">
                <div className="sidebar-header">
                  <h3>Quick Summary</h3>
                  <div className="title-divider" style={{ margin: '12px 0 20px', width: '40px' }}></div>
                  <p style={{ color: '#556b6e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Typical processing times vary by location. We focus on preparing complete, "decision-ready" applications to minimize delays.
                  </p>
                </div>

                <div className="mini-stats">
                  <div>
                    <strong>First-time success</strong>
                    <div className="muted" style={{ fontSize: '0.85rem', marginTop: 4 }}>Rigorous document checks to significantly improve acceptance chances.</div>
                  </div>
                  <div>
                    <strong>Local offices</strong>
                    <div className="muted" style={{ fontSize: '0.85rem', marginTop: 4 }}>Manchester, Birmingham & London branches for in-person support.</div>
                  </div>
                </div>

                <div style={{ marginTop: 24, borderTop: '1px solid rgba(6,47,54,0.06)', paddingTop: 20 }}>
                  <Link href="/services" className="text-link" style={{ fontWeight: 800, color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    See full services & pricing <span>→</span>
                  </Link>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
