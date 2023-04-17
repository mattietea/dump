const jest = require("next/jest")();

/** @type {import('jest').Config} */
const config = {
  roots: ["./"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
};

module.exports = jest(config);
