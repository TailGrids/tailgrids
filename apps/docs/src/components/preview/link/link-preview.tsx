import { Link } from "@/registry/core/link";
import { ExternalLink } from "lucide-react";

export default function LinkPreview() {
  return (
    <Link href="#" variant="primary">
      External Link
      <ExternalLink />
    </Link>
  );
}
