"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, navItems, parentSite } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const officeNumbers = [
  { city: "Manchester", number: "0161 503 0550", href: "tel:+441615030550" },
  { city: "London", number: "020 4537 5050", href: "tel:+442045375050" },
  { city: "Birmingham", number: "0121 725 1550", href: "tel:+441217251550" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(officeNumbers[0]);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="phone-dropdown-container">
            <button 
              className="top-bar-btn phone-dropdown-btn"
              onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {selectedOffice.number}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ 
                  marginLeft: 6, 
                  transition: 'transform 200ms ease',
                  transform: isPhoneDropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {isPhoneDropdownOpen && (
              <div className="phone-dropdown">
                {officeNumbers.map((office) => (
                  <a 
                    href={office.href} 
                    key={office.city}
                    className="phone-dropdown-item"
                    onClick={() => {
                      setSelectedOffice(office);
                      setIsPhoneDropdownOpen(false);
                    }}
                  >
                    <span className="phone-dropdown-city">{office.city}</span>
                    <span className="phone-dropdown-number">{office.number}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href={contact.emailHref} className="top-bar-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {contact.email}
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="top-bar-btn whatsapp-btn"
          >
            <WhatsAppIcon />
            WhatsApp us
          </a>
          <a href={parentSite.url} target="_blank" rel="noopener noreferrer" className="top-bar-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {parentSite.name}
          </a>
          <Link href="/contact" className="top-bar-btn book-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path>
            </svg>
            Book free consultation
          </Link>
          
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
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu-dropdown">
          <div className="container">
            <nav className="mobile-nav-links">
              {navItems.map((item) => (
                <Link 
                  href={item.href} 
                  key={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
