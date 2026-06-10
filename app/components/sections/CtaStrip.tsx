import Link from "next/link";

export default function CtaStrip() {
  return (
    <section className="cta-strip">
      <div className="container strip-inner">
        <p>Book your free initial spouse visa case review with a legal expert today</p>
        <Link href="/contact" className="strip-link">
          Speak to an advisor
        </Link>
      </div>
    </section>
  );
}
