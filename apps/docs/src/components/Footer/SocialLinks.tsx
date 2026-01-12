import { cn } from "@/lib/cn";
import Link from "next/link";
import { socialsLinks } from "./footerData";

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-start gap-2", className)}>
      {socialsLinks.map(social => (
        <Link
          key={social.title}
          href={social.url}
          target={social.external ? "_blank" : "_self"}
          rel={social.external ? "noopener noreferrer" : undefined}
          aria-label={social.title}
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-lg text-gray-500 shadow-navbar-icon duration-200 hover:bg-gray-100 hover:text-tg-title-color hover:shadow-none",
            social.title === "Github" ? "h-8 w-[63px] gap-1.5" : "size-8"
          )}
        >
          <span className="shrink-0">{social.icon}</span>
          {social.title === "Github" && (
            <span className="text-sm font-medium text-tg-text-color-secondary">
              1.5K
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
