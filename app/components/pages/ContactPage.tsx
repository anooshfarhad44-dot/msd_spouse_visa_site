"use client";

import { useState, useEffect } from "react";
import { contact } from "../../data/site";
import PageHero from "../ui/PageHero";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import Toast from "../ui/Toast";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showToast, setShowToast] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});

  // Validation functions
  const validateName = (name: string) => {
    if (!name.trim()) return "Please enter your full name";
    if (/\d/.test(name)) return "Name should not contain numbers";
    if (name.trim().length < 2) return "Name must be at least 2 characters long";
    return null;
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return "Please enter your phone number";
    if (/[a-zA-Z]/.test(phone)) return "Phone number should not contain letters";
    if (phone.replace(/\D/g, "").length < 10) return "Phone number must be at least 10 digits";
    return null;
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Please enter your email address";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return null;
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) return "Please tell us about your case";
    if (message.trim().length < 20) return "Case summary must be at least 20 characters long";
    return null;
  };

  // Validate all fields
  const validateAll = () => {
    const newErrors: FormErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const messageError = validateMessage(formData.message);
    if (messageError) newErrors.message = messageError;

    return newErrors;
  };

  // Check if form is valid
  const isFormValid = () => {
    const errors = validateAll();
    return Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Process name field (remove numbers)
    let processedValue = value;
    if (name === "name") {
      processedValue = value.replace(/[0-9]/g, "");
    }
    // Process phone field (remove letters)
    if (name === "phone") {
      processedValue = value.replace(/[a-zA-Z]/g, "");
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));

    // Real-time validation for touched fields
    if (touched[name as keyof FormErrors]) {
      validateField(name as keyof FormErrors, processedValue);
    }
  };

  // Validate single field
  const validateField = (field: keyof FormErrors, value: string) => {
    let error = null;
    switch (field) {
      case "name":
        error = validateName(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
    }

    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  // Handle field blur (mark as touched)
  const handleBlur = (field: keyof FormErrors) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof FormErrors] = true;
      return acc;
    }, {} as Partial<Record<keyof FormErrors, boolean>>);
    setTouched(allTouched);

    const validationErrors = validateAll();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setShowToast(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrors({});
      setTouched({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Toast
        message="Thank you for your enquiry. Our immigration specialists will review your case and contact you soon."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
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
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              <span>
                Full name
                <span className="required-asterisk">*</span>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur("name")}
                className={touched.name && errors.name ? "input-error" : ""}
              />
              {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
            </label>
            <label>
              <span>
                Phone number
                <span className="required-asterisk">*</span>
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="e.g. +44 7700 900000"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                className={touched.phone && errors.phone ? "input-error" : ""}
              />
              {touched.phone && errors.phone && <span className="error-message">{errors.phone}</span>}
            </label>
            <label>
              <span>
                Email address
                <span className="required-asterisk">*</span>
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={touched.email && errors.email ? "input-error" : ""}
              />
              {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
            </label>
            <label>
              <span>
                Case summary
                <span className="required-asterisk">*</span>
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us where the applicant is applying from and any urgent dates. (Minimum 20 characters)"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                className={touched.message && errors.message ? "input-error" : ""}
              />
              {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
            </label>
            <button 
              type="submit" 
              className="btn btn-accent"
              disabled={!isFormValid()}
            >
              Request Consultation
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
