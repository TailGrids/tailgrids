import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  Group as AriaGroup,
  NumberField as AriaNumberField,
  type GroupProps as AriaGroupProps,
  type NumberFieldProps as AriaNumberFieldProps
} from "react-aria-components";

export interface NumberFieldProps extends Omit<
  AriaNumberFieldProps,
  "isInvalid" | "isRequired" | "isDisabled" | "isReadOnly"
> {
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export function NumberField({
  children,
  invalid,
  required,
  disabled,
  readOnly,
  ...props
}: NumberFieldProps) {
  return (
    <AriaNumberField
      {...props}
      isInvalid={invalid}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      {children}
    </AriaNumberField>
  );
}

const numberFieldStyles = cva(["relative w-fit"]);

export function NumberFieldGroup({
  children,
  className,
  ...params
}: AriaGroupProps) {
  return (
    <AriaGroup className={cn(numberFieldStyles(), className)} {...params}>
      {children}
    </AriaGroup>
  );
}

const numberFieldActionStyles = cva(
  "h-[calc(100%-2px)] px-2 border-button-outline-border absolute top-1/2 -translate-y-1/2 duration-300 hover:bg-button-outline-hover-background focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-button-primary-focus-ring [:where([slot=decrement])]:border-r [:where([slot=decrement])]:rounded-l-lg [:where([slot=decrement])]:left-px [:where([slot=increment])]:border-l [:where([slot=increment])]:rounded-r-lg [:where([slot=increment])]:right-px [:where(&>svg)]:size-5"
);

export interface NumberFieldActionProps extends Omit<AriaButtonProps, "slot"> {
  slot: "decrement" | "increment";
}

export function NumberFieldAction({
  children,
  className,
  ...params
}: NumberFieldActionProps) {
  return (
    <AriaButton
      className={cn(numberFieldActionStyles(), className)}
      {...params}
    >
      {children}
    </AriaButton>
  );
}
