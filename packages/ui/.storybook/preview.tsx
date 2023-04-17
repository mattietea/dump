import React from "react";
import type { Preview } from "@storybook/react";

import { Body } from "..";
import "./globals.css";

const bodyDecorator = (Story: any) => {
  return <Body>{Story()}</Body>;
};

const preview: Preview = {
  decorators: [bodyDecorator],
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

export default preview;
