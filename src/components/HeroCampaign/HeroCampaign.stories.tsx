import type { Meta, StoryObj } from "@storybook/react";
import { HeroCampaign } from "./HeroCampaign";

const meta: Meta<typeof HeroCampaign> = {
  title: "Components/HeroCampaign",
  component: HeroCampaign,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroCampaign>;

export const Default: Story = {};
