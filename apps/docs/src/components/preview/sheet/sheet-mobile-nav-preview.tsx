"use client";

import { buttonStyles } from "@/registry/core/button";
import { Link } from "@/registry/core/link";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from "@/registry/core/sheet";

export default function SheetMobileNavPreview() {
  const NAV_LINKS = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "#documentation" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <Sheet>
      <SheetTrigger
        className={buttonStyles({ appearance: "outline", size: "sm" })}
      >
        Open Mobile Menu
      </SheetTrigger>
      <SheetOverlay>
        <SheetContent side="right">
          {({ close }) => (
            <>
              <SheetHeader className="mb-8">
                <SheetTitle>Tailgrids UI</SheetTitle>
              </SheetHeader>
              <SheetBody>
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-text-100 hover:text-primary-500"
                      onClick={close}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetBody>
            </>
          )}
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  );
}
