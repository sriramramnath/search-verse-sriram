import { useState, useEffect } from "react";
import { Clock as ClockIcon } from "lucide-react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <ClockIcon className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Current Time</h2>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-foreground mb-2">
          {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
        <div className="text-muted-foreground">
          {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
};
