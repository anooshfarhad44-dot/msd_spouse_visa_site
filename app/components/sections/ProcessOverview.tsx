import Link from "next/link";
import { quickSteps } from "../../data/site";

export default function ProcessOverview() {
  return (
    <section className="section muted-section">
      <div className="container process-grid">
        <div>
          <p className="eyebrow">Simple Process</p>
          <h2>A calm route from first call to submission.</h2>
          <p className="lead">
            Each stage is designed to reduce confusion, spot weak evidence early
            and keep the application professionally organised.
          </p>
          <Link href="/process" className="text-link">
            View the full process
          </Link>
        </div>
        <ol className="step-list">
          {quickSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
