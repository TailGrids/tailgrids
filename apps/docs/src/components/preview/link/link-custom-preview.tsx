import { Link } from "@/registry/core/link";
import { ArrowRight, Download1, Globe2 } from "@tailgrids/icons";

export default function LinkCustomPreview() {
  return (
    <div className="flex flex-wrap gap-6">
      <Link variant="primary" size="md" href="#">
        Read Documentation
        <ArrowRight />
      </Link>

      <Link variant="dark" size="md" href="#">
        <Download1 />
        Download Files
      </Link>

      <Link variant="primary" size="sm" href="#">
        <Globe2 />
        View Online
        <ArrowRight />
      </Link>
    </div>
  );
}
