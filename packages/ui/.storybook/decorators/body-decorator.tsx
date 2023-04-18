import React from "react";
import { Decorator } from "@storybook/react";

export const bodyDecorator: Decorator = (story) => {
  const body = document.getElementsByTagName("body")[0];

  body.classList.add(
    "bg-white",
    "font-sans",
    "text-slate-900",
    "antialiased",
    "dark:bg-slate-900",
    "dark:text-slate-50"
  );

  return <>{story()}</>;
};
