import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full border-t border-border bg-card/95 backdrop-blur-sm py-3 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-border">|</span>
          <Link to="/advertising" className="hover:text-primary transition-colors">
            Advertising
          </Link>
          <span className="text-border">|</span>
          <Link to="/business" className="hover:text-primary transition-colors">
            Business
          </Link>
          <span className="text-border">|</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <span className="text-border">|</span>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <span className="text-border">|</span>
          <Link to="/settings" className="hover:text-primary transition-colors">
            Settings
          </Link>
        </div>
        <div className="text-center mt-2 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Sriram Dev Inc.
        </div>
      </div>
    </footer>
  );
};