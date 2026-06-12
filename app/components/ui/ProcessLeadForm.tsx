"use client";

import React, { useState, useEffect, useRef } from "react";
import { countries } from "../../data/site"; // Imported from your site.ts config

interface ProcessLeadFormProps {
  heading?: string;
  description?: string;
}

export default function ProcessLeadForm({ 
  heading = "Ready to learn about our process?", 
  description = "Provide your details below to get instant access to our comprehensive processing framework and personalized consultation options." 
}: ProcessLeadFormProps) {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    country: false,
  });

  // Searchable Country Dropdown States
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Close dropdown on clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Validation Logic Runner
  const validateField = (name: string, value: string) => {
    let errorMsg = "";

    if (!value.trim()) {
      errorMsg = "This field is required";
    } else {
      if (name === "name") {
        if (/[0-9]/.test(value)) {
          errorMsg = "Names cannot contain numbers";
        } else if (/[!@#$%^&*(),.?":{}|<>_]/.test(value)) {
          errorMsg = "Names cannot contain special characters";
        }
      }

      if (name === "phone") {
        // Allows optional leading + followed only by digits
        const cleanValue = value.trim();
        if (!/^\+?[0-9]*$/.test(cleanValue)) {
          errorMsg = "Only numbers allowed (ex: +447123456789)";
        } else if (cleanValue.replace("+", "").length < 7) {
          errorMsg = "Phone number is too short";
        }
      }

      if (name === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value.trim())) {
          errorMsg = "Please enter a valid email address";
        }
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Immediate keystroke blocking for custom field validation
    if (name === "name" && /[0-9]/.test(value)) return; 
    if (name === "phone" && value !== "" && !/^\+?[0-9]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    validateField(fieldName, formData[fieldName as keyof typeof formData]);
  };

  const handleCountrySelect = (countryName: string) => {
    setFormData((prev) => ({ ...prev, country: countryName }));
    setErrors((prev) => ({ ...prev, country: "" }));
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark everything touched to run full validation cycle
    const allTouched = { name: true, phone: true, email: true, country: true };
    setTouched(allTouched);

    validateField("name", formData.name);
    validateField("phone", formData.phone);
    validateField("email", formData.email);
    validateField("country", formData.country);

    const hasErrors = Object.values(errors).some((err) => err !== "") || 
                      Object.values(formData).some((val) => val === "");

    if (!hasErrors) {
      console.log("Form Lead Captured Successfully:", formData);
      // Execute registration action details here
    }
  };

  // Filter countries based on user text searching query
  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className={`w-full rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-[0_15px_40px_rgba(15,107,114,0.05)] transition-all duration-1000 ease-out transform ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Animated Header */}
      <div className="mb-6 overflow-hidden">
        <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#062f36] via-[#0f6b72] to-[#062f36] bg-[length:200%_auto] animate-pulse">
          {heading}
        </h3>
        <p className="text-sm text-slate-500 mt-2.5 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#062f36] mb-1.5">
            Full Name <span className="text-rose-500 font-bold">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            placeholder="John Doe"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
              touched.name && errors.name 
                ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10" 
                : "border-slate-200 bg-slate-50/50 focus:border-[#0f6b72] focus:bg-white focus:ring-2 focus:ring-[#0f6b72]/10"
            }`}
          />
          {touched.name && errors.name && (
            <p className="text-xs font-semibold text-rose-500 mt-1.5 flex items-center gap-1 animate-fadeIn">
              ⚠ {errors.name}
            </p>
          )}
        </div>

        {/* Contact Group Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#062f36] mb-1.5">
              Phone Number <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur("phone")}
              placeholder="+44 7123 456789"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
                touched.phone && errors.phone 
                  ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10" 
                  : "border-slate-200 bg-slate-50/50 focus:border-[#0f6b72] focus:bg-white focus:ring-2 focus:ring-[#0f6b72]/10"
              }`}
            />
            {touched.phone && errors.phone && (
              <p className="text-xs font-semibold text-rose-500 mt-1.5 flex items-center gap-1">
                ⚠ {errors.phone}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#062f36] mb-1.5">
              Email Address <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              placeholder="john@example.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
                touched.email && errors.email 
                  ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10" 
                  : "border-slate-200 bg-slate-50/50 focus:border-[#0f6b72] focus:bg-white focus:ring-2 focus:ring-[#0f6b72]/10"
              }`}
            />
            {touched.email && errors.email && (
              <p className="text-xs font-semibold text-rose-500 mt-1.5 flex items-center gap-1">
                ⚠ {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Searchable Country Selector Field Component Layout */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#062f36] mb-1.5">
            Your Current Country <span className="text-rose-500 font-bold">*</span>
          </label>
          
          <div
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setTimeout(() => handleBlur("country"), 200)}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm flex items-center justify-between cursor-pointer transition-all duration-200 ${
              touched.country && errors.country 
                ? "border-rose-400 bg-rose-50/30" 
                : "border-slate-200 bg-slate-50/50 bg-white"
            }`}
          >
            <span className={formData.country ? "text-slate-900 font-medium" : "text-slate-400"}>
              {formData.country || "Select your country"}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Search Box Popover Container */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 flex flex-col overflow-hidden animate-fadeIn">
              <div className="p-2 border-b border-slate-100 bg-slate-50">
                <input
                  type="text"
                  placeholder="Search country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#0f6b72] bg-white"
                  autoFocus
                />
              </div>
              <ul className="overflow-y-auto flex-1 max-h-44 divide-y divide-slate-50">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => handleCountrySelect(country)}
                      className="px-4 py-2 text-sm text-slate-700 hover:bg-[#0f6b72]/5 hover:text-[#0f6b72] cursor-pointer font-medium transition-colors duration-150"
                    >
                      {country}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-xs text-slate-400 text-center font-medium">
                    No matching countries found
                  </li>
                )}
              </ul>
            </div>
          )}

          {touched.country && errors.country && (
            <p className="text-xs font-semibold text-rose-500 mt-1.5 flex items-center gap-1">
              ⚠ {errors.country}
            </p>
          )}
        </div>

        {/* Gradient Submit CTA */}
        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-[#0f6b72] via-[#0b5156] to-[#0f6b72] bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md shadow-[#0f6b72]/10 hover:shadow-lg hover:shadow-[#0f6b72]/20 transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 tracking-wide uppercase"
        >
          Access Processing Guide
        </button>
      </form>
    </div>
  );
}