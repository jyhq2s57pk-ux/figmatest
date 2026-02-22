import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import type { CarouselSlide } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};

const customSlides: CarouselSlide[] = [
  {
    title: "Slide One",
    subtitle: "First subtitle",
    description: "Description for the first slide.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "Slide Two",
    subtitle: "Second subtitle",
    description: "Description for the second slide.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "Slide Three",
    subtitle: "Third subtitle",
    description: "Description for the third slide.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    textColor: "#1a1a1a",
  },
];

export const CustomSlides: Story = {
  args: {
    heading: "Gallery",
    subheading: "A showcase of beautiful gradients.",
    slides: customSlides,
  },
};

export const SingleSlide: Story = {
  args: {
    heading: "Featured",
    subheading: "One spotlight item.",
    slides: [
      {
        title: "Solo",
        description: "A single slide carousel.",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      },
    ],
  },
};
