import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";

export default function LabelPreview() {
  return (
    <div className="w-sm flex items-center justify-between gap-2">
      <Label htmlFor="email" className="shrink-0">
        Email Address:
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full"
      />
    </div>
  );
}
