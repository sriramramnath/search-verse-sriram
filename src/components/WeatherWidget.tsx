import { Cloud, CloudRain, Sun, Wind } from "lucide-react";
import { useState, useEffect } from "react";

const weatherConditions = [
  { condition: "Sunny", icon: Sun, temp: 72, desc: "Perfect day for existential dread" },
  { condition: "Cloudy", icon: Cloud, temp: 65, desc: "The sky is having second thoughts" },
  { condition: "Rainy", icon: CloudRain, temp: 58, desc: "Nature's way of crying for us" },
  { condition: "Windy", icon: Wind, temp: 68, desc: "Air is just showing off" },
];

export const WeatherWidget = () => {
  const [weather, setWeather] = useState(weatherConditions[0]);

  useEffect(() => {
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    setWeather(randomWeather);
  }, []);

  const WeatherIcon = weather.icon;

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <WeatherIcon className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Weather</h2>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">{weather.temp}°F</span>
          <WeatherIcon className="w-12 h-12 text-muted-foreground" />
        </div>
        <div className="text-lg text-foreground">{weather.condition}</div>
        <div className="text-sm text-muted-foreground italic">{weather.desc}</div>
        <div className="text-xs text-muted-foreground mt-2">📍 Your Mom's House</div>
      </div>
    </div>
  );
};
