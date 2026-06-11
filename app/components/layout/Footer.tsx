import Link from "next/link";
import { contact, parentSite } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const footerLinks = [
  { href: "/eligibility", label: "Eligibility" },
  { href: "/process", label: "Process" },
  { href: "/documents", label: "Documents" },
  { href: "/fees", label: "Fees" },
];

const socialLinks = [
  { 
    href: "https://www.instagram.com/msdsolicitors", 
    label: "Instagram", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  { 
    href: "https://www.facebook.com/msdsolicitors", 
    label: "Facebook", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  { 
    href: "https://x.com/msdsolicitors", 
    label: "X (Twitter)", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  { 
    href: "https://www.linkedin.com/company/msdsolicitors?originalSubdomain=il", 
    label: "LinkedIn", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  { 
    href: "https://www.youtube.com/@msdsolicitors", 
    label: "YouTube", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    )
  },
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
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                href={link.href} 
                key={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label} 
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
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
