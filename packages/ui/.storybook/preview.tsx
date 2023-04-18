import type { Preview } from "@storybook/react";

import "./globals.css";
import { bodyDecorator } from "./decorators/body-decorator";
import { themeModeDecorator } from "./decorators/theme-mode-decorator";

const preview: Preview = {
  decorators: [themeModeDecorator, bodyDecorator],
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
