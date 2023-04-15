import { FC, HTMLAttributes } from "react";

import { classes } from "../../../lib/utils/classes";

type HTMLLabelProps = HTMLAttributes<HTMLLabelElement>;

export interface LabelProps extends HTMLLabelProps {}

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
