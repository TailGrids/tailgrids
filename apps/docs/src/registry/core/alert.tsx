import { cn } from "@/utils/cn";
import { CheckCircle1, Xmark2x } from "@tailgrids/icons";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { Button } from "./button";

const wrapperStyles = cva(
  "relative w-full max-w-4xl rounded-lg border px-5 py-4",
  {
    variants: {
      variant: {
        success: "border-success-border bg-success-muted",
        warning: "border-warning-border bg-warning-muted",
        danger: "border-danger-border bg-danger-muted",
        info: "border-info-border bg-info-muted",
        gray: "border-default-border bg-default-muted"
      }
    }
  }
);

const iconWrapperStyles = cva(
  "flex size-7 items-center justify-center rounded-lg",
  {
    variants: {
      variant: {
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
        info: "bg-info text-info-foreground",
        gray: "bg-default text-default-foreground"
      }
    }
  }
);

const titleStyles = cva("font-semibold", {
  variants: {
    variant: {
      success: "text-success-muted-foreground",
      warning: "text-warning-muted-foreground",
      danger: "text-danger-muted-foreground",
      info: "text-info-muted-foreground",
      gray: "text-default-muted-foreground"
    }
  }
});

const messageStyles = cva("text-sm", {
  variants: {
    variant: {
      success: "text-success-muted-body",
      warning: "text-warning-muted-body",
      danger: "text-danger-muted-body",
      info: "text-info-muted-body",
      gray: "text-default-muted-body"
    }
  }
});

const closeButtonStyles = cva(
  "absolute top-3 right-3 flex items-center justify-center p-1",
  {
    variants: {
      variant: {
        success: "text-success",
        warning: "text-warning",
        danger: "text-danger",
        info: "text-info",
        gray: "text-default"
      }
    }
  }
);

const primaryButtonStyles = cva("", {
  variants: {
    variant: {
      success: "text-success-foreground",
      danger: "text-danger-foreground",
      info: "bg-info hover:bg-info-hover text-success-foreground",
      warning: "bg-warning hover:bg-warning-hover text-warning-foreground",
      gray: "bg-default hover:bg-default-hover text-default-foreground"
    }
  }
});

type PropsType = {
  title?: string;
  message: string;
  variant?: "success" | "danger" | "info" | "warning" | "gray";
  withIcon?: boolean;
  actions?: {
    primary?: {
      label: string;
      onClick: () => void;
    };
    secondary?: {
      label: string;
    };
  };
  open?: boolean;
  onClose?: () => void;
};

export default function Alert({
  title,
  message,
  variant = "success",
  withIcon,
  open = true,
  onClose,
  actions
}: PropsType) {
  const [visible, setVisible] = useState(open);

  const handleClose = () => {
    setVisible(false);
    onClose?.();

    setTimeout(() => {
      setVisible(true);
    }, 5000);
  };

  if (!visible) return null;

  return (
    <div className={wrapperStyles({ variant })}>
      <button
        onClick={handleClose}
        className={closeButtonStyles({
          variant
        })}
        aria-label="Close alert"
      >
        <Xmark2x />
      </button>

      <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-3.5">
        {withIcon && (
          <div className={iconWrapperStyles({ variant })}>
            <CheckCircle1 className="size-4" />
          </div>
        )}

        {title && <h4 className={titleStyles({ variant })}>{title}</h4>}

        <p
          className={messageStyles({
            variant,
            className: cn(title ? "col-span-full" : "font-medium")
          })}
        >
          {message}
        </p>
      </div>

      {(actions?.primary || actions?.secondary) && (
        <div className="mt-5 flex gap-3">
          {actions?.primary && (
            <Button
              size="xs"
              className={cn("px-4.5", primaryButtonStyles({ variant }))}
              variant={getVariant(variant)}
              onClick={actions.primary.onClick}
            >
              {actions.primary.label}
            </Button>
          )}

          {actions?.secondary && (
            <Button
              onClick={handleClose}
              className="text-xs bg-neutral"
              appearance="outline"
            >
              {actions.secondary.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

function getVariant(variant: string) {
  switch (variant) {
    case "success":
      return "success";
    case "danger":
      return "danger";
  }
}
