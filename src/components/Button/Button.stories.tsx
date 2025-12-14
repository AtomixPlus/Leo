import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";
import { within } from "storybook/test";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

const meta = {
  title: "Leo/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const assertButtonExists = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  expect(button).toBeInTheDocument();
  return button;
};

export const Default: Story = {
  args: {
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toHaveTextContent("Button");
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);

    await expect(button).toHaveTextContent("Secondary");
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toHaveTextContent("Destructive");
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toHaveTextContent("Outline");
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toHaveTextContent("Ghost");
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toHaveTextContent("Link");
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toHaveTextContent("Small");
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toHaveTextContent("Large");
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Disabled",
  },
  play: async ({ canvasElement }) => {
    const button = await assertButtonExists(canvasElement);
    expect(button).toBeDisabled();
  },
};
