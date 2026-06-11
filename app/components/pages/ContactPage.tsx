"use client";

import { useEffect } from "react";
import { contact } from "../../data/site";
import PageHero from "../ui/PageHero";
import WhatsAppIcon from "../ui/WhatsAppIcon";

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function ContactPageContent() {
  useEffect(() => {
    const loadForm = () => {
      if (window.hbspt) {
        const container = document.getElementById("hubspot-form-container");

        if (container) {
          container.innerHTML = "";

          window.hbspt.forms.create({
            portalId: "8559434",
            formId: "fbd1deba-5122-437b-a2f7-65fed9ae1b77",
            region: "na1",
            target: "#hubspot-form-container",
          });
        }
      }
    };

    if (!document.getElementById("hubspot-script")) {
      const script = document.createElement("script");
      script.id = "hubspot-script";
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, []);

  return (
    <section className="section page-section">
      <div className="container contact-grid">
        {/* Left Side */}
        <div>
          <PageHero
            eyebrow="Speak to an immigration solicitor"
            title="I need legal advice to apply for a UK Spouse Visa."
          >
            Our dedicated team can help speed up your Spouse Visa application by
            ensuring that required documents and supporting evidence are
            correctly organised. Get in touch for a free consultation to
            discuss your requirements.
          </PageHero>

          <div className="contact-details">
            <p>
              <strong>Call:</strong> {contact.phone}
            </p>

            <p>
              <strong>Email:</strong> {contact.email}
            </p>

            <p>
              <strong>WhatsApp:</strong>{" "}
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link whatsapp-link-contact"
              >
                <WhatsAppIcon />
                Message us on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - HubSpot Form */}
        <div className="contact-form">
          <div id="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  );
}
