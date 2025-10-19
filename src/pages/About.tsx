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
            To make a lot of money.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Story</h2>
          <p>
            Founded by Sriram, and vibe coded in 10 mins.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Team</h2>
          <p>
            We have a world-class team of... well, mostly one person and several AI models for debugging. 
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We're powered by unduck (because Duck Duck Go is very bad)</li>
            <li>Our AI assistant runs on the greatest ai model GPT-5</li>
            <li>100% dark mode, 0% apologies</li>
            <li>Red accents that scream "I'm different!(thanks Steve Jobs for the "Think Different" idea)</li>
            <li>Many many Rick rolls</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
