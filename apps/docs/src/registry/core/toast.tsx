import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "./button";
import type { ComponentProps } from "react";
import { Avatar } from "./avatar";
import {
  CheckMarkCircle,
  Close2,
  Info,
  Messages,
  Close
} from "@tailgrids/icons";

const iconWrapperStyle = cva(
  "grid size-9 place-items-center rounded-md [&>svg]:size-6 [&>svg]:text-current",
  {
    variants: {
      variant: {
        success: "bg-success-muted text-success-muted-body",
        error: "bg-danger-muted text-danger-muted-body",
        info: "bg-info-muted text-info-muted-body",
        warning: "bg-warning-muted text-warning-muted-body",
        message: "bg-primary-500/10 text-primary-500"
      }
    }
  }
);

type PropsType = VariantProps<typeof iconWrapperStyle> & {
  description: string;
  title?: string;
  undoAction?: () => void;
  actions?: {
    primary: {
      label: string;
      onClick?: ComponentProps<"button">["onClick"];
    };
    dismiss?: {
      label: string;
      onClick?: ComponentProps<"button">["onClick"];
    };
  };
};

export function Toast({
  description,
  variant,
  title,
  undoAction,
  actions
}: PropsType) {
  return (
    <div
      className={cn(
        "flex max-w-112.5 min-w-96.25 items-center gap-3 rounded-lg border border-neutral-200 p-3 shadow-sm",
        title && "relative items-start"
      )}
    >
      {variant && (
        <div className={iconWrapperStyle({ variant })}>{getIcon(variant)}</div>
      )}

      <div className={cn(!title && "contents")}>
        {title && <h4 className="mb-1.5 text-lg font-semibold">{title}</h4>}

        <p
          className={cn(
            "text-md text-neutral-500",
            !title && "font-medium text-neutral-800"
          )}
        >
          {description}
        </p>

        {!title && undoAction && (
          <button className="text-primary-500 ml-auto text-sm font-medium">
            Undo
          </button>
        )}

        {title && actions && (
          <div className="mt-5 flex items-center gap-3">
            <Button
              size="sm"
              variant="primary"
              appearance="fill"
              onClick={actions.primary.onClick}
              className="py-2"
            >
              {actions.primary.label}
            </Button>

            {actions.dismiss && (
              <Button
                size="sm"
                appearance="outline"
                variant="primary"
                onClick={actions.dismiss.onClick}
                className="py-2"
              >
                {actions.dismiss.label}
              </Button>
            )}
          </div>
        )}

        <button
          className={cn({
            "ml-auto": !undoAction,
            "absolute top-2.5 right-2.5": title
          })}
        >
          <span className="sr-only">Dismiss Toast</span>
          <Close />
        </button>
      </div>
    </div>
  );
}

type AvatarToastProps = {
  name: string;
  description: string;
  image?: string;
  status: "none" | "online" | "offline" | "busy";
  time: string;
};

export function AvatarToast({
  name,
  description,
  image,
  status,
  time
}: AvatarToastProps) {
  return (
    <div className="bg-neutral relative flex min-w-89.5 items-start gap-4 rounded-lg border border-neutral-200 p-5 shadow-sm">
      <Avatar
        src={image}
        alt={"Image of " + name}
        status={status}
        fallback={name.charAt(0)}
        size={"lg"}
      />

      <div>
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-sm text-neutral-500">{description}</p>

        <p className="text-primary-500 mt-2 text-xs">{time}</p>
      </div>

      <button className="absolute top-2.5 right-2.5">
        <span className="sr-only">Dismiss Toast</span>
        <Close />
      </button>
    </div>
  );
}

function getIcon(variant: PropsType["variant"]) {
  switch (variant) {
    case "success":
      return <CheckMarkCircle />;
    case "error":
      return <Close2 />;
    case "warning":
      return <Info />;
    case "info":
      return <Info />;
    case "message":
      return <Messages />;
  }
}
