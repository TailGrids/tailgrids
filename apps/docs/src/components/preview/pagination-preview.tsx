"use client";

import { Pagination } from "@/registry/core/pagination";
import { useState } from "react";

export default function PaginationPreview() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 15;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Navigating to page ${page}`);
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full p-4">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        variant="default"
        sideLayout="full"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        variant="compact"
        sideLayout="icon"
      />
    </div>
  );
}
