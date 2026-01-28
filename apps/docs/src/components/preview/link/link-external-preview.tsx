import { Link } from "@/registry/core/link";
import { ExternalLink } from "lucide-react";

export default function LinkExternalPreview() {
  return (
    <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
      Visit Website
      <ExternalLink />
    </Link>
  );
}
