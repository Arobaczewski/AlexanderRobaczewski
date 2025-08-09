/*
 * BitmojiGreeting.jsx - Personal Welcome Overlay Component
 * 
 * BUSINESS IMPACT: This greeting creates an immediate, memorable personal connection
 * as an overlay on the existing StarfieldBackground. The seamless integration ensures
 * no visual interruptions while maintaining the sophisticated 3D environment throughout
 * the entire user experience from first greeting to portfolio exploration.
 * 
 * TECHNICAL INTEGRATION: Works as content overlay rather than separate screen,
 * allowing the StarfieldBackground to run continuously and preventing any white
 * flashes or visual disruptions during the transition to portfolio content.
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
      img.src = '/bitmoji-wave.png'; // Replace with your actual Bitmoji path
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
      await new Promise(resolve => setTimeout(resolve, 2500)); // Duration of wave animation

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
         * ANIMATED BITMOJI IMAGE
         * Uses PNG with custom CSS animations to create waving effect
         * Multiple animation layers create realistic waving motion
         */}
        {bitmojiLoaded && (
          <div className="relative">
            <img
              src="/bitmoji-wave.png"
              alt="Alex waving hello"
              className={`w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full border-4 border-teal-400/30 shadow-2xl shadow-teal-400/20 transition-all duration-300 ${
                phase === 'waving' 
                  ? 'scale-110 animate-wave-gentle animate-bounce-subtle' 
                  : 'scale-100'
              }`}
              style={{
                filter: 'drop-shadow(0 0 30px rgba(20, 184, 166, 0.3))',
                animationDuration: phase === 'waving' ? '0.6s' : '0s',
                animationIterationCount: phase === 'waving' ? '4' : '0',
                transformOrigin: 'center bottom'
              }}
            />
            
            {/* Pulse ring effect during waving */}
            {phase === 'waving' && (
              <div className="absolute inset-0 border-4 border-teal-400/40 rounded-full animate-ping"></div>
            )}
            
            {/* Additional sparkle effects during waving */}
            {phase === 'waving' && (
              <>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute -top-4 left-8 w-2 h-2 bg-teal-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute -right-4 top-8 w-3 h-3 bg-teal-500 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.6s' }}></div>
              </>
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
  );
};

export default BitmojiGreeting;