import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    size: { control: "radio", options: ["sml", "med"] },
    color: {
      control: "select",
      options: ["Standard", "Premium", "New", "Executive"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Standard: Story = {
  args: { color: "Standard", size: "sml" },
};

export const Premium: Story = {
  args: { color: "Premium", size: "sml" },
};

export const New: Story = {
  args: { color: "New", size: "sml" },
};

export const Executive: Story = {
  args: { color: "Executive", size: "sml" },
};

export const MediumSize: Story = {
  args: { color: "Premium", size: "med" },
};

export const CustomChildren: Story = {
  args: { color: "Executive", size: "med", children: "Custom Label" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Badge color="Standard" />
      <Badge color="Premium" />
      <Badge color="New" />
      <Badge color="Executive" />
      <Badge color="Standard" size="med" />
      <Badge color="Premium" size="med" />
      <Badge color="New" size="med" />
      <Badge color="Executive" size="med" />
    </div>
  ),
};
