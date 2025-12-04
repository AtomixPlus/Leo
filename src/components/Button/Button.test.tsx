import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/Button";

describe("Leo Button", () => {
  it("renders default button", () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("renders secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Secondary");
  });

  it("renders destructive variant", () => {
    render(<Button variant="destructive">Destructive</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Destructive");
  });

  it("handles disabled state", () => {
    render(<Button isDisabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("calls onPress handler", async () => {
    const handlePress = vi.fn();
    const user = userEvent.setup();
    render(<Button onPress={handlePress}>Click me</Button>);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
