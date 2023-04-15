import { PropsWithChildren } from "react";
import { FC } from "react";
import { Stack, StackProps } from "../../stack";
import { classes } from "@/lib/utils/classes";

export interface PageHeaderProps extends StackProps {}

export const Header: FC<PageHeaderProps> = ({ className, ...rest }) => {
  return (
    <Stack
      y={2}
      className={classes(
        "pb-2 border-b border-b-slate-200 dark:border-slate-700",
        className
      )}
      {...rest}
    />
  );
};
