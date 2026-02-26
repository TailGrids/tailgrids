import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/registry/core/collapsible";
import { CheckCircle1 } from "@tailgrids/icons";

const logs: { text: string; ok: boolean }[] = [
  { text: "› Installing dependencies…", ok: false },
  { text: "✓ Dependencies installed in 8.1s", ok: true },
  { text: "› Bundling with Turbopack…", ok: false },
  { text: "✓ Compiled successfully in 3.2s", ok: true },
  { text: "✓ ESLint — 0 errors, 0 warnings", ok: true },
  { text: "✓ TypeScript — 0 errors", ok: true },
  { text: "✓ Build artifact written to .next/", ok: true },
  { text: "› Deploying to production…", ok: false },
  { text: "✓ Live at tailgrids.vercel.app", ok: true }
];

export default function CollapsibleWithIconPreview() {
  return (
    <div className="w-full max-w-lg">
      <Collapsible>
        <CollapsibleTrigger>
          <CheckCircle1 className="size-5 shrink-0 text-success-500" />
          <span className="flex-1">Build &amp; Deploy</span>
          <span className="rounded-full bg-background-soft-100 px-2 py-0.5 text-xs font-normal text-text-100">
            42s
          </span>
        </CollapsibleTrigger>

        <CollapsibleContent className="group-data-expanded:border-t border-base-100 group-data-expanded:pt-4">
          <code className="block rounded-lg bg-background-soft-50 p-4 font-mono text-xs leading-6">
            {logs.map((log, i) => (
              <div
                key={i}
                className={log.ok ? "text-success-500" : "text-text-100"}
              >
                {log.text}
              </div>
            ))}
          </code>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
