import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="absolute bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="px-8 py-4">
        <div className="flex flex-wrap justify-between items-center text-sm gap-6">
          <div className="flex gap-8">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors" title="We're definitely not evil">
              About
            </Link>
            <Link to="/advertising" className="text-muted-foreground hover:text-primary transition-colors" title="We'll sell ads... eventually">
              Advertising
            </Link>
            <Link to="/business" className="text-muted-foreground hover:text-primary transition-colors" title="Enterprise solutions from a garage">
              Business
            </Link>
          </div>
          
          <div className="flex gap-8">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors" title="We barely read it ourselves">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors" title="Written by an AI lawyer">
              Terms
            </Link>
            <Link to="/settings" className="text-muted-foreground hover:text-primary transition-colors" title="There's only dark mode">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};