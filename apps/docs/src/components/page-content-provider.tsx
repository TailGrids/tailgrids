"use client";

import React, { createContext, useContext } from "react";

const PageContentContext = createContext<string | undefined>(undefined);

export function PageContentProvider({
  content,
  children
}: {
  content: string;
  children: React.ReactNode;
}) {
  return (
    <PageContentContext.Provider value={content}>
      {children}
    </PageContentContext.Provider>
  );
}

export function usePageContent() {
  const context = useContext(PageContentContext);
  if (context === undefined) {
    throw new Error("usePageContent must be used within a PageContentProvider");
  }
  return context;
}
