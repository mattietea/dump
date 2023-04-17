import { FC } from "react";
import { Stack, StackProps, classes } from "ui";

export type PageHeaderProps = StackProps;

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
