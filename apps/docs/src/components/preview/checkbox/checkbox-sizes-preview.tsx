import { Checkbox } from "@/registry/core/checkbox";

export default function CheckboxSizesPreview() {
  return (
    <div className="flex items-center gap-6">
      <Checkbox size="sm" defaultChecked />
      <Checkbox size="md" defaultChecked />
    </div>
  );
}
