const base = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...base,
      fontFamily: {
        sans: ["var(--font-sans)", ...base.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
