const base = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      ...base,
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
