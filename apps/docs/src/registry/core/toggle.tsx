import { cn } from "@/utils/cn";
import { useId, type ComponentProps } from "react";

type PropsType = Omit<ComponentProps<"input">, "size"> & {
  label?: string;
  size?: "sm" | "md";
};

export function Toggle({
  size = "sm",
  className,
  label,
  ...inputProps
}: PropsType) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        "flex max-w-fit cursor-pointer items-center gap-2 select-none",
        inputProps.disabled && "cursor-not-allowed"
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          className={cn("peer sr-only", className)}
          {...inputProps}
        />

        <div
          className={cn(
            "peer-checked:bg-primary-500 peer-focus:ring-primary-500/20 h-5 w-9 rounded-full bg-toggle-default-background peer-focus:ring-4 peer-disabled:bg-toggle-disabled-background",
            {
              "h-5 w-9": size === "sm",
              "h-6 w-11": size === "md"
            }
          )}
        />

        <div
          className={cn(
            "absolute top-1/2 left-0.5 flex -translate-y-1/2 items-center justify-center rounded-full bg-background-50 peer-disabled:bg-toggle-disabled-foreground shadow-sm transition-all peer-checked:right-0.5 peer-checked:translate-x-full",
            {
              "size-4": size === "sm",
              "size-5": size === "md"
            }
          )}
        />
      </div>

      {label && (
        <span
          className={cn(
            "text-sm font-medium text-text-50",
            inputProps.disabled && "text-text-200"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}
