import { Cloud, CloudRain, Sun, Wind, MapPin, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface WeatherData {
  temp: number;
  condition: string;
  location: string;
  humidity: number;
  windSpeed: number;
}

export const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Get user's location
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        // Fetch weather data from Open-Meteo (free, no API key needed)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`
        );

        if (!response.ok) throw new Error("Failed to fetch weather");

        const data = await response.json();

        // Fetch location name using reverse geocoding
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
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch weather data");
        setLoading(false);
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

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
        <div className="flex items-center justify-center h-full min-h-[180px]">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
        <div className="flex items-center justify-center h-full min-h-[180px] text-muted-foreground">
          {error || "Weather data unavailable"}
        </div>
      </div>
    );
  }

  const WeatherIcon = getWeatherIcon(weather.condition);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <WeatherIcon className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Weather</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-4xl font-bold">{weather.temp}°F</div>
            <div className="text-lg text-foreground mt-1">{weather.condition}</div>
          </div>
          <WeatherIcon className="w-16 h-16 text-muted-foreground/30" />
        </div>
        
        <div className="pt-3 border-t border-border space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Humidity</span>
            <span className="font-medium">{weather.humidity}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Wind Speed</span>
            <span className="font-medium">{weather.windSpeed} mph</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2">
          <MapPin className="w-3 h-3" />
          <span>{weather.location}</span>
        </div>
      </div>
    </div>
  );
};
