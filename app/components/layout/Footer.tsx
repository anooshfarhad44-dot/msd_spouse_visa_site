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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/msdsolicitors",
    label: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/msdsolicitors",
    label: "X (Twitter)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/msdsolicitors",
    label: "LinkedIn",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@msdsolicitors",
    label: "YouTube",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="pt-14 pb-20 bg-gradient-to-br from-[#062f36] to-[#073f47] relative overflow-hidden">
      {/* gold radial glow */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#f4c400]/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1120px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Brand */}
        <div>
          <div className="text-white font-[var(--font-montserrat)] text-2xl font-extrabold">
            Spouse Visa
          </div>
          <p className="mt-3 text-white/75 leading-relaxed text-sm">
            Focused UK spouse visa guidance from eligibility to submission.
          </p>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            This is our spouse visa service site. Visit our main site at{" "}
            <a
              href={parentSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f4c400] font-extrabold underline underline-offset-4 hover:opacity-80"
            >
              {parentSite.name}
            </a>
            .
          </p>
          <div className="flex gap-3 mt-5 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-[#f4c400] hover:text-[#062f36] hover:-translate-y-0.5 transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-white text-sm font-extrabold uppercase tracking-wider mb-3">Pages</h2>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block mt-2 text-white/80 hover:text-[#f4c400] transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-sm font-extrabold uppercase tracking-wider mb-3">Contact</h2>
          <a href={contact.phoneHref} className="block mt-2 text-white/80 hover:text-[#f4c400] transition-colors text-sm">
            {contact.phone}
          </a>
          <a href={contact.emailHref} className="block mt-2 text-white/80 hover:text-[#f4c400] transition-colors text-sm">
            {contact.email}
          </a>
          <Link href="/contact" className="block mt-2 text-white/80 hover:text-[#f4c400] transition-colors text-sm">
            Book consultation
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[1120px] mx-auto px-4 mt-10 pt-5 border-t border-white/10 text-center text-white/50 text-xs relative z-10">
        <p>&copy; {new Date().getFullYear()} Spouse Visa. Information is general guidance, not legal advice.</p>
      </div>
    </footer>
  );
}
