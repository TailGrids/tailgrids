import { Link } from "@/registry/core/link";
import { ArrowRight, Download, Globe } from "lucide-react";

export default function LinkCustomPreview() {
  return (
    <div className="flex flex-wrap gap-6">
      <Link variant="primary" size="md" href="#">
        Read Documentation
        <ArrowRight />
      </Link>

      <Link variant="dark" size="md" href="#">
        <Download />
        Download Files
      </Link>

      <Link variant="primary" size="sm" href="#">
        <Globe />
        View Online
        <ArrowRight />
      </Link>
    </div>
  );
}
