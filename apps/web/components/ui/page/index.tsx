import { FC } from "react";
import { StackProps, Stack } from "ui";

import { Typography } from "../typography";

import { Content } from "./content";
import { Header } from "./header";

export type PageProps = StackProps;

const Base: FC<PageProps> = ({ children }) => {
  return (
    <Stack y={3} className="py-2 px-3">
      {children}
    </Stack>
  );
};

export const Page = Object.assign(Base, {
  Title: Typography.Heading2,
  Description: Typography.Subtle,
  Header: Header,
  Content: Content,
});
