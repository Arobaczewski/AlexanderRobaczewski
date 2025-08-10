/*
 * App.jsx - Complete Portfolio Experience with Personal Bitmoji Greeting
 * 
 * BUSINESS IMPACT: This version creates the ultimate personal portfolio experience,
 * beginning with a memorable, friendly greeting that immediately humanizes the
 * professional presentation. The sequence builds emotional connection before
 * demonstrating technical competence, creating a perfect balance of personality
 * and professionalism that employers remember long after viewing.
 * 
 * STRATEGIC USER EXPERIENCE FLOW:
 * 1. Personal Bitmoji Greeting: Creates immediate emotional connection and memorability
 * 2. Immersive 3D Background: Demonstrates technical sophistication and creativity
 * 3. Progressive Content Revelation: Guides user through strategic portfolio narrative
 * 4. Professional Conversion: Multiple touchpoints for employer engagement
 * 
 * COMPETITIVE ADVANTAGES:
 * - Human Connection: Personal greeting differentiates from corporate portfolios
 * - Memorability: Unique entrance ensures portfolio stands out in employer memory
 * - Technical + Personal: Perfect balance of competence and approachability
 * - Professional Creativity: Shows ability to think beyond standard presentations
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
   * showGreeting: Controls the initial Bitmoji welcome experience
   * showPortfolio: Manages transition from greeting to main portfolio content
   */
  const [showGreeting, setShowGreeting] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  /*
   * GREETING COMPLETION HANDLER
   * Manages smooth transition from personal greeting to professional portfolio
   * Ensures StarfieldBackground initializes properly before content appears
   */
  const handleGreetingComplete = () => {
    setShowGreeting(false);
    
    // Brief delay allows smooth transition to portfolio
    setTimeout(() => {
      setShowPortfolio(true);
    }, 300);
  };

  /*
   * PERSONAL GREETING PHASE
   * Friendly, memorable introduction with animated Bitmoji
   * Creates immediate personal connection before technical demonstration
   */
  if (showGreeting) {
    return <BitmojiGreeting onComplete={handleGreetingComplete} />;
  }

  /*
   * MAIN PORTFOLIO EXPERIENCE
   * Professional presentation with scroll-triggered animations
   * Technical competence showcase following personal introduction
   */
  return (
    <>
      {/* 
       * IMMERSIVE 3D BACKGROUND - Technical sophistication demonstration
       * Loads after greeting completes to ensure smooth transition
       * Creates premium atmosphere for portfolio content
       */}
      <StarfieldBackground />
      
      {/* 
       * PORTFOLIO CONTENT CONTAINER - Professional presentation layer
       * showPortfolio state ensures smooth entrance after greeting
       * Scroll animations create engaging exploration experience
       */}
      <div className={`min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white transition-opacity duration-1000 ${
        showPortfolio ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* 
         * HEADER - Professional navigation and brand identity
         * Appears immediately when portfolio loads for orientation
         * Maintains consistent brand identity from greeting to portfolio
         */}
        <Header/>
        
        {/* 
         * HERO SECTION - Value proposition and primary conversion
         * Gentle entrance delay (300ms) allows header to establish first
         * fadeUp animation creates elegant transition from greeting experience
         */}
        <AnimatedSection animation="fadeUp" delay={300} duration={800}>
          <Hero/>
        </AnimatedSection>
        
        {/* 
         * ABOUT SECTION - Personal story and competitive differentiation
         * slideRight creates dynamic movement and visual interest
         * 500ms delay provides comfortable pacing after Hero section
         */}
        <AnimatedSection animation="slideRight" delay={500} duration={900}>
          <About />
        </AnimatedSection>
        
        {/* 
         * SKILLS SECTION - Technical competency demonstration
         * slideLeft balances previous slideRight for visual rhythm
         * 700ms delay creates natural progression through portfolio narrative
         */}
        <AnimatedSection animation="slideLeft" delay={700} duration={900}>
          <Skills/>
        </AnimatedSection>
        
        {/* 
         * PROJECTS SECTION - Portfolio evidence and capability proof
         * slideUp emphasizes importance of project showcase
         * 900ms delay builds anticipation for portfolio's critical evidence
         */}
        <AnimatedSection animation="slideUp" delay={900} duration={1000}>
          <Projects/>
        </AnimatedSection>
        
        {/* 
         * CONTACT SECTION - Conversion completion and engagement
         * scale animation draws attention to final conversion opportunity
         * 1100ms delay creates dramatic pause before call-to-action
         */}
        <AnimatedSection animation="scale" delay={1100} duration={800}>
          <Contact/>
        </AnimatedSection>
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