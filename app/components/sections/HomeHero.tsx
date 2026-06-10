import ButtonLink from "../ui/ButtonLink";
import { homeHighlights } from "../../data/site";

export default function HomeHero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="container hero-grid">
          <div className="hero-panel">
            <p className="eyebrow hero-eyebrow">MSD Solicitors</p>
            <h1>Family and Spouse Visa Solicitors in Manchester</h1>
            <p className="hero-copy">
              Expert immigration law and visa application support for partners
              applying to join or remain with their loved one in the UK.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Book Free Consultation</ButtonLink>
              <ButtonLink href="/eligibility" variant="outline">
                Check Eligibility
              </ButtonLink>
            </div>
            <div className="hero-stats" aria-label="Service strengths">
              <div>
                <strong>Expert</strong>
                <span>solicitors</span>
              </div>
              <div>
                <strong>Free</strong>
                <span>consultation</span>
              </div>
              <div>
                <strong>UK</strong>
                <span>visa support</span>
              </div>
            </div>
          </div>
          <div className="hero-list" aria-label="Service highlights">
            {homeHighlights.map((item) => (
              <div className="hero-list-item" key={item}>
                <span aria-hidden="true">+</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
