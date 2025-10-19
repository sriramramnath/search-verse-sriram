import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
const Terms = () => {
  return <div className="min-h-screen bg-background dark text-foreground">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>
        
        <h1 className="text-5xl font-bold mb-6">
          <FileText className="inline-block w-12 h-12 text-primary mb-2" />
          Terms of Service
        </h1>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-sm text-muted-foreground italic">
            Last Updated: When we remembered this page needed content
          </p>
          
          <p className="text-xl">
            Welcome to our Terms of Service! We know you're not actually reading this, but legally we have to have it.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">1. Acceptance of Terms</h2>
          <p>
            By using Search Verse, you agree to these terms. If you don't agree, well... you probably already used it anyway. 
            Schrödinger's agreement: you both accept and don't accept until we check.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Service Description</h2>
          <p>
            Search Verse provides search services. Sometimes they work. Sometimes they don't. That's the beauty of technology.
            We promise to try our best, which is worth exactly what you're paying for this service: nothing.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">3. User Conduct</h2>
          <p>You agree NOT to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use our service to search for how to break these terms (we see you)</li>
            <li>Attempt to hack us (we're not worth it, trust us)</li>
            <li>Spam our servers (they're already slow enough)</li>
            
            <li>Expect customer service (see section 47, subsection B, paragraph... just kidding, there is no section 47)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Intellectual Property</h2>
          <p>
            All the cool stuff on this site is owned by Sriram Dev Inc. The not-cool stuff? Also ours. 
            The bugs? Those are open source (kidding, please don't steal our bugs).
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Disclaimer of Warranties</h2>
          <p>
            THIS SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TRANSLATION: IT WORKS WHEN IT WORKS.
          </p>
          <p>
            We make no warranties, express or implied, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The service will be uninterrupted (spoiler: it will be)</li>
            <li>Results will be accurate (we redirect to other search engines, so... not our problem?)</li>
            <li>Your computer won't explode (it probably won't, but we can't promise)</li>
            <li>You'll find what you're looking for (sometimes you find yourself instead)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Limitation of Liability</h2>
          <p>
            In no event shall Sriram Dev Inc. be liable for any damages whatsoever. Lost productivity? Not our fault. 
            Existential crisis from reading these terms? That's on you. Coffee spilled on keyboard while laughing at our jokes? 
            Definitely not our responsibility (but we're flattered).
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Termination</h2>
          <p>
            We reserve the right to terminate your access to the service at any time, for any reason, 
            including but not limited to: feeling moody, Mercury being in retrograde, or because we feel like it.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Governing Law</h2>
          <p>
            These terms shall be governed by the laws of... somewhere. Probably the Internet? 
            Is that a jurisdiction? Our lawyer (an AI) is still researching this.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">9. Changes to Terms</h2>
          <p>
            We can change these terms whenever we want. You'll know because... actually, you probably won't know. 
            Just assume they've changed. They're always changing. Everything is temporary. Except our commitment to dark mode.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Contact</h2>
          <p>
            Have questions about these terms? Email us at: legal@searchverse.fake
            <br />
            <span className="text-sm">(Responses delivered via carrier pigeon, please allow 6-8 weeks)</span>
          </p>
          
          <div className="border-t border-border mt-12 pt-6">
            <p className="text-sm text-center">
              By scrolling this far, you've demonstrated more dedication to reading Terms of Service than 99% of internet users. 
              Congratulations! Your prize is... nothing. But we appreciate you. ❤️
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Terms;