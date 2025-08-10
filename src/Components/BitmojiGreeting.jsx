/*
 * BitmojiGreeting.jsx - Personal Welcome Screen with Animated Bitmoji
 * 
 * BUSINESS IMPACT: This greeting creates an immediate, memorable personal connection
 * that humanizes the portfolio and sets a friendly, approachable tone. The unique
 * personal touch differentiates the portfolio from corporate presentations while
 * demonstrating creativity and attention to user experience details.
 * 
 * STRATEGIC ADVANTAGES:
 * - Personal Connection: Human face and greeting create immediate emotional bond
 * - Memorability: Unique entrance ensures portfolio stands out from competitors
 * - Personality Showcase: Demonstrates cultural fit and approachable personality
 * - Professional Friendliness: Balances competence with accessibility
 * - Conversation Starter: Memorable element likely to be mentioned in interviews
 * 
 * TECHNICAL ACHIEVEMENTS:
 * - Smooth animation sequencing with precise timing control
 * - Image preloading for seamless animation experience
 * - State management for complex animation phases
 * - Hardware-accelerated transforms for smooth performance
 * - Graceful transition to main portfolio content
 */

import { useState, useEffect } from 'react';

const BitmojiGreeting = ({ onComplete }) => {
  /*
   * ANIMATION STATE MANAGEMENT
   * phase: Controls which part of the greeting sequence is active
   * isVisible: Controls overall component visibility and transitions
   * bitmojiLoaded: Ensures smooth animation by waiting for image load
   */
  const [phase, setPhase] = useState('entering'); // entering -> greeting -> waving -> exiting
  const [isVisible, setIsVisible] = useState(true);
  const [bitmojiLoaded, setBitmojiLoaded] = useState(false);

  /*
   * GREETING ANIMATION SEQUENCE
   * Orchestrates the complete welcome experience with precise timing
   * Each phase serves specific purpose in building personal connection
   */
  useEffect(() => {
    /*
     * BITMOJI IMAGE PRELOADING
     * Ensures smooth animation by loading image before sequence begins
     * Prevents jarring image pop-in during animation
     */
    const preloadBitmoji = () => {
      const img = new Image();
      img.onload = () => setBitmojiLoaded(true);
      img.onerror = () => setBitmojiLoaded(true); // Continue even if image fails
      img.src = '/bitmoji-wave.gif'; // Replace with your actual Bitmoji path
    };

    preloadBitmoji();
  }, []);

  /*
   * ANIMATION SEQUENCE CONTROLLER
   * Manages timing and transitions between greeting phases
   */
  useEffect(() => {
    if (!bitmojiLoaded) return;

    const animationSequence = async () => {
      // Phase 1: Enter with fade and scale
      setPhase('entering');
      await new Promise(resolve => setTimeout(resolve, 300));

      // Phase 2: Show greeting text
      setPhase('greeting');
      await new Promise(resolve => setTimeout(resolve, 800));

      // Phase 3: Waving animation period
      setPhase('waving');
      await new Promise(resolve => setTimeout(resolve, 2500)); // Duration of wave GIF

      // Phase 4: Exit sequence
      setPhase('exiting');
      await new Promise(resolve => setTimeout(resolve, 600));

      // Complete and hide
      setIsVisible(false);
      setTimeout(onComplete, 300); // Allow exit animation to complete
    };

    // Small delay before starting sequence
    setTimeout(animationSequence, 200);
  }, [bitmojiLoaded, onComplete]);

  /*
   * PHASE-BASED STYLING
   * Dynamic classes based on current animation phase
   * Creates smooth transitions between different states
   */
  const getPhaseClasses = () => {
    switch (phase) {
      case 'entering':
        return 'opacity-0 scale-90 translate-y-4';
      case 'greeting':
      case 'waving':
        return 'opacity-100 scale-100 translate-y-0';
      case 'exiting':
        return 'opacity-0 scale-95 -translate-y-2';
      default:
        return 'opacity-0 scale-90';
    }
  };

  /*
   * VISIBILITY MANAGEMENT
   * Controls when component is completely hidden
   */
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      {/* 
       * ANIMATED BACKGROUND PARTICLES
       * Subtle background animation creates depth and engagement
       * Matches StarfieldBackground aesthetic for visual continuity
       */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* 
       * MAIN GREETING CONTAINER
       * Centered content with smooth animation transitions
       * Glassmorphism styling maintains design consistency
       */}
      <div className={`relative z-10 text-center transform transition-all duration-500 ease-out ${getPhaseClasses()}`}>
        
        {/* 
         * GREETING TEXT SECTION
         * Friendly, welcoming message that builds personal connection
         * Appears before Bitmoji for proper introduction sequence
         */}
        <div className={`mb-8 transition-all duration-300 ${
          phase === 'greeting' || phase === 'waving' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          
          {/* Main greeting */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Hi There! 👋
            </span>
          </h1>
          
          {/* Personal introduction */}
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Welcome to my portfolio!
          </p>
          
          {/* Subtitle that appears during waving */}
          <div className={`mt-4 transition-all duration-300 ${
            phase === 'waving' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <p className="text-lg text-gray-300 drop-shadow-md">
              I'm Alex, and I'm excited to show you my work!
            </p>
          </div>
        </div>

        {/* 
         * BITMOJI CONTAINER
         * Animated avatar that creates personal connection
         * Scaling and rotation effects enhance the waving animation
         */}
        <div className={`relative transition-all duration-300 ${
          phase === 'greeting' || phase === 'waving' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-full blur-2xl scale-150 opacity-50"></div>
          
          {/* 
           * BITMOJI IMAGE
           * Replace src with your actual Bitmoji waving GIF
           * Strategic sizing and styling for optimal visual impact
           */}
          {bitmojiLoaded && (
            <div className="relative">
              <img
                src="/bitmoji-wave.gif"
                alt="Alex waving hello"
                className={`w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full border-4 border-teal-400/30 shadow-2xl shadow-teal-400/20 transition-transform duration-300 ${
                  phase === 'waving' ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
                }`}
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(20, 184, 166, 0.3))'
                }}
              />
              
              {/* Pulse ring effect during waving */}
              {phase === 'waving' && (
                <div className="absolute inset-0 border-4 border-teal-400/40 rounded-full animate-ping"></div>
              )}
            </div>
          )}

          {/* Loading state while Bitmoji loads */}
          {!bitmojiLoaded && (
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full bg-gradient-to-br from-teal-400/20 to-teal-600/20 border-4 border-teal-400/30 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-teal-400 border-t-transparent"></div>
            </div>
          )}
        </div>

        {/* 
         * PROGRESS INDICATOR
         * Subtle dots showing animation progress
         * Provides visual feedback during greeting sequence
         */}
        <div className={`mt-8 flex justify-center space-x-2 transition-all duration-300 ${
          phase === 'waving' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-60"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BitmojiGreeting;

/*
 * USAGE INTEGRATION:
 * 
 * function App() {
 *   const [showGreeting, setShowGreeting] = useState(true);
 * 
 *   if (showGreeting) {
 *     return <BitmojiGreeting onComplete={() => setShowGreeting(false)} />;
 *   }
 * 
 *   return (
 *     // Your main portfolio content with scroll animations
 *   );
 * }
 * 
 * BITMOJI SETUP INSTRUCTIONS:
 * 1. Open Snapchat and go to your Bitmoji
 * 2. Find a waving animation or create one
 * 3. Save/export as GIF
 * 4. Add to your public folder as 'bitmoji-wave.gif'
 * 5. Update the src path in the component
 * 
 * CUSTOMIZATION OPTIONS:
 * - Adjust timing in animationSequence for longer/shorter greeting
 * - Change greeting text to match your personality
 * - Modify colors to match your brand
 * - Add sound effects for extra engagement
 * - Include multiple Bitmoji expressions for variety
 * 
 * BUSINESS IMPACT:
 * - Creates immediate personal connection and memorable first impression
 * - Demonstrates personality and cultural fit for team environments
 * - Shows creativity and attention to user experience details
 * - Differentiates portfolio from standard, corporate presentations
 * - Provides natural conversation starter for interviews
 */