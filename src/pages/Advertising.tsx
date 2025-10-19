import { ArrowLeft, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Advertising = () => {
  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">
          <DollarSign className="inline-block w-12 h-12 text-primary mb-2" />
          Advertising
        </h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-xl">
            Want to advertise with us? Great! We accept payment in exposure, good vibes, and cryptocurrency we don't understand.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Advertising Philosophy</h2>
          <p>
            We believe in ads that don't make you want to throw your computer out the window. 
            Unfortunately, those don't pay well, so we're still working on that part.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Advertising Packages</h2>
          <div className="space-y-4 ml-4">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold text-primary mb-2">Basic Package - $0.99</h3>
              <p>Your ad appears once. To one person. Maybe. We can't promise anything.</p>
            </div>
            
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold text-primary mb-2">Premium Package - $9,999.99</h3>
              <p>Your ad appears to our entire user base of... checking notes... approximately 7 people. Plus one cat that walks across the keyboard sometimes.</p>
            </div>
            
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold text-primary mb-2">Enterprise Package - 78% of your company</h3>
              <p>We'll think about it. Maybe send you a postcard. No guarantees.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Terms & Conditions</h2>
          <p className="text-sm">
            * Results not guaranteed. Success not included. Refunds available only in Monopoly money. 
            By reading this, you've already given us too much of your time. Thank you for your service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
