import * as React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
