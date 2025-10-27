import { Smile, Loader2, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface JokeData {
  setup?: string;
  delivery?: string;
  joke?: string;
  category: string;
}

export const JokeWidget = () => {
  const [joke, setJoke] = useState<JokeData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
      );
      const data = await response.json();
      setJoke(data);
    } catch (err) {
      // Fallback joke if API fails
      setJoke({
        joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
        category: "Programming",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Smile className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Daily Joke</h2>
        </div>
        {joke && (
          <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
            {joke.category}
          </span>
        )}
      </div>
      <div className="space-y-4">
        {loading ? (
          <div className="flex items-center justify-center min-h-[80px]">
            <Loader2 className="w-6 h-6 text-primary animate-spin" />
          </div>
        ) : (
          <div className="min-h-[80px] flex items-center">
            {joke?.setup ? (
              <div className="space-y-2">
                <p className="text-foreground leading-relaxed">{joke.setup}</p>
                <p className="text-foreground font-medium leading-relaxed">{joke.delivery}</p>
              </div>
            ) : (
              <p className="text-foreground leading-relaxed">{joke?.joke}</p>
            )}
          </div>
        )}
        <Button
          onClick={fetchJoke}
          variant="outline"
          className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 group"
          disabled={loading}
        >
          <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
          New Joke
        </Button>
      </div>
    </div>
  );
};
