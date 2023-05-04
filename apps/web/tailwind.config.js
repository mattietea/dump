const base = require("ui/configs/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
};
