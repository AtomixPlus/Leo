import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { expect } from "storybook/test";
import { Button } from "@/components/Button";
import type { PressEvent } from "react-aria-components";

describe("Leo Button", () => {
  it("renders default button", () => {
    render(<Button onClick={() => {}}>Button</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("renders secondary variant", () => {
    render(
      <Button variant="secondary" onClick={() => {}}>
        Secondary
      </Button>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Secondary");
  });

  it("renders destructive variant", () => {
    render(
      <Button variant="destructive" onClick={() => {}}>
        Destructive
      </Button>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Destructive");
  });

  it("handles disabled state", () => {
    render(
      <Button isDisabled onClick={() => {}}>
        Disabled
      </Button>,
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("calls onPress handler", async () => {
    const handlePress = vi.fn();
    const user = userEvent.setup();

    render(
      <Button onPress={(e: PressEvent) => handlePress(e)}>Click Me</Button>,
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
