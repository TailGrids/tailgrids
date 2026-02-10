import { Badge } from "@/registry/core/badge";

export default function BadgeCustom() {
  return (
    <div className="flex items-center gap-4">
      <Badge className="border border-primary-500 bg-transparent text-primary-500">
        Outline Badge
      </Badge>
      <Badge className="rounded-none bg-foreground-50 text-white-100">
        Square Badge
      </Badge>
      <Badge className="bg-linear-to-r from-primary-500 to-badge-purple-icon-color text-white-100">
        Gradient Badge
      </Badge>
    </div>
  );
}
