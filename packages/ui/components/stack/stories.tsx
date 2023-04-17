import { Meta, StoryObj } from "@storybook/react";

import { Stack } from ".";

const meta: Meta<typeof Stack> = {
  title: "Components/Stack",
  component: Stack,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    x: 0,
    y: 0,
  },
};

export const VerticalSpacing: Story = {
  render: (props) => (
    <Stack {...props}>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </Stack>
  ),
  args: {
    y: 4,
  },
};

export const HorizontalSpacing: Story = {
  render: (props) => (
    <Stack {...props}>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </Stack>
  ),
  args: {
    x: 4,
  },
};

export default meta;
