/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0f6b72",
          dark: "#073f47",
          deep: "#062f36",
        },
        gold: "#f4c400",
        ink: "#182d32",
        muted: "#62777d",
        line: "#dbe7e9",
        soft: "#f5f8f8",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Arial", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 47, 54, 0.12)",
        hover: "0 24px 70px rgba(6, 47, 54, 0.18)",
      },
      keyframes: {
        // Gentle pulse-glow: scale + outer glow ring
        "pulse-glow": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(244,196,0,0.55), 0 8px 24px rgba(244,196,0,0.30)",
          },
          "50%": {
            transform: "scale(1.045)",
            boxShadow: "0 0 0 10px rgba(244,196,0,0), 0 12px 32px rgba(244,196,0,0.45)",
          },
        },
        // Ripple ring that expands outward
        "ripple": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        // Shimmer sweep across button
        "shimmer": {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(250%) skewX(-15deg)" },
        },
        // Bounce-attention: small vertical bounce
        "bounce-cta": {
          "0%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-6px)" },
          "60%": { transform: "translateY(-3px)" },
        },
        // Orange glow pulse for Book btn
        "glow-orange": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(244,122,42,0.6), 0 4px 14px rgba(244,122,42,0.35)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(244,122,42,0), 0 8px 24px rgba(244,122,42,0.55)",
          },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "ripple": "ripple 2.4s ease-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "bounce-cta": "bounce-cta 2.6s ease-in-out infinite",
        "glow-orange": "glow-orange 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
