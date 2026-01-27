import { Badge } from "@/registry/core/badge";

export default function BadgeCustom() {
  return (
    <div className="flex items-center gap-4">
      <Badge className="border border-primary-500 bg-transparent text-primary-500">
        Outline Badge
      </Badge>
      <Badge className="rounded-none bg-neutral-900 text-white">
        Square Badge
      </Badge>
      <Badge className="bg-linear-to-r from-blue-500 to-purple-500 text-white">
        Gradient Badge
      </Badge>
    </div>
  );
}
