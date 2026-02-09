import { cn } from "@/utils/cn";
import { Xmark2x } from "@tailgrids/icons";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { Button } from "./button";

const wrapperStyles = cva(
  "relative w-full max-w-4xl rounded-lg border px-5 py-4",
  {
    variants: {
      variant: {
        success: "border-alert-success-border bg-alert-success-background",
        warning: "border-alert-warning-border bg-alert-warning-background",
        danger: "border-alert-danger-border bg-alert-danger-background",
        info: "border-alert-info-border bg-alert-info-background",
        gray: "border-alert-default-border bg-alert-default-background"
      }
    }
  }
);

const iconWrapperStyles = cva(
  "flex size-7 items-center justify-center rounded-lg [&>svg]:size-4 text-background-100",
  {
    variants: {
      variant: {
        success: "bg-alert-success-icon-background",
        warning: "bg-alert-warning-icon-background",
        danger: "bg-alert-danger-icon-background",
        info: "bg-alert-info-icon-background",
        gray: "bg-alert-default-icon-background"
      }
    }
  }
);

const titleStyles = cva("font-semibold", {
  variants: {
    variant: {
      success: "text-alert-success-title",
      warning: "text-alert-warning-title",
      danger: "text-alert-danger-title",
      info: "text-alert-info-title",
      gray: "text-alert-default-title"
    }
  }
});

const messageStyles = cva("text-sm", {
  variants: {
    variant: {
      success: "text-alert-success-description",
      warning: "text-alert-warning-description",
      danger: "text-alert-danger-description",
      info: "text-alert-info-description",
      gray: "text-alert-default-description"
    }
  }
});

const closeButtonStyles = cva(
  "absolute top-3 right-3 flex items-center justify-center p-1",
  {
    variants: {
      variant: {
        success: "text-alert-success-close-icon",
        warning: "text-alert-warning-close-icon",
        danger: "text-alert-danger-close-icon",
        info: "text-alert-info-close-icon",
        gray: "text-alert-default-close-icon"
      }
    }
  }
);

const primaryButtonStyles = cva("text-background-100", {
  variants: {
    variant: {
      success:
        "bg-alert-success-button-background hover:bg-alert-success-button-hover-background",
      danger:
        "bg-alert-danger-button-background hover:bg-alert-danger-button-hover-background",
      info: "bg-alert-info-button-background hover:bg-alert-info-button-hover-background",
      warning:
        "bg-alert-warning-button-background hover:bg-alert-warning-button-hover-background",
      gray: "bg-alert-default-button-background hover:bg-alert-default-button-hover-background"
    }
  }
});

type PropsType = {
  title?: string;
  message: string;
  variant?: "success" | "danger" | "info" | "warning" | "gray";
  icon?: React.ReactNode;
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
  icon,
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
        {icon && <div className={iconWrapperStyles({ variant })}>{icon}</div>}

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
            <Button size="xs" appearance="outline" onClick={handleClose}>
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
