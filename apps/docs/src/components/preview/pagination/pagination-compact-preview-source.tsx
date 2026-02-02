"use client";

import Image from "next/image";

import compactVariantImg from "../../../../public/images/preview/pagination/compact-variant.webp";
import PaginationCompactPreview from "./pagination-compact-preview";

export default function PaginationCompactPreviewSource() {
  return (
    <>
      <Image
        src={compactVariantImg}
        alt="pagination"
        className="block sm:hidden size-full object-cover px-2"
      />

      <div className="hidden sm:block">
        <PaginationCompactPreview />
      </div>
    </>
  );
}
