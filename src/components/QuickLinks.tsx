import { Mail, Github, Newspaper, Coffee } from "lucide-react";

const links = [
  { name: "Email", icon: Mail, url: "mailto:sriram@dev.com", color: "hover:text-primary" },
  { name: "GitHub", icon: Github, url: "https://github.com", color: "hover:text-primary" },
  { name: "News", icon: Newspaper, url: "#", color: "hover:text-primary" },
  { name: "Coffee", icon: Coffee, url: "#", color: "hover:text-primary" },
];

export const QuickLinks = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
      <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg bg-background/50 transition-all ${link.color} hover:bg-primary/10 border border-border/50`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm">{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
