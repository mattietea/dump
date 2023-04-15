import { FC } from "react";

import { Stack, StackProps } from "../stack";
import { Typography } from "../typography";

import { Content } from "./content";
import { Header } from "./header";

export interface PageProps extends StackProps {}

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
