import { documentGroups } from "../../data/site";
import PageHero from "../ui/PageHero";

export default function DocumentsPageContent() {
  return (
    <section className="section page-section">
      <div className="container narrow">
        <PageHero
          eyebrow="Documents"
          title="Build a spouse visa evidence pack that is easy to assess."
        >
          We help organise documents so the application tells a consistent story
          and directly answers the spouse visa requirements.
        </PageHero>
        <div className="document-grid">
          {documentGroups.map((group) => (
            <article className="document-card" key={group}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p>{group}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
