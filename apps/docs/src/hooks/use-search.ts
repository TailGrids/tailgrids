import { MeiliSearch } from "meilisearch";
import { useEffect, useState } from "react";

const client = new MeiliSearch({
  host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST!,
  apiKey: process.env.NEXT_PUBLIC_MEILISEARCH_SEARCH_KEY!,
});

export interface SearchResultItem {
  id: string;
  type: "block" | "template" | "page";
  title: string;
  url: string;
  createdAt: string;
  tag?: string;
}

interface SearchResults {
  blocks: SearchResultItem[];
  templates: SearchResultItem[];
  pages: SearchResultItem[];
  docs: SearchResultItem[];
}

export const useSearch = (query: string) => {
  const [results, setResults] = useState<SearchResults>({
    blocks: [],
    templates: [],
    pages: [],
    docs: [],
  });

  useEffect(() => {
    // If query is empty, we still want to show initial results (or top results)
    const searchTerm = query.trim();

    const search = async () => {
      try {
        const response = await client.multiSearch({
          queries: [
            {
              indexUid: "tailgrids-v2-search",
              q: searchTerm,
              filter: "type = doc",
              limit: 5,
            },
            {
              indexUid: "tailgrids-v2-search",
              q: searchTerm,
              filter: "type = block",
              limit: 8,
            },
            {
              indexUid: "tailgrids-v2-search",
              q: searchTerm,
              filter: "type = template",
              limit: 6,
            },
            {
              indexUid: "tailgrids-v2-search",
              q: searchTerm,
              filter: "type = page",
              limit: 5,
            },
          ],
        });

        // Safe indexing with optional chaining/fallback
        setResults({
          docs:
            (response.results[0]?.hits as unknown as SearchResultItem[]) || [],
          blocks:
            (response.results[1]?.hits as unknown as SearchResultItem[]) || [],
          templates:
            (response.results[2]?.hits as unknown as SearchResultItem[]) || [],
          pages:
            (response.results[3]?.hits as unknown as SearchResultItem[]) || [],
        });
      } catch (error) {
        console.error("Meilisearch error:", error);
        // On error, we might want to keep previous results or clear them.
        // Clearing them is safer to avoid showing stale data.
        setResults({ docs: [], blocks: [], templates: [], pages: [] });
      }
    };

    search();
  }, [query]);

  return results;
};
