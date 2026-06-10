import { contact } from "../../data/site";
import PageHero from "../ui/PageHero";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function ContactPageContent() {
  return (
    <section className="section page-section">
      <div className="container contact-grid">
        <div>
          <PageHero eyebrow="Speak to an immigration solicitor" title="I need legal advice to apply for a UK Spouse Visa.">
            Our dedicated team can help speed up your Spouse Visa application by
            ensuring that required documents and supporting evidence are correctly
            organised. Get in touch for a free consultation to discuss your
            requirements.
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
        <form className="contact-form">
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone number
            <input type="tel" name="phone" placeholder="e.g. +44 7700 900000" />
          </label>
          <label>
            Email address
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Case summary
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us where the applicant is applying from and any urgent dates."
            />
          </label>
          <button type="submit" className="btn btn-accent">
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
