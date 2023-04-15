import { PropsWithChildren, ReactNode } from "react";
import { FC } from "react";
import { Typography } from "./typography";

export interface PageProps {
  children: ReactNode;
}

const Base: FC<PageProps> = ({ children }) => {
  return <div className="py-2 px-3">{children}</div>;
};

const Header: FC<PropsWithChildren> = (props) => {
  return <div className="pb-2 border-b border-b-slate-200" {...props} />;
};

const Content: FC<PropsWithChildren> = (props) => {
  return <div className="pt-3" {...props} />;
};

export const Page = Object.assign(Base, {
  Title: Typography.H2,
  Description: Typography.Subtle,
  Header: Header,
  Content: Content,
});
