"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, navItems, parentSite } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
