import { FC, HTMLAttributes } from "react";
import { classes } from "ui";

type HTMLLabelProps = HTMLAttributes<HTMLLabelElement>;

export type LabelProps = HTMLLabelProps;

export const Label: FC<LabelProps> = ({ children, className, ...rest }) => {
  return (
    <label
      className={classes(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};
