"use client";

import Image from "next/image";

import defaultVariantImg from "../../../../public/images/preview/pagination/default-variant.webp";
import PaginationDefaultPreview from "./pagination-default-preview";

export default function PaginationDefaultPreviewSource() {
  return (
    <>
      <Image
        src={defaultVariantImg}
        alt="pagination"
        className="block sm:hidden size-full object-cover px-2"
      />

      <div className="hidden sm:block pr-4">
        <PaginationDefaultPreview />
      </div>
    </>
  );
}
