import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">About <span className="text-primary">Search Verse</span></h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-xl">
            Welcome to Search Verse, where we're reinventing the wheel but making it square because circles are too mainstream.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Mission</h2>
          <p>
            To organize the world's information and make it universally accessible... or at least the 0.003% of it we've actually indexed. 
            We're basically a search engine with commitment issues.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Story</h2>
          <p>
            Founded in a garage (classic), by Sriram Dev Inc., Search Verse was born from a simple question: 
            "What if Google, but edgier?" After several failed attempts and questionable life choices, here we are.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Team</h2>
          <p>
            We have a world-class team of... well, mostly one person and several rubber ducks for debugging. 
            But those rubber ducks are really good at their job.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We're powered by unduck (because regular ducks are too mainstream)</li>
            <li>Our AI assistant runs on optimism and caffeine</li>
            <li>100% dark mode, 0% apologies</li>
            <li>Red accents that scream "I'm different!"</li>
            <li>Footer jokes that your grandma would find questionable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
