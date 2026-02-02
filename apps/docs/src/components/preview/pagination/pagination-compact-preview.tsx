"use client";

import { Pagination } from "@/registry/core/pagination";
import { useState } from "react";

export default function PaginationCompactPreview() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 15;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      variant="compact"
      onPageChange={handlePageChange}
    />
  );
}
