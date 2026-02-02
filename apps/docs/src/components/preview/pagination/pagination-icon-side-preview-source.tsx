"use client";

import Image from "next/image";

import iconOnlyVariantImg from "../../../../public/images/preview/pagination/icon-only-side-variant.webp";
import PaginationIconSidePreview from "./pagination-icon-side-preview";

export default function PaginationFullSidePreviewSource() {
  return (
    <>
      <Image
        src={iconOnlyVariantImg}
        alt="pagination"
        className="block sm:hidden size-full object-cover px-2"
      />

      <div className="w-full hidden sm:block">
        <PaginationIconSidePreview />
      </div>
    </>
  );
}
