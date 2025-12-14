import { describe, it, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/Button";
import { PressEvent } from "react-aria-components";



describe("Leo Button", async () => {
  it("renders default button", async () => {

    act(() => render(<Button onClick={() => act(() => { })}>Button</Button>))

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("renders secondary variant", () => {
    act(() => render(<Button variant="secondary" onClick={() => act(() => { })}>Secondary</Button>))
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Secondary");
  });

  it("renders destructive variant", () => {
    act(() => render(<Button variant="destructive" onClick={() => act(() => { })}>Destructive</Button>))
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Destructive");
  });

  it("handles disabled state", () => {
    act(() => render(<Button isDisabled onClick={() => act(() => { })}>Disabled</Button>))
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("calls onPress handler", async () => {
    const handlePress = act(() => vi.fn());
    const user = await act(() => userEvent.setup());

    await act(async () => render(<Button onPress={(e: PressEvent) => handlePress}>Click Me</Button>))

    const button = screen.getByRole("button");

    act(async () => await user.click(button));

    expect(handlePress).toHaveBeenCalledTimes(1);
  });


});
