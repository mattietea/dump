const config = require("ui/presets/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [config],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // Read styles from the UI package
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
};
