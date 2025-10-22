import { TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

const stocks = [
  { symbol: "SRIRAM", price: 420.69, change: 13.37, isUp: true, name: "Sriram Dev Inc." },
  { symbol: "MEME", price: 69.42, change: -4.20, isUp: false, name: "Meme Stock ETF" },
  { symbol: "HODL", price: 1337.00, change: 42.00, isUp: true, name: "Diamond Hands Corp" },
];

export const StockWidget = () => {
  const [currentStock, setCurrentStock] = useState(stocks[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomStock = stocks[Math.floor(Math.random() * stocks.length)];
      setCurrentStock(randomStock);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        {currentStock.isUp ? (
          <TrendingUp className="w-5 h-5 text-primary" />
        ) : (
          <TrendingDown className="w-5 h-5 text-primary" />
        )}
        <h2 className="text-lg font-semibold">Stocks</h2>
      </div>
      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">${currentStock.price}</span>
          <span className={`text-sm flex items-center gap-1 ${currentStock.isUp ? 'text-green-400' : 'text-red-400'}`}>
            {currentStock.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {currentStock.isUp ? '+' : ''}{currentStock.change}
          </span>
        </div>
        <div className="text-lg font-semibold text-foreground">{currentStock.symbol}</div>
        <div className="text-sm text-muted-foreground">{currentStock.name}</div>
        <div className="text-xs text-muted-foreground italic mt-2">
          {currentStock.isUp ? "📈 To the moon!" : "📉 Buy the dip, they said..."}
        </div>
      </div>
    </div>
  );
};
