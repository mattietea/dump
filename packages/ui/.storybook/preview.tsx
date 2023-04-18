import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

import "./globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const parameters = {
  themes: {
    default: "twitter",
    list: [
      { name: "twitter", class: "theme-twt", color: "#00aced" },
      { name: "facebook", class: "theme-fb", color: "#3b5998" },
    ],
  },
};

export default preview;
