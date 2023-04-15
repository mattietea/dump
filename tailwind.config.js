// @ts-check
const base = require("tailwindcss/defaultTheme");

console.log(base);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...base,
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
