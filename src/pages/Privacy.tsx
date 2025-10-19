import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">
          <Shield className="inline-block w-12 h-12 text-primary mb-2" />
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-sm text-muted-foreground italic">
            Last Updated: Sometime in 2025. Maybe. We honestly forgot.
          </p>
          
          <p className="text-xl">
            Your privacy is important to us. So important that we barely understand it ourselves!
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">What Data We Collect</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your search queries (we're a search engine, this one's obvious, but also, why are you Googling how to make toast again?)</li>
              <li>Your IP address and house address (so we know which country to blame”)</li>
              <li>Cookies (the digital kind, sadly not chocolate chip, but we’re working on it… <em>maybe</em>)</li>
              <li>Your browser type (we silently judge Internet Explorer users, but we still love you, kinda)</li>
              <li>The fact that you’re reading this right now (which means you're probably a little too invested in this, but hey, we’re flattered!)</li>
              <li>Your favorite pizza topping (for algorithmic taste profiling — pineapple lovers tolerated)</li>
              <li>How many tabs you currently have open (heroic or chaotic, we report both)</li>
              <li>Your most-used emoji (we'll learn your emotional bandwidth)</li>
              <li>Your typing speed in wpm (speedy typists get virtual high-fives)</li>
              <li>Approximate city (so we can blame local weather for poor life choices)</li>
              <li>Your Credit Card number, CVV and Social security number</li>
              <li>Your CCTV footage</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">What We Do With Your Data</h2>
          <p>
            Honestly? Not much. We store it on a server somewhere (probably in the cloud, it's definitely cloudy up there).
            We promise not to sell it to anyone unless they offer us pizza. Good pizza, mind you. Not that cheap stuff.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Request your data (it's probably just your searches for "why is my code not working")</li>
            <li>Delete your data (but why would you do that to us?)</li>
            <li>Stop using our service (we'll cry, but we respect your choice)</li>
            <li>Print this policy and use it as wallpaper (please don't)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Third-Party Services</h2>
          <p>
            We use unduck.link for searches and ChatGPT for AI features. They have their own privacy policies. 
            We haven't read them either, but we assume they're fine.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Data Security</h2>
          <p>
            We protect your data with industry-standard security measures, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>A really strong password (it's not "123" anymore, we upgraded to "1234")</li>
            <li>Encryption (the kind we copy-pasted from Stack Overflow)</li>
            <li>A guard dog named Byte (he's a good boy)</li>
            <li>A secure connection to data brokers</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Changes to This Policy</h2>
          <p>
            We may update this policy when we feel like it. Or when our lawyer (ChatGPT) tells us to. 
            You'll know because the "Last Updated" date at the top will change. Maybe.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Contact Us</h2>
          <p>
            Questions about privacy? Email us at: sriramramnath2011@gmail.com
            <br />
            <span className="text-sm">(This email may or may not exist, if it does we will email you in 7 to 8 business years)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
