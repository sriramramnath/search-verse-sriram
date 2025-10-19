import { Search } from "lucide-react";
import { useState, FormEvent } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent, lucky = false) => {
    e.preventDefault();
    if (query.trim()) {
      const searchUrl = `https://unduck.link?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  };

  return (
    <div className="w-full max-w-[584px] mx-auto">
      <form onSubmit={handleSearch} className="relative group">
        <div className="relative flex items-center bg-background border border-border rounded-full px-4 py-3 transition-shadow duration-200 hover:shadow-[var(--search-hover-shadow)] shadow-[var(--search-shadow)]">
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-foreground text-base"
            placeholder="Search the web..."
            autoFocus
          />
        </div>
        
        <div className="flex gap-3 justify-center mt-8">
          <button
            type="submit"
            className="px-6 py-2.5 bg-secondary hover:bg-accent text-foreground rounded-md border border-border transition-all duration-150 hover:shadow-sm text-sm font-medium"
          >
            Search
          </button>
          <button
            type="button"
            onClick={(e) => handleSearch(e, true)}
            className="px-6 py-2.5 bg-secondary hover:bg-accent text-foreground rounded-md border border-border transition-all duration-150 hover:shadow-sm text-sm font-medium"
          >
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
};
