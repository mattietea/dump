import { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => <Input {...props} />,
};

export default meta;
