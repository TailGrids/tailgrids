"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/registry/core/collapsible";
import { InfoCircle } from "@tailgrids/icons";
import { useState } from "react";

const stackTrace = `  at ProductList (components/ProductList.tsx:24:18)
  at renderWithHooks (react-dom.development.js:14985)
  at mountIndeterminateComponent (react-dom.development.js:17811)
  at beginWork (react-dom.development.js:19049)
  at HTMLUnknownElement.callCallback (react-dom.development.js:3990)
  at Object.invokeGuardedCallbackDev (react-dom.development.js:4039)
  at invokeGuardedCallback (react-dom.development.js:4096)`;

export default function CollapsibleControlledPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-md space-y-3">
      {/* Error summary — always visible */}
      <div className="rounded-xl border border-alert-danger-border bg-alert-danger-background p-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-alert-danger-icon-background text-white-100 [&>svg]:size-4">
            <InfoCircle />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-alert-danger-title">
              TypeError
            </p>
            <p className="mt-0.5 text-sm text-alert-danger-description">
              Cannot read properties of undefined (reading &apos;map&apos;) in
              ProductList.tsx:24
            </p>
          </div>
          {/* External button that drives the controlled collapsible */}
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className={buttonStyles({ appearance: "outline", size: "sm" })}
          >
            {open ? "Hide trace" : "View trace"}
          </button>
        </div>
      </div>

      {/* Controlled — synced with the button above */}
      <Collapsible isExpanded={open} onExpandedChange={setOpen}>
        <CollapsibleTrigger className="font-mono text-xs text-text-100 group-data-expanded:border-b">
          Stack trace
        </CollapsibleTrigger>

        <CollapsibleContent className="group-data-expanded:pt-4">
          <code className="overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-6 text-text-100">
            {stackTrace}
          </code>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
