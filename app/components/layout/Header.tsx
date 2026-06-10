import Link from "next/link";
import { contact, navItems, parentSite } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <a href={contact.phoneHref}>Call now: {contact.phone}</a>
          <a href={contact.emailHref}>Email: {contact.email}</a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link whatsapp-link-top"
          >
            <WhatsAppIcon />
            WhatsApp us
          </a>
          <a href={parentSite.url} target="_blank" rel="noopener noreferrer">
            Main site: {parentSite.name}
          </a>
          <Link href="/contact">Book free consultation</Link>
          
        </div>
      </div>
      <div className="container brand-row">
        <Link href="/" className="brand" aria-label="Spouse Visa home">
          <span className="brand-mark">SV</span>
          <span>
            <strong>Spouse Visa</strong>
            <small>UK partner immigration support</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div>
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
