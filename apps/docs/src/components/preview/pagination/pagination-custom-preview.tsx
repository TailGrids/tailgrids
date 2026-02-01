"use client";

import { ArrowLeft, ArrowRight } from "@tailgrids/icons";
import { useState } from "react";

export default function PaginationCustomPreview() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-between w-full max-w-sm mx-auto">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 disabled:opacity-50 disabled:hover:bg-white"
        aria-label="Previous Page"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <span className="text-sm font-medium text-neutral-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 disabled:opacity-50 disabled:hover:bg-white"
        aria-label="Next Page"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
