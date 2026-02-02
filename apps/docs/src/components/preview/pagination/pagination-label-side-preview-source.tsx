"use client";

import Image from "next/image";

import labelOnlyVariantImg from "../../../../public/images/preview/pagination/label-only-side-variant.webp";
import PaginationLabelSidePreview from "./pagination-label-side-preview";

export default function PaginationLabelSidePreviewSource() {
  return (
    <>
      <Image
        src={labelOnlyVariantImg}
        alt="pagination"
        className="block sm:hidden size-full object-cover px-2"
      />

      <div className="w-full hidden sm:block">
        <PaginationLabelSidePreview />
      </div>
    </>
  );
}
