import { Badge } from "@/registry/core/badge";
import { CheckMark, CheckMarkCircle, Info } from "@tailgrids/icons";

export default function BadgePreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge prefixIcon={<CheckMarkCircle />}>Verified</Badge>
      <Badge color="success" prefixIcon={<CheckMark />}>
        Active
      </Badge>
      <Badge color="warning" prefixIcon={<Info />}>
        Pending
      </Badge>
    </div>
  );
}
