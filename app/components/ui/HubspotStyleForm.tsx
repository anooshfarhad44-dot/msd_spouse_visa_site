"use client";

import { useState, useEffect } from "react";
import Toast from "./Toast";

interface FormData {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function HubspotStyleForm() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showToast, setShowToast] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});

  // Validation functions
  const validateName = (name: string, fieldName: string) => {
    if (!name.trim()) return `Please enter your ${fieldName}`;
    if (/\d/.test(name)) return `${fieldName} should not contain numbers`;
    if (name.trim().length < 2) return `${fieldName} must be at least 2 characters long`;
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
    if (!message.trim()) return "Please tell us about your enquiry";
    if (message.trim().length < 20) return "Message must be at least 20 characters long";
    return null;
  };

  // Validate all fields
  const validateAll = () => {
    const newErrors: FormErrors = {};
    
    const firstnameError = validateName(formData.firstname, "First name");
    if (firstnameError) newErrors.firstname = firstnameError;

    const lastnameError = validateName(formData.lastname, "Last name");
    if (lastnameError) newErrors.lastname = lastnameError;

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
    
    // Process name fields (remove numbers)
    let processedValue = value;
    if (name === "firstname" || name === "lastname") {
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
      case "firstname":
        error = validateName(value, "First name");
        break;
      case "lastname":
        error = validateName(value, "Last name");
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
      setFormData({ firstname: "", lastname: "", phone: "", email: "", message: "" });
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
      <h3 className="form-title">Request A Call Back Now</h3>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          <span>
            First name
            <span className="required-asterisk">*</span>
          </span>
          <input
            type="text"
            name="firstname"
            placeholder="Your first name"
            value={formData.firstname}
            onChange={handleChange}
            onBlur={() => handleBlur("firstname")}
            className={touched.firstname && errors.firstname ? "input-error" : ""}
          />
          {touched.firstname && errors.firstname && <span className="error-message">{errors.firstname}</span>}
        </label>
        <label>
          <span>
            Last name
            <span className="required-asterisk">*</span>
          </span>
          <input
            type="text"
            name="lastname"
            placeholder="Your last name"
            value={formData.lastname}
            onChange={handleChange}
            onBlur={() => handleBlur("lastname")}
            className={touched.lastname && errors.lastname ? "input-error" : ""}
          />
          {touched.lastname && errors.lastname && <span className="error-message">{errors.lastname}</span>}
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
            Email
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
            Message/Enquiry Summary
            <span className="required-asterisk">*</span>
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your enquiry (Minimum 20 characters)"
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
    </>
  );
}
