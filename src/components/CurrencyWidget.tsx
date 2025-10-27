import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

interface ExchangeRate {
  currency: string;
  rate: number;
  change: number;
}

export const CurrencyWidget = () => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState<ExchangeRate[]>([
    { currency: "EUR", rate: 0.92, change: 0.5 },
    { currency: "GBP", rate: 0.79, change: -0.3 },
    { currency: "JPY", rate: 149.82, change: 1.2 },
    { currency: "INR", rate: 83.25, change: 0.8 },
  ]);

  const convertedAmount = (parseFloat(amount) || 0) * (rates.find(r => r.currency === toCurrency)?.rate || 1);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Currency Converter</h2>
      </div>

      {/* Converter */}
      <div className="space-y-4 mb-6">
        <div className="flex gap-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 bg-background/50 border border-border/50 rounded-lg px-3 py-2">
            <p className="text-lg font-semibold">{convertedAmount.toFixed(2)}</p>
          </div>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="bg-background border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>

      {/* Exchange Rates */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Live Rates (USD)</p>
        {rates.map((rate) => (
          <div
            key={rate.currency}
            className="flex items-center justify-between p-3 rounded-lg bg-background/30 border border-border/50"
          >
            <div>
              <p className="font-medium">{rate.currency}</p>
              <p className="text-sm text-muted-foreground">{rate.rate.toFixed(4)}</p>
            </div>
            <div className={`flex items-center gap-1 ${rate.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {rate.change >= 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="text-sm">{Math.abs(rate.change)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
