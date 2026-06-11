/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Playfair Display as the global default for every element
        sans:  ["var(--font-primary)", "Playfair Display", "Georgia", "serif"],
        serif: ["var(--font-primary)", "Playfair Display", "Georgia", "serif"],
      },
      colors: {
        teal: {
          DEFAULT: "#0f6b72",
          dark:    "#073f47",
          deep:    "#062f36",
        },
        gold:  "#f4c400",
        ink:   "#182d32",
        muted: "#62777d",
        line:  "#dbe7e9",
        soft:  "#f5f8f8",
      },
      boxShadow: {
        soft:  "0 18px 50px rgba(6, 47, 54, 0.12)",
        hover: "0 24px 70px rgba(6, 47, 54, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
