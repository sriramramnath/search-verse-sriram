import { TrendingUp, TrendingDown, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  name: string;
}

const POPULAR_STOCKS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];

export const StockWidget = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // Using Yahoo Finance via a free proxy (no API key needed for demo)
        // Note: For production, you'll want to use a proper API with authentication
        const stockPromises = POPULAR_STOCKS.map(async (symbol) => {
          try {
            const response = await fetch(
              `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`
            );
            const data = await response.json();
            const quote = data.chart.result[0];
            const meta = quote.meta;
            const currentPrice = meta.regularMarketPrice;
            const previousClose = meta.chartPreviousClose;
            const change = currentPrice - previousClose;
            const changePercent = (change / previousClose) * 100;

            return {
              symbol,
              price: currentPrice,
              change,
              changePercent,
              name: meta.longName || symbol,
            };
          } catch {
            // Fallback data if fetch fails
            return null;
          }
        });

        const results = await Promise.all(stockPromises);
        const validStocks = results.filter((s): s is StockData => s !== null);
        setStocks(validStocks);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchStocks();
    const refreshInterval = setInterval(fetchStocks, 60000); // Refresh every minute

    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    if (stocks.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % stocks.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [stocks.length]);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
        <div className="flex items-center justify-center h-full min-h-[180px]">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      </div>
    );
  }

  if (stocks.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
        <div className="flex items-center justify-center h-full min-h-[180px] text-muted-foreground">
          Stock data unavailable
        </div>
      </div>
    );
  }

  const currentStock = stocks[currentIndex];
  const isUp = currentStock.change >= 0;

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        {isUp ? (
          <TrendingUp className="w-5 h-5 text-green-400" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-400" />
        )}
        <h2 className="text-lg font-semibold">Market</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">${currentStock.price.toFixed(2)}</span>
          <span className={`text-sm flex items-center gap-1 font-medium ${isUp ? 'text-green-400' : 'text-red-400'}`}>
            {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {isUp ? '+' : ''}{currentStock.change.toFixed(2)} ({isUp ? '+' : ''}{currentStock.changePercent.toFixed(2)}%)
          </span>
        </div>
        <div className="space-y-1">
          <div className="text-lg font-semibold text-foreground">{currentStock.symbol}</div>
          <div className="text-sm text-muted-foreground line-clamp-1">{currentStock.name}</div>
        </div>
        
        <div className="pt-3 border-t border-border">
          <div className="flex gap-1">
            {stocks.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
