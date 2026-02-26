import { Link } from "@/registry/core/link";
import { Link1AngularRight } from "@tailgrids/icons";

export default function LinkExternalPreview() {
  return (
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      Visit Website
      <Link1AngularRight />
    </Link>
  );
}
