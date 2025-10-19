import { ArrowLeft, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">
          <Briefcase className="inline-block w-12 h-12 text-primary mb-2" />
          Business Solutions
        </h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-xl">
            Enterprise search solutions from a company that definitely has its act together. (Narrator: They didn't.)
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">What We Offer</h2>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><strong className="text-foreground">Search-as-a-Service</strong> - We search. You pay. It's that simple.</li>
            <li><strong className="text-foreground">AI Integration</strong> - Powered by vibes and whatever model we could afford this month</li>
            <li><strong className="text-foreground">24/7 Support</strong> - Our answering machine is very reliable</li>
            <li><strong className="text-foreground">Enterprise Security</strong> - We use the same password for everything: "123" or "1234"</li>
            <li><strong className="text-foreground">Scalability</strong> - We can scale from 5 users to 6 users with minimal downtime</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Why Fortune 500 Companies Trust Us</h2>
          <p>
            They don't. But we're working on it! Our pitch deck has some really nice fonts though.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Case Studies</h2>
          <div className="border border-border rounded-lg p-6 bg-card space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">StartupBro Inc.</h3>
              <p>"They helped us find... things. On the internet. I think?" - CEO who definitely exists</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Mega Corporation LLC</h3>
              <p>"We accidentally signed up thinking this was Google. We're still here though." - Anonymous</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Unlimited Money Corporation PVT LTD.</h3>
              <p>"Search Verse found our money!" - John Johnson, CEO UMC group.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Get In Touch</h2>
          <p>
            Email us at: sriramramnath2011@gmail.com
            <br />
            <span className="text-sm">(We'll get back to you within 3-5 business years (or) decades)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Business;
