const base = require("./configs/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ["./components/**/*.{ts,tsx}", "./styles/**/*.css"],
};
