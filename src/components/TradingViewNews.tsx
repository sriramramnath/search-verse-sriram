import { useEffect, useRef } from "react";
import { Newspaper } from "lucide-react";

export const TradingViewNews = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      displayMode: "regular",
      feedMode: "all_symbols",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      width: "100%",
      height: 550,
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all shadow-lg">
      <div className="flex items-center gap-2 p-6 border-b border-border">
        <Newspaper className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Market News</h2>
      </div>
      <div className="tradingview-widget-container">
        <div ref={containerRef} className="tradingview-widget-container__widget" />
      </div>
    </div>
  );
};
