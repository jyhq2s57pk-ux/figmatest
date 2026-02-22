import type { Meta, StoryObj } from "@storybook/react";
import { LinkCard } from "./LinkCard";

const meta: Meta<typeof LinkCard> = {
  title: "Components/LinkCard",
  component: LinkCard,
  argTypes: {
    variant: { control: "radio", options: ["desktop", "mobile"] },
    title: { control: "text" },
    description: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof LinkCard>;

export const Desktop: Story = {
  args: {
    title: "Compare Models",
    description: "See everything each model has to offer.",
    variant: "desktop",
  },
};

export const Mobile: Story = {
  args: {
    title: "Compare Models",
    variant: "mobile",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <LinkCard
        title="Compare Models"
        description="See everything each model has to offer."
        variant="desktop"
      />
      <LinkCard
        title="Visit Store"
        description="Find a store near you."
        variant="desktop"
      />
      <LinkCard title="Shop" variant="mobile" />
      <LinkCard title="Learn" variant="mobile" />
    </div>
  ),
};
