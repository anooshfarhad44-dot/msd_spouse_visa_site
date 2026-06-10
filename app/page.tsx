import Link from "next/link";
import Reveal from "./components/ui/Reveal";
import Accordion from "./components/ui/Accordion";

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

      <section className="section">
        <div className="container narrow">
          <Reveal>
            <h2 className="page-title">Our Services</h2>
            <p className="lead">We help with every stage of the spouse and family visa process.</p>

            <div className="card-grid">
              <Reveal delay={80} className="service-card">
                <div className="photo-frame">
                  <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" alt="Eligibility advice" />
                </div>
                <h3>Eligibility Advice</h3>
                <p>We review your circumstances and advise the best visa route, tailored to your family.</p>
              </Reveal>

              <Reveal delay={160} className="service-card">
                <div className="photo-frame">
                  <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Application support" />
                </div>
                <h3>Application Support</h3>
                <p>End-to-end application preparation and document checks to reduce delays and refusals.</p>
              </Reveal>

              <Reveal delay={240} className="service-card">
                <div className="photo-frame">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Representation" />
                </div>
                <h3>Representation</h3>
                <p>Professional legal representation and appeals support if needed.</p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
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
      </section>

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

      <section className="page-section">
        <div className="container narrow">
          <Reveal>
            <div className="about-grid">
              <div>
                <h2 className="page-title">About our service</h2>
                <p className="lead">Personal, practical immigration support for spouse and family visa applications.</p>

                <div className="feature-list" style={{ marginTop: 18 }}>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#062F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <div>
                      <strong>Start-to-finish support</strong>
                      <div className="muted">Eligibility checks, document preparation and submission.</div>
                    </div>
                  </div>

                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="#062F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 10h12" stroke="#062F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <div>
                      <strong>Document expertise</strong>
                      <div className="muted">We help you gather and format evidence to meet Home Office expectations.</div>
                    </div>
                  </div>

                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#062F36" strokeWidth="2"/></svg>
                    <div>
                      <strong>Clear timelines</strong>
                      <div className="muted">We outline realistic expectations and keep you updated at every stage.</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 22, display: "flex", gap: 12 }}>
                  <Link href="/contact" className="btn btn-accent">Book a free consultation</Link>
                  <Link href="/services" className="btn btn-outline">View services</Link>
                </div>
              </div>

              <div>
                <Reveal delay={120} className="about-visual">
                  <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="About illustration" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-soft)" }} />
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <Reveal>
            <div className="info-grid modern-info">
              <div className="info-left">
                <h2 className="page-title">Spouse Family Visa</h2>
                <p className="lead">(also known as Spouse Entry Clearance)</p>

                <p style={{ marginTop: 14, color: "var(--muted)" }}>
                  If you would like your partner to join you in the UK, you will need to apply for a Spouse
                  Family Visa. To take this route, you must be a British citizen or have settled status in the UK.
                </p>

                <div className="feature-cta" style={{ marginTop: 18 }}>
                  <strong>We provide:</strong>
                  <p className="muted" style={{ marginTop: 8 }}>
                    Personalised advice, document checks and a managed application process from our offices in Manchester, Birmingham and London.
                  </p>
                </div>

                <Accordion
                  items={[
                    { title: "Spouse Family Visa, also known as Spouse Entry Clearance", content: "This route allows partners to join UK residents when eligibility criteria are met." },
                    { title: "Applications for married partners and civil partners", content: "If your marriage or civil partnership is recognised in the UK, you can apply under the spouse route." },
                    { title: "Applications for partners who have lived together for at least 2 years", content: "Long-term cohabiting partners may be eligible if they can evidence living together for two years." },
                    { title: "Fiance and proposed civil partner visa guidance", content: "If you plan to marry in the UK within six months of arrival, this route can be used by fiance and proposed partners." },
                  ]}
                />

                <h3 style={{ marginTop: 18 }}>Who is eligible for a Spouse Family Visa?</h3>
                <p style={{ color: "var(--muted)", marginTop: 8 }}>
                  To apply for a Family Visa as a spouse, you must meet the following requirements:
                </p>

                <ul className="styled-list" style={{ marginTop: 12 }}>
                  <li>You and your partner are both over the age of 18 at the time of submitting the application.</li>
                  <li>You are not in a forbidden relationship with your partner (i.e. too closely related).</li>
                  <li>You have met your partner in person and are in a genuine and subsisting marriage (or civil partnership).</li>
                  <li>The sponsoring partner must earn more than £18,600 per year or have sufficient savings (the income threshold rises if sponsoring dependant children).</li>
                  <li>Proof that the applicant has sufficient knowledge of the English language.</li>
                </ul>

                <div style={{ marginTop: 18, display: "flex", gap: 12, alignItems: "center" }}>
                  <Link href="/contact" className="btn btn-accent">Book a free consultation</Link>
                  <a href="/documents/sample-checklist.pdf" className="download-btn">Download checklist</a>
                </div>
              </div>

              <aside className="info-right sticky-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div>
                    <h3 style={{ margin: 0 }}>Quick summary</h3>
                    <p style={{ color: 'var(--muted)', marginTop: 8, fontSize: '0.95rem' }}>Typical processing time varies. We aim to prepare complete applications that minimise delays.</p>
                  </div>
                </div>

                <div className="mini-stats" style={{ marginTop: 18 }}>
                  <div>
                    <strong>First-time success</strong>
                    <div className="muted">Document checks to improve acceptance chances.</div>
                  </div>
                  <div>
                    <strong>Local offices</strong>
                    <div className="muted">Manchester, Birmingham & London.</div>
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <Link href="/services" className="text-link">See full services & pricing</Link>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
