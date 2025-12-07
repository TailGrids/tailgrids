import { Badge } from "@/registry/core/badge";
import { Check, CheckCircle1, InfoCircle } from "@tailgrids/icons";

export default function BadgePreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge prefixIcon={<CheckCircle1 />}>Verified</Badge>
      <Badge color="success" prefixIcon={<Check />}>
        Active
      </Badge>
      <Badge color="warning" prefixIcon={<InfoCircle />}>
        Pending
      </Badge>
    </div>
  );
}
