export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-secondary border-t border-border">
      <div className="px-8 py-3">
        <div className="flex flex-wrap justify-between items-center text-sm text-muted-foreground gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
