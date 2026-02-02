"use client";

import Image from "next/image";

import fullSideVariantImg from "../../../../public/images/preview/pagination/full-side-variant.webp";
import PaginationFullSidePreview from "./pagination-full-side-preview";

export default function PaginationFullSidePreviewSource() {
  return (
    <>
      <Image
        src={fullSideVariantImg}
        alt="pagination"
        className="block sm:hidden size-full object-cover px-2"
      />

      <div className="w-full hidden sm:block">
        <PaginationFullSidePreview />
      </div>
    </>
  );
}
