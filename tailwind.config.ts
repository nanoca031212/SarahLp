import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7ECECA",
          light: "#A8E6E6",
        },
        accent: "#C9A96E",
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
