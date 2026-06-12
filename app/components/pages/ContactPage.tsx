"use client";

import { useState } from "react";
import { contact } from "../../data/site";
import PageHero from "../ui/PageHero";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import CaseReviewForm from "../ui/CaseReviewForm";

export default function ContactPageContent() {
  // Form Local State Integration
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryResidence: "",
    nationality: "",
    visaService: "",
    concerns: [] as string[],
    tailoredAdvice: "",
    consent: false,
  });

  const handleCheckboxChange = (concern: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Legal Intake Data:", formData);
    // Yahan aap apni custom api integration handle kar sakte hain
  };

  return (
    <section className="py-24 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb]">
      <div className="w-full max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        
        {/* Left Section */}
        <div>
          <PageHero
            eyebrow="Speak to an immigration solicitor"
            title="I need legal advice to apply for a UK Spouse Visa."
          >
            Our dedicated team can help speed up your Spouse Visa application by ensuring that
            required documents and supporting evidence are correctly organised. Get in touch for a
            free consultation to discuss your requirements.
          </PageHero>

          <div className="grid gap-3 mt-6">
            <p className="flex items-center gap-3 text-[#182d32]">
              <strong>Call:</strong>
              <a href={contact.phoneHref} className="text-[#0f6b72] font-bold hover:underline">
                {contact.phone}
              </a>
            </p>
            <p className="flex items-center gap-3 text-[#182d32]">
              <strong>Email:</strong>
              <a href={contact.emailHref} className="text-[#0f6b72] font-bold hover:underline">
                {contact.email}
              </a>
            </p>
            <p className="flex items-center gap-3 text-[#182d32]">
              <strong>WhatsApp:</strong>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25d366] text-[#073f47] font-black text-sm hover:bg-[#1ebe5a] transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                Message us on WhatsApp
              </a>
            </p>
          </div>
        </div>

       <CaseReviewForm/>
      </div>
    </section>
  );
}