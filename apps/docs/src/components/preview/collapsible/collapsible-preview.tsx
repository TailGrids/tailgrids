import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/registry/core/collapsible";

export default function CollapsiblePreview() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Click to expand</CollapsibleTrigger>
      <CollapsibleContent>
        <p className="text-sm text-text-100">
          This is the content of the collapsible. It can be any React node and
          will be shown or hidden when the trigger is clicked.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
