import { useState, useEffect } from "react";
import { Clock as ClockIcon, Calendar, Cloud, CloudRain, Sun, Wind, MapPin, Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface WeatherData {
  temp: number;
  condition: string;
  location: string;
  humidity: number;
  windSpeed: number;
}

export const TimeWeatherWidget = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [city, setCity] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchWeather = async (cityName: string) => {
    if (!cityName.trim()) return;
    
    setLoadingWeather(true);
    try {
      const geocodeResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      );
      const geocodeData = await geocodeResponse.json();

      if (!geocodeData.results || geocodeData.results.length === 0) {
        setLoadingWeather(false);
        return;
      }

      const { latitude, longitude, name } = geocodeData.results[0];

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=celsius&wind_speed_unit=kmh&timezone=auto`
      );

      if (!response.ok) throw new Error("Failed to fetch weather");

      const data = await response.json();

      setWeather({
        temp: Math.round(data.current.temperature_2m),
        condition: getWeatherCondition(data.current.weather_code),
        location: name,
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
      });
      setLoadingWeather(false);
    } catch (err) {
      setLoadingWeather(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const getWeatherCondition = (code: number): string => {
    if (code === 0) return "Clear";
    if (code <= 3) return "Partly Cloudy";
    if (code <= 48) return "Foggy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    if (code <= 82) return "Rainy";
    if (code <= 86) return "Snowy";
    return "Stormy";
  };

  const getWeatherIcon = (condition: string) => {
    if (condition.includes("Clear")) return Sun;
    if (condition.includes("Rain")) return CloudRain;
    if (condition.includes("Cloud")) return Cloud;
    return Wind;
  };

  const WeatherIcon = weather ? getWeatherIcon(weather.condition) : Cloud;

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <ClockIcon className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Time & Weather</h2>
      </div>
      
      <div className="space-y-6">
        {/* Time Section */}
        <div className="text-center pb-6 border-b border-border">
          <div className="text-6xl font-bold text-foreground tracking-tight mb-2 tabular-nums">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Weather Section */}
        <div className="space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={loadingWeather}>
              {loadingWeather ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </Button>
          </form>

          {weather ? (
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-5xl font-bold text-foreground">{weather.temp}°C</div>
                  <div className="text-lg text-muted-foreground mt-1">{weather.condition}</div>
                </div>
                <WeatherIcon className="w-16 h-16 text-primary/20" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="bg-secondary/50 rounded-lg p-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Humidity</span>
                  <div className="text-xl font-semibold mt-1">{weather.humidity}%</div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Wind</span>
                  <div className="text-xl font-semibold mt-1">{weather.windSpeed} km/h</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-3 border-t border-border">
                <MapPin className="w-4 h-4" />
                <span>{weather.location}</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8 bg-secondary/30 rounded-lg">
              Enter a city to see weather
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
