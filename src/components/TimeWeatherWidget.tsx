import { useState, useEffect } from "react";
import { Clock as ClockIcon, Calendar, Cloud, CloudRain, Sun, Wind, MapPin, Loader2 } from "lucide-react";

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
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=celsius&wind_speed_unit=kmh&timezone=auto`
        );

        if (!response.ok) throw new Error("Failed to fetch weather");

        const data = await response.json();

        const locationResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?latitude=${latitude}&longitude=${longitude}&count=1`
        );
        const locationData = await locationResponse.json();
        const locationName = locationData.results?.[0]?.name || "Your Location";

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition: getWeatherCondition(data.current.weather_code),
          location: locationName,
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m),
        });
        setLoadingWeather(false);
      } catch (err) {
        setLoadingWeather(false);
      }
    };

    fetchWeather();
  }, []);

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
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <ClockIcon className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Time & Weather</h2>
      </div>
      
      <div className="space-y-4">
        {/* Time Section */}
        <div className="text-center pb-4 border-b border-border">
          <div className="text-5xl font-bold text-foreground tracking-tight mb-1 tabular-nums">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider">
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mt-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
              {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Weather Section */}
        {loadingWeather ? (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="w-6 h-6 text-primary animate-spin" />
          </div>
        ) : weather ? (
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-4xl font-bold">{weather.temp}°C</div>
                <div className="text-lg text-foreground mt-1">{weather.condition}</div>
              </div>
              <WeatherIcon className="w-14 h-14 text-muted-foreground/30" />
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Humidity</span>
                <div className="font-medium">{weather.humidity}%</div>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Wind</span>
                <div className="font-medium">{weather.windSpeed} km/h</div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t border-border">
              <MapPin className="w-3 h-3" />
              <span>{weather.location}</span>
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-6">
            Weather unavailable
          </div>
        )}
      </div>
    </div>
  );
};
