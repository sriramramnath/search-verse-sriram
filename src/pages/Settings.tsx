import { ArrowLeft, Settings as SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">
          <SettingsIcon className="inline-block w-12 h-12 text-primary mb-2" />
          Settings
        </h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-xl">
            Customize your Search Verse experience! (Just kidding, there's only dark mode)
          </p>
          
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-3">Appearance</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Dark Mode</p>
                    <p className="text-sm">Always on. No choice. Deal with it. 😎</p>
                  </div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded">ON</div>
                </div>
                
                <div className="flex items-center justify-between opacity-50">
                  <div>
                    <p className="text-foreground font-medium">Light Mode</p>
                    <p className="text-sm">Unavailable (our eyes hurt just thinking about it)</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-muted-foreground rounded">OFF</div>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-3">Search Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Default Search Engine</p>
                    <p className="text-sm">Unduck.link (because we like ducks, but not too much)</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-foreground rounded">Fixed</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">AI Assistant</p>
                    <p className="text-sm">ChatGPT (shift+enter to use)</p>
                  </div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded">Enabled</div>
                </div>
                
                <div className="flex items-center justify-between opacity-50">
                  <div>
                    <p className="text-foreground font-medium">Safe Search</p>
                    <p className="text-sm">Not our problem, that's unduck's job</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-muted-foreground rounded">¯\_(ツ)_/¯</div>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-3">Privacy Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Search History</p>
                    <p className="text-sm">We don't track it (we're too lazy)</p>
                  </div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded">Disabled</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Cookies</p>
                    <p className="text-sm">The website kind, still no chocolate chip</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-foreground rounded">Minimal</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium">Data Collection</p>
                    <p className="text-sm">We collect dust, mostly</p>
                  </div>
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded">Minimal</div>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-3">Advanced Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between opacity-50">
                  <div>
                    <p className="text-foreground font-medium">Developer Mode</p>
                    <p className="text-sm">You're looking at it. This whole thing IS developer mode.</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-muted-foreground rounded">Always On</div>
                </div>
                
                <div className="flex items-center justify-between opacity-50">
                  <div>
                    <p className="text-foreground font-medium">Experimental Features</p>
                    <p className="text-sm">Everything here is experimental</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-muted-foreground rounded">Yes</div>
                </div>
                
                <div className="flex items-center justify-between opacity-50">
                  <div>
                    <p className="text-foreground font-medium">Beta Access</p>
                    <p className="text-sm">This entire site is in permanent beta</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-muted-foreground rounded">Granted</div>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-3">Account Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between opacity-50">
                  <div>
                    <p className="text-foreground font-medium">Account</p>
                    <p className="text-sm">We don't have accounts. You're free! Like a bird! 🐦</p>
                  </div>
                  <div className="px-4 py-2 bg-muted text-muted-foreground rounded">N/A</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm">
              Looking for more settings? So are we. If you find them, let us know.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
