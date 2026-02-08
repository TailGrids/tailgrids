"use client";

import { cn } from "@/utils/cn";
import { ArrowLeft, ArrowRight } from "@tailgrids/icons";
import { cva } from "class-variance-authority";
import { Button } from "./button";

const wrapperStyles = cva(
  "mx-auto flex w-full items-center justify-center max-sm:gap-5",
  {
    variants: {
      variant: {
        default: "gap-0.5",
        compact: "max-w-fit sm:divide-x sm:divide-(--border-color-base-100)"
      }
    }
  }
);

const sideButtonStyles = cva("max-sm:size-10 sm:h-10", {
  variants: {
    sideLayout: {
      full: "py-2 pr-4 pl-3.5",
      label: "px-4 py-2",
      icon: "p-2"
    },
    variant: {
      default: "",
      compact: "border-base-100"
    }
  }
});

type PropsType = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  variant?: "default" | "compact";
  sideLayout?: "full" | "label" | "icon";
};

const MAX_PAGES_SHOWN = 6;

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = "default",
  sideLayout = "full"
}: PropsType) {
  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className="w-full text-sm font-medium text-text-50"
    >
      <ul className={wrapperStyles({ variant })}>
        <li className="mr-auto">
          <Button
            appearance="outline"
            size="sm"
            disabled={currentPage === 1}
            aria-label="Previous page"
            onClick={() => onPageChange?.(currentPage - 1)}
            className={cn(sideButtonStyles({ sideLayout, variant }), {
              "sm:rounded-r-none sm:border-r-0": variant === "compact"
            })}
          >
            <ArrowLeft
              className={cn("shrink-0", sideLayout === "label" && "sm:hidden")}
            />

            {sideLayout !== "icon" && (
              <span className="max-sm:hidden">Previous</span>
            )}
          </Button>
        </li>

        {/* Only for mobile view */}
        <li className="sm:hidden">
          Page {currentPage} of {totalPages}
        </li>

        {Array.from({ length: totalPages }, (_, index) => {
          const isActive = currentPage === index + 1;

          if (totalPages > MAX_PAGES_SHOWN) {
            if (currentPage > 3) {
              if (index + 1 < currentPage) {
                return null;
              }

              if (index + 1 === currentPage + 3) {
                return (
                  <li key={index} className="max-sm:hidden">
                    <PaginationEllipsis paginationVariant={variant} />
                  </li>
                );
              }

              if (index + 1 < currentPage + 3 || index + 1 > totalPages - 2) {
                return (
                  <li key={index} className="max-sm:hidden">
                    <PaginationButton
                      page={index + 1}
                      isActive={isActive}
                      onPageChange={onPageChange}
                      paginationVariant={variant}
                    />
                  </li>
                );
              }
            }

            if (index === 3) {
              return (
                <li key={index} className="max-sm:hidden">
                  <PaginationEllipsis paginationVariant={variant} />
                </li>
              );
            }

            /**
             * This logic ensures pagination buttons from 1-3 and the last 3 pages are visible
             * and the rest in the middle are hidden and replaced with and ellipsis.
             */
            if (index > 2 && index < totalPages - 3) {
              return null;
            }
          }

          return (
            <li key={index} className="max-sm:hidden">
              <PaginationButton
                page={index + 1}
                isActive={isActive}
                onPageChange={onPageChange}
                paginationVariant={variant}
              />
            </li>
          );
        })}

        <li className="ml-auto">
          <Button
            size="sm"
            appearance="outline"
            disabled={currentPage === totalPages}
            aria-label="Next page"
            onClick={() => onPageChange?.(currentPage + 1)}
            className={cn(sideButtonStyles({ sideLayout, variant }), {
              "sm:rounded-l-none sm:border-l-0": variant === "compact"
            })}
          >
            {sideLayout !== "icon" && (
              <span className="max-sm:hidden">Next</span>
            )}

            <ArrowRight
              className={cn("shrink-0", sideLayout === "label" && "sm:hidden")}
            />
          </Button>
        </li>
      </ul>
    </nav>
  );
}

function PaginationButton({
  page,
  isActive,
  onPageChange,
  paginationVariant
}: {
  page: number;
  isActive: boolean;
  onPageChange?: (page: number) => void;
  paginationVariant: PropsType["variant"];
}) {
  return (
    <button
      aria-label={`Go to page ${page}`}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "size-10 shrink-0 rounded-lg",
        isActive ? "bg-background-soft-100" : "hover:bg-background-soft-100",
        paginationVariant === "compact" &&
          "rounded-none border-y border-base-100"
      )}
      onClick={() => onPageChange?.(page)}
    >
      {page}
    </button>
  );
}

function PaginationEllipsis({
  paginationVariant
}: {
  paginationVariant: PropsType["variant"];
}) {
  return (
    <button
      className={cn("pointer-events-none size-10 shrink-0", {
        "border-y border-base-100": paginationVariant === "compact"
      })}
    >
      ...
    </button>
  );
}
