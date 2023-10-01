import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  component: Button,
  args: {
    children: "Click Me!",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    children: "Try to click me!",
    disabled: true,
  },
};
