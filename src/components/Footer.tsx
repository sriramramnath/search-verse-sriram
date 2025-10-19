export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="px-8 py-4">
        <div className="flex flex-wrap justify-between items-center text-sm gap-6">
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="We're definitely not evil">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="We'll sell ads... eventually">
              Advertising
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Enterprise solutions from a garage">
              Business
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2025 Sriram Dev Inc. • Built with questionable amounts of caffeine
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="We barely read it ourselves">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Written by an AI lawyer">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="There's only dark mode">
              Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
