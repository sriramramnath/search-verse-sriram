import { Music, Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { useState } from "react";

export const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playlists = [
    { name: "Focus Flow", tracks: 42 },
    { name: "Chill Vibes", tracks: 38 },
    { name: "Workout Mix", tracks: 55 },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Music className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Music</h2>
      </div>

      <div className="space-y-4">
        {/* Current Track Display */}
        <div className="bg-background/50 rounded-lg p-4 border border-border/50">
          <p className="text-sm text-muted-foreground mb-1">Now Playing</p>
          <p className="font-semibold mb-3">Focus Music</p>
          
          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4">
            <button className="hover:text-primary transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-primary hover:bg-primary/90 rounded-full p-3 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>
            <button className="hover:text-primary transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Playlists */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Quick Access</p>
          {playlists.map((playlist) => (
            <button
              key={playlist.name}
              className="w-full text-left p-3 rounded-lg bg-background/30 hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all"
            >
              <p className="font-medium text-sm">{playlist.name}</p>
              <p className="text-xs text-muted-foreground">{playlist.tracks} tracks</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
