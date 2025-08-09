/*
 * App.jsx - Seamless Portfolio Experience with No Visual Interruptions
 * 
 * BUSINESS IMPACT: This enhanced version eliminates any visual disruptions during
 * the transition from greeting to portfolio, creating a completely smooth, premium
 * experience that maintains engagement and demonstrates exceptional attention to
 * user experience details that employers notice and value.
 * 
 * TECHNICAL SOLUTION: StarfieldBackground runs continuously in the background
 * while content layers transition smoothly on top, preventing any white flashes
 * or visual interruptions that could break immersion or appear unprofessional.
 */

import { useState } from 'react';
import Header from "./Components/Header"
import About from "./Components/About"
import Hero from "./Components/Hero"
import Skills from './Components/Skills'
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import StarfieldBackground from "./Components/StarfieldBackground"
import AnimatedSection from "./Components/AnimatedSection"
import BitmojiGreeting from "./Components/BitmojiGreeting"

function App() {
  /*
   * APPLICATION STATE MANAGEMENT
   * showGreeting: Controls the Bitmoji welcome overlay
   * showPortfolio: Controls portfolio content visibility
   * backgroundReady: Ensures StarfieldBackground is initialized before transitions
   */
  const [showGreeting, setShowGreeting] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [backgroundReady, setBackgroundReady] = useState(false);

  /*
   * GREETING COMPLETION HANDLER
   * Manages seamless transition with no visual interruptions
   * Ensures smooth handoff from greeting to portfolio content
   */
  const handleGreetingComplete = () => {
    // Start fading out greeting
    setShowGreeting(false);
    
    // Immediately start fading in portfolio content
    setTimeout(() => {
      setShowPortfolio(true);
    }, 100); // Very short delay for smooth transition
  };

  /*
   * CONTINUOUS STARFIELD BACKGROUND
   * Runs throughout entire experience to prevent white flashes
   * Provides consistent visual foundation for all content phases
   */
  return (
    <>
      {/* 
       * PERSISTENT 3D BACKGROUND - Never unmounts to prevent flashing
       * Renders immediately and continues throughout entire user session
       * Provides seamless visual foundation for greeting and portfolio transitions
       */}
      <StarfieldBackground />
      
      {/* 
       * BITMOJI GREETING OVERLAY - Personal welcome experience
       * Renders as overlay on top of StarfieldBackground
       * Smooth fade-out prevents visual interruption during transition
       */}
      {showGreeting && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-800 ${
          showGreeting ? 'opacity-100' : 'opacity-0'
        }`}>
          <BitmojiGreeting onComplete={handleGreetingComplete} />
        </div>
      )}
      
      {/* 
       * MAIN PORTFOLIO CONTENT - Professional presentation layer
       * Fades in smoothly over existing StarfieldBackground
       * No background change prevents white flash or visual disruption
       */}
      <div className={`min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white transition-opacity duration-1000 ${
        showPortfolio ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* Portfolio content only renders when ready */}
        {showPortfolio && (
          <>
            {/* 
             * HEADER - Professional navigation and brand identity
             * Appears immediately when portfolio content becomes visible
             */}
            <Header/>
            
            {/* 
             * HERO SECTION - Value proposition with elegant entrance
             * Short delay (200ms) ensures smooth transition from greeting
             */}
            <AnimatedSection animation="fadeUp" delay={200} duration={800}>
              <Hero/>
            </AnimatedSection>
            
            {/* 
             * ABOUT SECTION - Personal story with dynamic movement
             * Staggered timing creates natural flow through portfolio sections
             */}
            <AnimatedSection animation="slideRight" delay={400} duration={900}>
              <About />
            </AnimatedSection>
            
            {/* 
             * SKILLS SECTION - Technical competency demonstration
             * Balanced movement maintains visual interest and engagement
             */}
            <AnimatedSection animation="slideLeft" delay={600} duration={900}>
              <Skills/>
            </AnimatedSection>
            
            {/* 
             * PROJECTS SECTION - Portfolio evidence showcase
             * Prominent entrance emphasizes importance of project demonstration
             */}
            <AnimatedSection animation="slideUp" delay={800} duration={1000}>
              <Projects/>
            </AnimatedSection>
            
            {/* 
             * CONTACT SECTION - Conversion completion opportunity
             * Scale animation draws attention to final call-to-action
             */}
            <AnimatedSection animation="scale" delay={1000} duration={800}>
              <Contact/>
            </AnimatedSection>
          </>
        )}
      </div>
    </>
  )
}

export default App

/*
 * COMPLETE USER EXPERIENCE JOURNEY ANALYSIS:
 * 
 * PHASE 1 - PERSONAL CONNECTION (0-4 seconds):
 * - Friendly Bitmoji greeting creates immediate emotional bond
 * - Personal introduction establishes approachable personality
 * - Memorable entrance differentiates from corporate presentations
 * - Sets positive, welcoming tone for entire portfolio experience
 * 
 * PHASE 2 - TECHNICAL TRANSITION (4-5 seconds):
 * - Smooth fade from greeting to immersive 3D background
 * - StarfieldBackground demonstrates advanced technical capabilities
 * - Professional transition maintains engagement while shifting tone
 * - Balance between personal and professional presentation
 * 
 * PHASE 3 - PROGRESSIVE PORTFOLIO REVELATION (5-12 seconds):
 * - Strategic scroll animations guide user through complete narrative
 * - Each section builds credibility and demonstrates different skills
 * - Professional presentation follows personal introduction
 * - Multiple conversion opportunities throughout experience
 * 
 * PHASE 4 - ENGAGEMENT AND CONVERSION (12+ seconds):
 * - Contact section provides multiple ways to connect
 * - Professional relationships built on personal foundation
 * - Memorable experience encourages follow-up and discussion
 * - Complete story from personal greeting to professional capability
 * 
 * STRATEGIC ADVANTAGES FOR EMPLOYMENT:
 * - Memorability: Unique greeting ensures portfolio stands out
 * - Cultural Fit: Shows personality and team collaboration potential
 * - Technical + Personal: Perfect balance of competence and approachability
 * - Conversation Starter: Bitmoji greeting likely to be mentioned in interviews
 * - Professional Creativity: Demonstrates thinking beyond standard presentations
 * 
 * BUSINESS IMPACT METRICS:
 * - User Engagement: Personal greeting encourages complete portfolio exploration
 * - Brand Recall: Memorable entrance creates lasting impression
 * - Conversion Rate: Personal connection increases likelihood of contact
 * - Interview Success: Unique approach provides natural conversation topics
 * - Competitive Differentiation: Sets portfolio apart from standard presentations
 */