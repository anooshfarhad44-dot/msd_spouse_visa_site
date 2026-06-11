"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, navItems, parentSite } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const officeNumbers = [
  { city: "Manchester", number: "0161 503 0550", href: "tel:+441615030550" },
  { city: "London",     number: "020 4537 5050", href: "tel:+442045375050" },
  { city: "Birmingham", number: "0121 725 1550", href: "tel:+441217251550" },
];

const topBtnBase =
  "flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-extrabold text-sm whitespace-nowrap bg-white/10 border-2 border-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-white/25 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] relative overflow-hidden";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen]           = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [selectedOffice, setSelectedOffice]   = useState(officeNumbers[0]);

  return (
    <header className="sticky top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-[18px] shadow-[0_4px_20px_rgba(6,47,54,0.15)]">

      {/* ── Top bar ── */}
      <div className="bg-gradient-to-r from-[#062f36] to-[#0f6b72]">
        <div className="w-full max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 py-2 items-center">

            {/* Phone dropdown */}
            <div className="relative">
              <button
                className={topBtnBase + " w-full cursor-pointer"}
                onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="truncate">{selectedOffice.number}</span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`shrink-0 transition-transform duration-200 ${isPhoneDropdownOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isPhoneDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] z-[1000] min-w-[220px] overflow-hidden">
                  {officeNumbers.map((office) => (
                    <a
                      key={office.city}
                      href={office.href}
                      className="flex flex-col px-4 py-3 text-[#182d32] border-b border-[#dbe7e9] last:border-b-0 hover:bg-[#f5f8f8] transition-colors"
                      onClick={() => { setSelectedOffice(office); setIsPhoneDropdownOpen(false); }}
                    >
                      <span className="font-black text-sm text-[#0f6b72]">{office.city}</span>
                      <span className="font-bold mt-1">{office.number}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Email */}
            <a href={contact.emailHref} className={topBtnBase}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="hidden sm:inline truncate">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>

            {/* WhatsApp */}
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-extrabold text-sm whitespace-nowrap text-white bg-gradient-to-br from-[#25D366] to-[#128C7E] border-2 border-[#25D366] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_28px_rgba(37,211,102,0.45)]"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              WhatsApp us
            </a>

            {/* Parent site */}
            <a href={parentSite.url} target="_blank" rel="noopener noreferrer" className={topBtnBase}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="hidden lg:inline">{parentSite.name}</span>
              <span className="lg:hidden">MSD</span>
            </a>

            {/* ── Book free consultation — animated ── */}
            <div className="btn-book-wrap">
              {/* expanding ripple rings — visible outside button */}
              <span aria-hidden="true" className="btn-book-ripple" />
              <span aria-hidden="true" className="btn-book-ripple-2" />

              <Link
                href="/contact"
                className="btn-book flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-sm whitespace-nowrap text-white bg-[#f47a2a] border-2 border-white w-full overflow-hidden hover:bg-[#c7510f] hover:-translate-y-1 hover:scale-[1.04] transition-[transform,background] duration-300"
              >
                {/* shimmer sweep */}
                <span aria-hidden="true" className="btn-book-shimmer" />

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 shrink-0">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                </svg>
                <span className="relative z-10">Book free consultation</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Brand row ── */}
      <div className="w-full max-w-[1120px] mx-auto px-4 flex items-center justify-between gap-6 py-3 border-b border-[#dbe7e9]/60">
        <Link href="/" className="inline-flex items-center gap-3.5" aria-label="Spouse Visa home">
          <span className="w-14 h-14 grid place-items-center text-white bg-gradient-to-br from-[#0f6b72] to-[#062f36] rounded-xl font-[var(--font-montserrat)] text-xl font-extrabold shadow-[inset_0_-8px_18px_rgba(0,0,0,0.18),0_14px_28px_rgba(15,107,114,0.22)]">
            SV
          </span>
          <span>
            <strong className="block font-[var(--font-montserrat)] text-xl text-[#073f47]">Spouse Visa</strong>
            <small className="block text-[#62777d] mt-0.5 text-sm">UK partner immigration support</small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2 px-2 py-2 border border-[#dbe7e9] rounded-full bg-[#f5f8f8]/80" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2.5 rounded-full text-[#182d32] font-extrabold text-sm transition-all duration-200 hover:bg-white hover:text-[#0f6b72] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(6,47,54,0.08)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2.5 border border-[#dbe7e9] rounded-lg text-[#182d32] hover:bg-[#f5f8f8] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6"  y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6"  x2="21" y2="6"  />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#dbe7e9] shadow-[0_8px_20px_rgba(6,47,54,0.1)]">
          <nav className="w-full max-w-[1120px] mx-auto px-4 py-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-bold text-[#182d32] hover:bg-[#f5f8f8] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
