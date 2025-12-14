import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./index";
import { within } from "storybook/test";
import { expect } from "vitest";

const meta = {
  title: "Leo/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const assertCheckboxExists = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const checkbox = canvas.getByRole("checkbox");
  await expect(checkbox).toBeInTheDocument();
  return checkbox;
};

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
  play: async ({ canvasElement }) => {
    const checkbox = await assertCheckboxExists(canvasElement);
    await expect(checkbox).not.toBeChecked();
  },
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products and features.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await assertCheckboxExists(canvasElement);

    await expect(
      canvas.getByText("Receive emails about new products and features.")
    ).toBeInTheDocument();

    await expect(checkbox).not.toBeChecked();
  },
};

export const Checked: Story = {
  args: {
    label: "Accept terms and conditions",
    isSelected: true,
  },
  play: async ({ canvasElement }) => {
    const checkbox = await assertCheckboxExists(canvasElement);
    await expect(checkbox).toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    label: "Accept terms and conditions",
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const checkbox = await assertCheckboxExists(canvasElement);
    await expect(checkbox).toBeDisabled();
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Accept terms and conditions",
    isSelected: true,
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const checkbox = await assertCheckboxExists(canvasElement);

    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();
  },
};