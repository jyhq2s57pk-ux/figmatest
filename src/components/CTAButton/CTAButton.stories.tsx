import type { Meta, StoryObj } from "@storybook/react";
import { CTAButton } from "./CTAButton";

const meta: Meta<typeof CTAButton> = {
  title: "Components/CTAButton",
  component: CTAButton,
  argTypes: {
    color: { control: "radio", options: ["light", "dark"] },
    size: { control: "radio", options: ["sml", "med", "lrg"] },
    text: { control: "text" },
    icon: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

export const LightSmall: Story = {
  args: { text: "Learn More", color: "light", size: "sml" },
};

export const LightMedium: Story = {
  args: { text: "Learn More", color: "light", size: "med" },
};

export const LightLarge: Story = {
  args: { text: "Learn More", color: "light", size: "lrg" },
};

export const DarkSmall: Story = {
  args: { text: "Get Started", color: "dark", size: "sml" },
};

export const DarkMedium: Story = {
  args: { text: "Get Started", color: "dark", size: "med" },
};

export const DarkLarge: Story = {
  args: { text: "Get Started", color: "dark", size: "lrg" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <CTAButton text="Small" color="light" size="sml" />
        <CTAButton text="Medium" color="light" size="med" />
        <CTAButton text="Large" color="light" size="lrg" />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <CTAButton text="Small" color="dark" size="sml" />
        <CTAButton text="Medium" color="dark" size="med" />
        <CTAButton text="Large" color="dark" size="lrg" />
      </div>
    </div>
  ),
};
