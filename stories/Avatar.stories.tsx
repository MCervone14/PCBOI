import { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const meta = {
  title: "UI/Avatar",
  tags: ["autodocs"],
  component: Avatar,
  args: {
    children: (
      <>
        <AvatarImage
          src="/svgs/profileFallbackImage.svg"
          alt="Profile Picture"
        />
        <AvatarFallback>
          <AvatarImage
            src="/svgs/profileFallbackImage.svg"
            alt="Profile Picture"
          />
        </AvatarFallback>
      </>
    ),
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  name: "Default",
  render: (args) => <Avatar {...args} />,
};

export const Secondary: Story = {
  name: "White Background Color",
  render: (args) => <Avatar {...args} style={{ backgroundColor: "#FFF" }} />,
};
