import { Link } from "@/registry/core/link";
import { Link1AngularRight } from "@tailgrids/icons";

export default function LinkPreview() {
  return (
    <Link href="#" variant="primary">
      External Link
      <Link1AngularRight />
    </Link>
  );
}
