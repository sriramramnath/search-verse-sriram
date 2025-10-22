import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { Footer } from "@/components/Footer";
import { Clock } from "@/components/Clock";
import { WeatherWidget } from "@/components/WeatherWidget";
import { StockWidget } from "@/components/StockWidget";
import { JokeWidget } from "@/components/JokeWidget";
import { QuickLinks } from "@/components/QuickLinks";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      <main className="flex-1 px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Logo and Search */}
          <div className="text-center space-y-6">
            <Logo />
            <SearchBar />
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Clock />
            <WeatherWidget />
            <StockWidget />
            <JokeWidget />
            <QuickLinks />
            
            {/* Fun Stats Widget */}
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
              <h2 className="text-lg font-semibold mb-4">Today's Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coffee consumed:</span>
                  <span className="font-semibold text-primary">∞</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bugs fixed:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bugs created:</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stack Overflow visits:</span>
                  <span className="font-semibold">420</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
