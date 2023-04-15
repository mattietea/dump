import { classes } from "@/lib/utils/classes";
import { FC, HTMLAttributes } from "react";

type SubtleProps = HTMLAttributes<HTMLParagraphElement>;

export const Subtle: FC<SubtleProps> = (props) => {
  return (
    <p
      {...props}
      className={classes(
        "text-sm text-slate-500 dark:text-slate-400",
        props.className
      )}
    />
  );
};
