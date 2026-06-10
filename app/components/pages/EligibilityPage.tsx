import { eligibilityRequirements } from "../../data/site";
import Checklist from "../ui/Checklist";
import PageHero from "../ui/PageHero";
import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function EligibilityPageContent() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <Reveal>
          <PageHero eyebrow="Spouse Family Visa" title="Who is eligible for a Spouse Family Visa?">
            To apply as a spouse or partner, your sponsor will usually need to be a British citizen, settled in the UK, or otherwise eligible to sponsor you. We review your relationship, financial position and evidence before the application is submitted.
          </PageHero>
        </Reveal>

        <Reveal delay={60}>
          <div className="eligibility-cta">
            <div className="cta-badge">
              ✓ Free Eligibility Assessment
            </div>

            <h3>Ready to Find Out If You Qualify?</h3>

            <p>
              Complete our quick eligibility check in under 2 minutes.
              No fees, no obligation, and instant guidance on your options.
            </p>

            <div className="cta-benefits">
              <span>✓ Takes 2 Minutes</span>
              <span>✓ 100% Free</span>
              <span>✓ No Obligation</span>
            </div>

            <div className="cta-actions">
              <Link
                href="/eligibility/check"
                className="btn btn-accent cta-primary"
              >
                Check My Eligibility
              </Link>

              <a href="tel:01615030553" className="cta-phone">
                📞 0161 503 0553
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 style={{ marginTop: 28 }}>Quick eligibility checklist</h2>
          <p className="lead">These are common requirements we check when assessing eligibility.</p>
          <Checklist items={eligibilityRequirements} />
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 28 }}>
          <Reveal delay={120}>
            <div className="info-card">
              <h3>Common documents to prepare</h3>
              <ul style={{ marginTop: 12 }}>
                <li>Passports and ID for both partners</li>
                <li>Marriage or civil partnership certificate (or cohabitation evidence)</li>
                <li>Proof of sponsor income (payslips, P60, bank statements)</li>
                <li>Proof of accommodation</li>
                <li>Photos, travel history and messages to show relationship is genuine</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="info-card">
              <h3>Typical timeline</h3>
              <p style={{ marginTop: 8, color: "var(--muted)" }}>Applications vary depending on route and country. Typical steps:</p>
              <ol style={{ marginTop: 12 }}>
                <li>Initial assessment & document checklist (1–3 days)</li>
                <li>Document gathering and application drafting (1–2 weeks)</li>
                <li>Submission and Home Office processing (varies by country)</li>
                <li>Follow-up and representation if needed</li>
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div style={{ marginTop: 28 }}>
            <h3>Frequently asked questions</h3>

            <details style={{ marginTop: 12 }}>
              <summary><strong>Can my partner work after arriving?</strong></summary>
              <div style={{ marginTop: 8 }} className="muted">In most spouse visa routes, the partner is allowed to work in the UK. Specific restrictions may apply depending on the visa type — we verify this during the assessment.</div>
            </details>

            <details style={{ marginTop: 12 }}>
              <summary><strong>What if my sponsor doesn't meet the income threshold?</strong></summary>
              <div style={{ marginTop: 8 }} className="muted">There are alternative routes using savings, or relying on other exemptions such as being on certain benefits, or meeting alternative criteria. We can review your case for options.</div>
            </details>

            <details style={{ marginTop: 12 }}>
              <summary><strong>Do I need legal representation?</strong></summary>
              <div style={{ marginTop: 8 }} className="muted">You are not required to have a solicitor, but professional review reduces the risk of omission or incorrect evidence. We provide tailored support and raise application quality.</div>
            </details>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="legal-note" style={{ marginTop: 22 }}>
            Financial requirements can change. GOV.UK currently states that many partner and spouse applications usually need at least £29,000 annual income, unless a different route or exemption applies.
            <div style={{ marginTop: 12 }}>
              <Link href="/contact" className="text-link">Contact us for a free eligibility check</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
