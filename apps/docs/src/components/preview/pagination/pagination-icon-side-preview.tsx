"use client";

import { Pagination } from "@/registry/core/pagination";
import { useState } from "react";

export default function PaginationIconSidePreview() {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Navigating to page ${page}`);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      sideLayout="icon"
      onPageChange={handlePageChange}
    />
  );
}
