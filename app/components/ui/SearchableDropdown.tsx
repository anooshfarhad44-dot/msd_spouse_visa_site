"use client";

import React, { useState, useRef, useEffect } from "react";

interface SearchableDropdownProps {
  options: string[];
  placeholder: string;
  selectedValue: string;
  onSelect: (value: string) => void;
}

export default function SearchableDropdown({
  options,
  placeholder,
  selectedValue,
  onSelect,
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter options based on search input
  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchTerm("");
        }}
        className={`w-full min-h-[52px] px-4 rounded-xl border flex items-center justify-between cursor-pointer bg-slate-50 transition-all text-sm font-medium ${
          isOpen
            ? "border-[#0f6b72] ring-4 ring-[#0f6b72]/5 bg-white shadow-sm"
            : "border-slate-200 text-[#062f36] hover:bg-white hover:border-slate-300"
        }`}
      >
        <span className={selectedValue ? "text-[#062f36] font-semibold" : "text-gray-400"}>
          {selectedValue || placeholder}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-[#0f6b72] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Dropdown Menu Overlay */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl border border-slate-200 shadow-[0_12px_30px_rgba(6,47,54,0.12)] overflow-hidden animate-[fadeIn_0.2s_ease] origin-top">
          {/* Search Input Box */}
          <div className="p-2 border-b border-slate-100 bg-slate-50">
            <input
              type="text"
              placeholder="Search option..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-9 px-3 text-xs font-medium rounded-lg border border-slate-200 bg-white text-[#062f36] placeholder-gray-400 focus:outline-none focus:border-[#0f6b72] focus:ring-2 focus:ring-[#0f6b72]/10"
            />
          </div>
          
          {/* Options List */}
          <ul className="max-h-[220px] overflow-y-auto p-1 list-none m-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2.5 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
                    selectedValue === option
                      ? "bg-[#0f6b72] text-white"
                      : "text-[#182d32] hover:bg-emerald-50 hover:text-[#0f6b72]"
                  }`}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-3 py-4 text-xs font-medium text-gray-400 text-center">
                No matching options found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}