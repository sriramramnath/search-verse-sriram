import { Search, Sparkles } from "lucide-react";
import { useState, FormEvent, KeyboardEvent } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent, useAI = false) => {
    e.preventDefault();
    if (query.trim()) {
      const searchUrl = useAI 
        ? `https://chatgpt.com/?q=${encodeURIComponent(query)}`
        : `https://unduck.link?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      handleSearch(e as any, true);
    }
  };

  return (
    <div className="w-full max-w-[584px] mx-auto">
      <form onSubmit={handleSearch} className="relative group">
        <div className="relative flex items-center bg-input border border-border rounded-full px-4 py-3 transition-shadow duration-200 hover:shadow-[var(--search-hover-shadow)] shadow-[var(--search-shadow)]">
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground text-base"
            placeholder="Search the web... (Shift+Enter for AI)"
            autoFocus
          />
        </div>
        
        <div className="flex gap-3 justify-center mt-8">
          <button
            type="submit"
            className="px-6 py-2.5 bg-secondary hover:bg-muted text-foreground rounded border border-border transition-all duration-150 hover:border-primary text-sm font-medium"
          >
            Search
          </button>
          <button
            type="button"
            onClick={(e) => handleSearch(e, true)}
            className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded border border-primary transition-all duration-150 text-sm font-medium flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Ask AI
          </button>
        </div>
      </form>
    </div>
  );
};
