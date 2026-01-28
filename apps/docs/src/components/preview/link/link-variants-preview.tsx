import { Link } from "@/registry/core/link";

export default function LinkVariantsPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link variant="primary" href="#">
        Primary Link
      </Link>

      <Link variant="dark" href="#">
        Dark Link
      </Link>
    </div>
  );
}
