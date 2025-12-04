import type { CheckboxProps as AriaCheckboxProps } from "react-aria-components";
import { Checkbox as AriaCheckbox } from "react-aria-components";
import { Check } from "lucide-react";
import { cn } from "@/tools/styles";

export interface CheckboxProps extends Omit<AriaCheckboxProps, "children"> {
  label?: string;
  description?: string;
  className?: string;
}

export const Checkbox = ({
  label,
  description,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <AriaCheckbox
      {...props}
      className={cn(
        "group flex items-start gap-2 text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
    >
      {({ isSelected }) => (
        <>
          <div
            className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded border border-primary ring-offset-background transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isSelected && "bg-primary text-primary-foreground",
            )}
          >
            {isSelected && <Check className="h-4 w-4" />}
          </div>
          {(label || description) && (
            <div className="flex flex-col gap-1">
              {label && (
                <span className="font-medium leading-none">{label}</span>
              )}
              {description && (
                <span className="text-muted-foreground">{description}</span>
              )}
            </div>
          )}
        </>
      )}
    </AriaCheckbox>
  );
};
