import { FC, HTMLAttributes } from "react";

import { classes } from "../../utils";

import { VariantProps, variants } from "./variants";

type HTMLDivProps = HTMLAttributes<HTMLDivElement>;

export interface StackProps extends HTMLDivProps, VariantProps {}

export const Stack: FC<StackProps> = ({ x, y, className, ...rest }) => {
  return <div className={classes(variants({ x, y }), className)} {...rest} />;
};
