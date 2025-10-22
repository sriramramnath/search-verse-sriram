import { useState, useEffect } from "react";
import { Clock as ClockIcon, Calendar } from "lucide-react";

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
        <h2 className="text-lg font-semibold">Time</h2>
      </div>
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-5xl font-bold text-foreground tracking-tight mb-1 tabular-nums">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider">
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
