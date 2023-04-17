const preset = require("./presets/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  prefix: "ui-",
  presets: [preset],
};
