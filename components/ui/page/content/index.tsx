import { HTMLAttributes, PropsWithChildren } from "react";
import { FC } from "react";

type HTMLDivProps = HTMLAttributes<HTMLDivElement>;

export interface PageContentProps extends PropsWithChildren<HTMLDivProps> {}

export const Content: FC<PageContentProps> = (props) => {
  return <div {...props} />;
};
