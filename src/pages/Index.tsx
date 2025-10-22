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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
