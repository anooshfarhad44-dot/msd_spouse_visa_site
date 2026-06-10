import Link from "next/link";
import { contact, parentSite } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const footerLinks = [
  { href: "/eligibility", label: "Eligibility" },
  { href: "/process", label: "Process" },
  { href: "/documents", label: "Documents" },
  { href: "/fees", label: "Fees" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Spouse Visa</div>
          <p>Focused UK spouse visa guidance from eligibility to submission.</p>
          <p className="parent-site-note">
            This is our spouse visa service site. Visit our main site at{" "}
            <a href={parentSite.url} target="_blank" rel="noopener noreferrer">
              {parentSite.name}
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          {/* WhatsApp button removed from footer per request */}
          <Link href="/contact">Book consultation</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>(c) {new Date().getFullYear()} Spouse Visa. Information is general guidance, not legal advice.</p>
      </div>
    </footer>
  );
}
