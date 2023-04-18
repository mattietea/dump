import { withThemeByDataAttribute } from "@storybook/addon-styling";
import { Decorator } from "@storybook/react";

export const themeModeDecorator = withThemeByDataAttribute({
  themes: {
    Light: "light",
    Dark: "dark",
  },
  defaultTheme: "dark",
  attributeName: "class",
}) as Decorator;
