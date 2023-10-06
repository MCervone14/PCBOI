import { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/ui/badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  name: "Default",
  render: (args) => <Badge {...args} />,
};

export const Secondary: Story = {
  render: (args) => <Badge {...args} variant={"secondary"} />,
};

export const Destructive: Story = {
  render: (args) => <Badge {...args} variant={"destructive"} />,
};

export const Outline: Story = {
  render: (args) => <Badge {...args} variant={"outline"} />,
};
