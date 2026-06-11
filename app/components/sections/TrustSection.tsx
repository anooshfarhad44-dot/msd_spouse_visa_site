"use client";

import React, { useState } from 'react';
import Reveal from '../ui/Reveal';
import Link from "next/link";
import Toast from '../ui/Toast';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const TrustSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showToast, setShowToast] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});

  const features = [
    { title: "UK-Regulated Immigration Solicitors", description: "Professional, qualified legal representation you can trust" },
    { title: "Guaranteed Fixed-Fee Services", description: "Transparent pricing with no hidden charges or surprises" },
    { title: "Free Initial Case Assessment", description: "Get expert advice on your eligibility before committing" },
    { title: "No Win, No Fee Representation", description: "Risk-free service with payment only on success" },
    { title: "Expedited Processing Options Available", description: "Fast-track your application when time is critical" },
    { title: "Cost-Effective Immigration Solutions", description: "Premium legal services at competitive, accessible rates" },
  ];

  const logos = [
    { src: "/images/socities_logos/c1.png", alt: "Logo 1" },
    { src: "/images/socities_logos/c2.png", alt: "Logo 2" },
    { src: "/images/socities_logos/c3.png", alt: "Logo 3" },
    { src: "/images/socities_logos/c4.png", alt: "Logo 4" },
  ];

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
      <section className="trust-section">
        <div className="container trust-grid">
          <div className="trust-content">
            <Reveal>
              <h2 className="trust-title">
                Apply For A UK Spouse Visa with{" "}
                <Link
                  href="https://www.msdsolicitors.co.uk/"
                  target="_blank"
                  className="brand-link"
                >
                  MSD Solicitors
                </Link>
              </h2>
              <h3 className="trust-subtitle">We Specialise in UK Marriage Visas</h3>

              <div className="success-rate">
                <span className="rate-number">99%</span>
                <div className="rate-text">
                  <strong>Success Rate For</strong>
                  <span>Spouse Visa Applications</span>
                </div>
              </div>

              <ul className="trust-features">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className={`trust-feature-item ${openIndex === index ? 'open' : ''}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="feature-icon-wrapper">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="feature-content">
                      <div className="feature-title-row">
                        <strong className="feature-title">{feature.title}</strong>
                        <span className={`expand-icon ${openIndex === index ? 'rotated' : ''}`}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </div>
                      {openIndex === index && (
                        <span className="feature-description">{feature.description}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="trust-logos-carousel">
                <div className="carousel-track">
                  {[...logos, ...logos].map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className="trust-logo" />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="trust-form-wrapper">
            <Reveal delay={200}>
              <div className="callback-card">
                <h3>Request A Call Back Now</h3>
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
