import { Smile } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "I would tell you a UDP joke, but you might not get it. 📡",
  "There are 10 types of people in the world: those who understand binary and those who don't. 💻",
  "Why did the developer go broke? Because he used up all his cache! 💸",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem. 💡",
  "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺",
  "Why do Java developers wear glasses? Because they don't C#! 👓",
  "What's a programmer's favorite hangout place? Foo Bar! 🍻",
];

export const JokeWidget = () => {
  const [joke, setJoke] = useState(jokes[Math.floor(Math.random() * jokes.length)]);

  const getNewJoke = () => {
    let newJoke;
    do {
      newJoke = jokes[Math.floor(Math.random() * jokes.length)];
    } while (newJoke === joke && jokes.length > 1);
    setJoke(newJoke);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <Smile className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Daily Joke</h2>
      </div>
      <div className="space-y-4">
        <p className="text-foreground leading-relaxed min-h-[60px]">{joke}</p>
        <Button 
          onClick={getNewJoke} 
          variant="outline" 
          className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          Tell Me Another
        </Button>
      </div>
    </div>
  );
};
