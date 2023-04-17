import { FC, HTMLAttributes } from "react";

import { classes } from "../../utils";

type HTMLBodyProps = HTMLAttributes<HTMLBodyElement>;

export type BodyProps = HTMLBodyProps;

export const Body: FC<BodyProps> = ({ className, ...rest }) => {
  return (
    <body
      className={classes(
        "bg-white font-sans text-slate-900 antialiased  dark:bg-slate-900 dark:text-slate-50",
        className
      )}
      {...rest}
    ></body>
  );
};
