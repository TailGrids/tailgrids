"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/registry/core/collapsible";
import { Check, Copy1, Eye, EyeDisabled } from "@tailgrids/icons";
import { useState } from "react";

const envVars = [
  { key: "DATABASE_URL", value: "postgresql://user:pass@db.host.com/myapp" },
  { key: "NEXT_PUBLIC_API_URL", value: "https://api.tailgrids.com/v1" },
  { key: "STRIPE_SECRET_KEY", value: "sk_live_51OAd8...fX8z" }
];

export default function CollapsibleInteractivePreview() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);

  const toggleReveal = (key: string) =>
    setRevealed(prev => ({ ...prev, [key]: !prev[key] }));

  const copyValue = (key: string, value: string) => {
    navigator.clipboard?.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="w-full max-w-lg">
      <Collapsible>
        <CollapsibleTrigger>
          Environment Variables
          <span className="rounded-full bg-background-soft-100 px-2 py-0.5 text-xs font-medium text-text-100">
            {envVars.length}
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent className="group-data-expanded:border-t border-base-100 group-data-expanded:pt-4">
          <ul className="space-y-2">
            {envVars.map(({ key, value }) => (
              <li
                key={key}
                className="flex items-center gap-2 rounded-lg bg-background-soft-50 px-3 py-2"
              >
                <code className="w-36 shrink-0 truncate text-xs font-semibold text-title-50">
                  {key}
                </code>
                <code className="flex-1 truncate font-mono text-xs text-text-100">
                  {revealed[key] ? value : "••••••••••••••••"}
                </code>
                <div className="flex shrink-0 items-center gap-0.5">
                  <button
                    type="button"
                    onClick={() => toggleReveal(key)}
                    aria-label={revealed[key] ? "Hide value" : "Show value"}
                    className="rounded p-1 text-text-100 transition-colors hover:bg-background-soft-200 hover:text-title-50"
                  >
                    {revealed[key] ? (
                      <EyeDisabled size={14} />
                    ) : (
                      <Eye size={14} />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => copyValue(key, value)}
                    aria-label="Copy value"
                    className="rounded p-1 text-text-100 transition-colors hover:bg-background-soft-200 hover:text-title-50"
                  >
                    {copied === key ? <Check size={14} /> : <Copy1 size={14} />}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
