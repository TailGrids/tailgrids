import defaultSpinner from "./default.svg";
import dottedSpinner from "./dotted.svg";
import dottedRoundSpinner from "./dotted-round.svg";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

type SpinnerType = "default" | "dotted" | "dotted-round";

const spinnerStyles = cva("animate-spin", {
  variants: {
    size: {
      sm: "size-5",
      md: "size-7",
      lg: "size-9",
      xl: "size-10",
      xxl: "size-12"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type PropsType = {
  className?: string;
  type?: SpinnerType;
} & VariantProps<typeof spinnerStyles>;

export function Spinner({
  className,
  size = "md",
  type = "default"
}: PropsType) {
  const src = getSpinnerSrc(type);

  return (
    <img
      src={typeof src === "string" ? src : src.src}
      role="presentation"
      alt="Spinner"
      className={cn(spinnerStyles({ size }), className)}
    />
  );
}

function getSpinnerSrc(type: SpinnerType) {
  switch (type) {
    case "dotted":
      return dottedSpinner;
    case "dotted-round":
      return dottedRoundSpinner;
    default:
      return defaultSpinner;
  }
}
