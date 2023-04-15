import { classes } from "@/lib/utils/classes";
import { FC, HTMLAttributes } from "react";

type Heading2Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading2: FC<Heading2Props> = (props) => {
  return (
    <h2
      {...props}
      className={classes(
        "text-lg font-semibold tracking-tight",
        props.className
      )}
    />
  );
};
