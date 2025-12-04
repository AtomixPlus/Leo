import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./index";

describe("Leo Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders with description", () => {
    render(
      <Checkbox
        label="Marketing emails"
        description="Receive emails about new products."
      />,
    );
    expect(
      screen.getByText("Receive emails about new products."),
    ).toBeInTheDocument();
  });

  it("handles checked state", () => {
    render(<Checkbox label="Accept terms" isSelected />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("handles disabled state", () => {
    render(<Checkbox label="Accept terms" isDisabled />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Accept terms" onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("can be controlled", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { rerender } = render(
      <Checkbox
        label="Accept terms"
        isSelected={false}
        onChange={handleChange}
      />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);

    // Simulate parent updating the state
    rerender(
      <Checkbox
        label="Accept terms"
        isSelected={true}
        onChange={handleChange}
      />,
    );
    expect(checkbox).toBeChecked();
  });
});
