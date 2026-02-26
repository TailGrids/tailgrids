import { Badge } from "@/registry/core/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/registry/core/collapsible";

export default function CollapsibleOrderSummeryPreview() {
  return (
    <div className="w-full max-w-sm">
      <Collapsible>
        {/* Card header — always visible */}
        <div className="flex items-start justify-between p-5 pb-4 sm:px-6 sm:pt-6">
          <div>
            <p className="font-semibold text-title-50">Order #4291</p>
            <p className="mt-0.5 text-sm text-text-100">
              Feb 24, 2026 · $94.00
            </p>
          </div>
          <Badge color="success" size="sm">
            Shipped
          </Badge>
        </div>

        {/* Toggle row */}
        <CollapsibleTrigger className="border-t border-base-100 text-sm text-primary-500 data-expanded:border-b">
          Toggle order details
        </CollapsibleTrigger>

        {/* Expandable order items */}
        <CollapsibleContent className="group-data-expanded:border-t border-base-100 group-data-expanded:pt-4">
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center justify-between">
              <span className="text-text-100">TailGrids Pro License</span>
              <span className="font-medium text-title-50">$79.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-text-100">Icon Pack Bundle</span>
              <span className="font-medium text-title-50">$15.00</span>
            </li>
          </ul>
          <p className="mt-3 border-t border-base-100 pt-3 text-xs text-text-100">
            Delivered to 123 Market St, San Francisco CA 94103
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
