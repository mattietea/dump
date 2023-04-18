import type { StorybookViteConfig as StorybookConfig } from "@storybook/builder-vite";

const config: StorybookConfig = {
  stories: ["../components/**/stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
    "storybook-addon-themes",
  ],
  core: {},
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
