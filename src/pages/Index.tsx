import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        <Logo />
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
