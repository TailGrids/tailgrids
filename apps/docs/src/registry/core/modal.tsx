import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export function Modal({ open, onClose, children, className }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !contentRef.current) return;

    const focusableElements = contentRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div role="presentation" className="fixed inset-0 z-50">
      <div
        ref={overlayRef}
        className="animate-fade-in fixed inset-0 bg-[rgba(94,93,93,0.25)] backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
      />
      <div
        ref={contentRef}
        className={cn(
          "animate-zoom-in fixed left-[50%] top-[50%] z-50 h-full max-h-[78vh] w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 max-sm:max-w-[90vw]",
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-dialog-title"
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
