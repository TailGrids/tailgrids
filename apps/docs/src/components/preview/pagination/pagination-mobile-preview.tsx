"use client";

import { cn } from "@/utils/cn";
import { ArrowLeft, ArrowRight } from "@tailgrids/icons";
import { useState } from "react";

export default function PaginationMobilePreview() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm items-center justify-between">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg border border-button-outline-border bg-button-outline-background text-button-outline-text outline-none transition hover:bg-button-outline-hover-background hover:text-button-outline-hover-text focus:ring-3 focus:ring-button-outline-focus-ring disabled:bg-button-outline-disabled-background disabled:border-button-disabled-border disabled:text-button-outline-disabled-text"
        )}
        aria-label="Previous Page"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <span className="text-sm font-medium text-text-50">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg border border-button-outline-border bg-button-outline-background text-button-outline-text outline-none transition hover:bg-button-outline-hover-background hover:text-button-outline-hover-text focus:ring-3 focus:ring-button-outline-focus-ring disabled:bg-button-outline-disabled-background disabled:border-button-disabled-border disabled:text-button-outline-disabled-text"
        )}
        aria-label="Next Page"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
