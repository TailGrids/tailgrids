import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const groupStyles = cva("flex items-center", {
  variants: {
    size: {
      xs: "gap-2",
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-3",
      xl: "gap-4",
      xxl: "gap-4"
    }
  }
});

const avatarStyles = cva(
  "bg-primary-50 text-primary-500 relative grid place-items-center rounded-full",
  {
    variants: {
      size: {
        xs: "size-6 text-xs font-medium",
        sm: "size-8 text-sm font-medium",
        md: "size-10 text-base font-semibold",
        lg: "size-12 text-lg font-semibold",
        xl: "size-14 text-xl font-semibold",
        xxl: "size-16 text-2xl font-semibold"
      }
    }
  }
);

type PropsType = VariantProps<typeof avatarStyles> & {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  status?: "none" | "online" | "offline" | "busy";
  fallback: string;
  label?: {
    title: string;
    subtitle?: string;
  };
};

export function Avatar({
  src,
  alt,
  className,
  fallback,
  size = "md",
  style,
  status = "none",
  label
}: PropsType) {
  return (
    <figure className={cn(groupStyles({ size }), className)} style={style}>
      <div className={avatarStyles({ size })}>
        {src ? (
          <img
            src={src}
            className="size-full aspect-square rounded-full object-cover"
            alt={alt}
          />
        ) : (
          <span className="uppercase">{fallback}</span>
        )}

        {status !== "none" && <Indicator size={size} status={status} />}
      </div>

      {label && (
        <LabelGroup size={size} title={label.title} subtitle={label.subtitle} />
      )}
    </figure>
  );
}

const indicatorStyles = cva(
  "absolute right-0 bottom-0 rounded-full ring-[1.5px] ring-background-50",
  {
    variants: {
      status: {
        online: "bg-green-500",
        offline: "bg-red-500",
        busy: "bg-yellow-500"
      },
      size: {
        xs: "size-1.5",
        sm: "size-2",
        md: "size-2.5",
        lg: "size-3",
        xl: "size-3.5",
        xxl: "size-4"
      }
    },
    defaultVariants: {
      size: "md",
      status: "online"
    }
  }
);

type IndicatorProps = VariantProps<typeof indicatorStyles>;

function Indicator({ size, status }: IndicatorProps) {
  return <div className={indicatorStyles({ size, status })} />;
}

const titleStyles = cva("font-medium text-text-color", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-md",
      xl: "text-lg",
      xxl: "text-lg"
    }
  }
});

const subtitleStyles = cva("text-text-secondary", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
      xl: "text-base",
      xxl: "text-base"
    }
  }
});

type LabelGroupProps = VariantProps<typeof titleStyles> & {
  title: string;
  subtitle?: string;
};

export function LabelGroup({ title, subtitle, size }: LabelGroupProps) {
  return (
    <figcaption>
      <div className={titleStyles({ size })}>{title}</div>

      {subtitle && <div className={subtitleStyles({ size })}>{subtitle}</div>}
    </figcaption>
  );
}

type AvatarGroupPropsType = {
  className?: string;
  size?: "xs" | "sm" | "md";
  data: {
    src: string;
    alt: string;
  }[];
};

export function AvatarGroup({
  className,
  size = "md",
  data
}: AvatarGroupPropsType) {
  return (
    <div className={cn("flex items-center -space-x-2", className)}>
      {data.map(({ src, alt }, i) => (
        <Avatar
          key={src}
          size={size}
          src={src}
          alt={alt}
          fallback={alt.charAt(0)}
          className="rounded-full ring-[1.5px] ring-background-50"
          style={{
            zIndex: i
          }}
        />
      ))}
    </div>
  );
}
