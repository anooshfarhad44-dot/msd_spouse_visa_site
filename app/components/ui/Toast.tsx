"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-5 right-5 z-[9999] animate-[slideIn_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)]">
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.35)] flex items-start gap-4 max-w-md border border-white/20">
        <div className="bg-white/20 rounded-xl p-2.5 flex items-center justify-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-base font-bold m-0 mb-1">Thank you!</h4>
          <p className="text-sm leading-relaxed m-0 opacity-95">{message}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="bg-white/20 border-0 text-white cursor-pointer p-2 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all -mt-0.5 shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
