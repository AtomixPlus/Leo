import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./index";

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

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products and features.",
  },
};

export const Checked: Story = {
  args: {
    label: "Accept terms and conditions",
    isSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Accept terms and conditions",
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Accept terms and conditions",
    isSelected: true,
    isDisabled: true,
  },
};
