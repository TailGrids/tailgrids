"use client";

import { cn } from "@/utils/cn";
import { type ValidationResult } from "@react-types/shared";
import { cva } from "class-variance-authority";
import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
  type RefObject
} from "react";
import {
  useDateSegment,
  useLocale,
  useTimeField,
  type AriaTimeFieldProps,
  type DateFieldAria,
  type TimeValue
} from "react-aria";
import {
  useTimeFieldState,
  type DateFieldState,
  type DateSegment,
  type TimeFieldState
} from "react-stately";

const timeFieldStyles = cva("flex flex-col gap-1");

const timeFieldGroupStyles = cva(
  "flex min-w-fit items-center gap-1 rounded-lg border border-base-200 bg-background-50 px-3 py-2 text-sm text-title-50 outline-none transition focus-within:border-button-primary-focus-ring",
  {
    variants: {
      isInvalid: {
        true: "border-input-error"
      },
      isDisabled: {
        true: "cursor-not-allowed opacity-60"
      }
    }
  }
);

const timeSegmentStyles = cva(
  "inline-flex min-w-5 select-none items-center justify-center rounded-sm px-0.5 py-0.5 outline-none caret-transparent forced-color-adjust-none [-webkit-tap-highlight-color:transparent]",
  {
    variants: {
      isPlaceholder: {
        true: "text-text-100"
      },
      isDisabled: {
        true: "text-text-200"
      }
    }
  }
);

export interface TimeFieldProps<T extends TimeValue> extends Omit<
  AriaTimeFieldProps<T>,
  "isRequired" | "isInvalid" | "isDisabled" | "isReadOnly"
> {
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  children?: ReactNode;
}

export interface TimeFieldProviderProps<T extends TimeValue> extends Omit<
  AriaTimeFieldProps<T>,
  "isRequired" | "isInvalid" | "isDisabled" | "isReadOnly"
> {
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  children?: ReactNode;
}

interface TimeFieldContextValue {
  displayProps: Pick<
    TimeFieldProviderProps<TimeValue>,
    "label" | "description" | "errorMessage"
  >;
  state: TimeFieldState;
  fieldRef: RefObject<HTMLDivElement | null>;
  labelProps: DateFieldAria["labelProps"];
  fieldProps: DateFieldAria["fieldProps"];
  inputProps: DateFieldAria["inputProps"];
  descriptionProps: DateFieldAria["descriptionProps"];
  errorMessageProps: DateFieldAria["errorMessageProps"];
  isInvalid: boolean;
  validationErrors: string[];
  validationDetails: ValidationResult["validationDetails"];
}

const TimeFieldContext = createContext<TimeFieldContextValue | null>(null);

function useTimeFieldContext() {
  const context = useContext(TimeFieldContext);

  if (!context) {
    throw new Error(
      "TimeField compound components must be used within TimeField."
    );
  }

  return context;
}

export function TimeFieldProvider<T extends TimeValue>({
  children,
  required,
  invalid,
  disabled,
  readOnly,
  ...props
}: TimeFieldProviderProps<T>) {
  const { locale } = useLocale();
  const ariaProps: AriaTimeFieldProps<T> = {
    ...props,
    isRequired: required,
    isInvalid: invalid,
    isDisabled: disabled,
    isReadOnly: readOnly
  };

  const state = useTimeFieldState({ ...ariaProps, locale });
  const fieldRef = useRef<HTMLDivElement>(null);

  const {
    labelProps,
    fieldProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails
  } = useTimeField(ariaProps, state, fieldRef);

  return (
    <TimeFieldContext.Provider
      value={{
        displayProps: props,
        state,
        fieldRef,
        labelProps,
        fieldProps,
        inputProps,
        descriptionProps,
        errorMessageProps,
        isInvalid,
        validationErrors,
        validationDetails
      }}
    >
      {children}
    </TimeFieldContext.Provider>
  );
}

export function TimeField<T extends TimeValue>({
  className,
  children,
  ...props
}: TimeFieldProps<T>) {
  const hasChildren = Boolean(children);

  return (
    <TimeFieldProvider {...props}>
      <div className={cn(timeFieldStyles(), className)}>
        {hasChildren ? (
          children
        ) : (
          <>
            <TimeFieldLabel />
            <TimeFieldInput />
            <TimeFieldDescription />
            <TimeFieldError />
          </>
        )}
      </div>
    </TimeFieldProvider>
  );
}

export function TimeFieldLabel({ className, children }: TimeFieldSlotProps) {
  const { labelProps, displayProps } = useTimeFieldContext();
  const content = children ?? displayProps.label;

  if (content == null) {
    return null;
  }

  return (
    <label
      {...labelProps}
      className={cn("text-sm font-medium text-text-50", className)}
    >
      {content}
    </label>
  );
}

export function TimeFieldInput({ className }: TimeFieldInputProps) {
  const { fieldProps, fieldRef, inputProps, state, isInvalid } =
    useTimeFieldContext();

  return (
    <div
      {...fieldProps}
      ref={fieldRef}
      className={cn(
        timeFieldGroupStyles({
          isInvalid,
          isDisabled: state.isDisabled
        }),
        className
      )}
      data-invalid={isInvalid || undefined}
      data-disabled={state.isDisabled || undefined}
    >
      {state.segments.map((segment, index) => (
        <TimeFieldSegment key={`${segment.type}-${index}`} segment={segment} />
      ))}

      <input {...inputProps} />
    </div>
  );
}

export function TimeFieldDescription({
  className,
  children
}: TimeFieldSlotProps) {
  const { descriptionProps, displayProps } = useTimeFieldContext();
  const content = children ?? displayProps.description;

  if (content == null) {
    return null;
  }

  return (
    <p {...descriptionProps} className={cn("text-sm text-text-100", className)}>
      {content}
    </p>
  );
}

export function TimeFieldError({ className, children }: TimeFieldSlotProps) {
  const {
    errorMessageProps,
    isInvalid,
    displayProps,
    validationDetails,
    validationErrors
  } = useTimeFieldContext();

  if (!isInvalid && children == null && displayProps.errorMessage == null) {
    return null;
  }

  const content =
    children ??
    resolveTimeFieldErrorMessage(displayProps.errorMessage, {
      isInvalid,
      validationErrors,
      validationDetails
    });

  if (content == null) {
    return null;
  }

  return (
    <p
      {...errorMessageProps}
      className={cn("text-sm text-input-error", className)}
    >
      {content}
    </p>
  );
}

interface TimeFieldInputProps {
  className?: string;
}

interface TimeFieldSlotProps {
  className?: string;
  children?: ReactNode;
}

export interface TimeInputSegmentProps {
  segment: DateSegment;
  state: DateFieldState;
}

function TimeFieldSegment({ segment }: { segment: DateSegment }) {
  const { state } = useTimeFieldContext();
  const segmentRef = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, segmentRef);

  if (segment.type === "literal") {
    return (
      <span {...segmentProps} className={cn("px-0 text-text-100")}>
        {segment.text}
      </span>
    );
  }

  return (
    <div
      {...segmentProps}
      ref={segmentRef}
      className={cn(
        timeSegmentStyles({
          isPlaceholder: segment.isPlaceholder,
          isDisabled:
            state.isDisabled || state.isReadOnly || !segment.isEditable
        }),
        "focus:bg-button-primary-background focus:text-white-100",
        segmentProps.className
      )}
    >
      {segment.text}
    </div>
  );
}

function resolveTimeFieldErrorMessage(
  errorMessage: AriaTimeFieldProps<TimeValue>["errorMessage"],
  validation: ValidationResult
) {
  if (typeof errorMessage === "function") {
    return errorMessage(validation);
  }

  return errorMessage ?? validation.validationErrors.join(", ");
}
