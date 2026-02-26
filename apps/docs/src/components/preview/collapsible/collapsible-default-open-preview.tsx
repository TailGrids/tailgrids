import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/registry/core/collapsible";

export default function CollapsibleDefaultOpenPreview() {
  return (
    <Collapsible defaultExpanded>
      <CollapsibleTrigger>
        Custom Domain
        <span className="rounded-full bg-alert-success-background px-2.5 py-0.5 text-xs font-medium text-alert-success-title">
          Active
        </span>
      </CollapsibleTrigger>

      <CollapsibleContent className="group-data-expanded:border-t border-base-100 group-data-expanded:pt-4">
        <div className="space-y-2 text-sm">
          {[
            { label: "Type", value: "CNAME" },
            { label: "Name", value: "app.yourdomain.com" },
            { label: "Value", value: "cname.tailgrids.com" }
          ].map(row => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-lg bg-background-soft-50 px-3 py-2"
            >
              <span className="text-text-100">{row.label}</span>
              <code className="block font-mono text-xs text-title-50">
                {row.value}
              </code>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
