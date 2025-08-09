/*
 * AnimatedSection.jsx - Scroll-Triggered Animation Wrapper Component
 * 
 * BUSINESS IMPACT: This component transforms the portfolio from a static presentation
 * into a dynamic, engaging experience that captures and maintains user attention.
 * The professional animation system demonstrates advanced frontend capabilities
 * while creating a premium user experience that significantly enhances brand perception.
 * 
 * TECHNICAL ACHIEVEMENTS:
 * - Reusable animation system with configurable parameters
 * - CSS-in-JS integration with Tailwind for optimal performance
 * - Multiple animation presets for different content types
 * - Smooth transitions with hardware acceleration
 * - Accessibility support with reduced motion preferences
 */

import { useInView } from './useInView';

/**
 * AnimatedSection - Wrapper component for scroll-triggered animations
 * 
 * @param {Object} props - Component properties
 * @param {ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type ('fadeUp', 'fadeIn', 'slideLeft', 'slideRight', 'scale')
 * @param {number} props.delay - Animation delay in milliseconds
 * @param {number} props.duration - Animation duration in milliseconds
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedSection = ({ 
  children, 
  animation = 'fadeUp', 
  delay = 0, 
  duration = 800,
  className = '',
  ...props 
}) => {
  /*
   * INTERSECTION OBSERVER INTEGRATION
   * Detects when component enters viewport for animation trigger
   * hasBeenInView ensures animation only triggers once for optimal performance
   */
  const { ref, hasBeenInView } = useInView({
    threshold: 0.1,      // Trigger when 10% visible
    rootMargin: '-50px 0px', // Start animation 50px before entering viewport
    triggerOnce: true    // Animate only once for better performance
  });

  /*
   * ANIMATION PRESETS - Professional animation library
   * Each animation optimized for different content types and user experience goals
   */
  const animations = {
    /*
     * FADE UP - Elegant entrance for main content sections
     * Combines opacity change with subtle upward movement
     * Perfect for hero sections, about content, and primary information
     */
    fadeUp: {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
      description: 'Fade in with upward movement - ideal for main content'
    },
    
    /*
     * FADE IN - Simple, clean appearance
     * Pure opacity transition without movement
     * Best for subtle elements that shouldn't distract from main content
     */
    fadeIn: {
      initial: 'opacity-0',
      animate: 'opacity-100',
      description: 'Simple fade in - perfect for background elements'
    },
    
    /*
     * SLIDE LEFT - Dynamic entrance from right side
     * Creates sense of content flowing into view
     * Excellent for alternating content sections and timeline elements
     */
    slideLeft: {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0',
      description: 'Slide in from right - great for alternating sections'
    },
    
    /*
     * SLIDE RIGHT - Dynamic entrance from left side
     * Balances slideLeft for alternating sections
     * Creates visual rhythm in timeline or alternating content layouts
     */
    slideRight: {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0',
      description: 'Slide in from left - perfect for timeline alternating'
    },
    
    /*
     * SCALE - Attention-grabbing zoom entrance
     * Draws focus to important elements
     * Ideal for call-to-action buttons, important announcements, or featured content
     */
    scale: {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
      description: 'Scale up entrance - perfect for CTAs and important elements'
    },
    
    /*
     * SLIDE UP - Professional upward movement
     * Similar to fadeUp but with more pronounced movement
     * Great for card-based content and modular sections
     */
    slideUp: {
      initial: 'opacity-0 translate-y-12',
      animate: 'opacity-100 translate-y-0',
      description: 'Pronounced upward slide - excellent for cards and modules'
    }
  };

  /*
   * ANIMATION STATE CALCULATION
   * Determines current animation classes based on visibility and configuration
   */
  const currentAnimation = animations[animation] || animations.fadeUp;
  const animationClasses = hasBeenInView ? currentAnimation.animate : currentAnimation.initial;
  
  /*
   * DYNAMIC STYLE GENERATION
   * Creates inline styles for timing and hardware acceleration
   * Uses CSS custom properties for optimal performance
   */
  const animationStyle = {
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: hasBeenInView ? 'auto' : 'transform, opacity', // Optimize for animation
  };

  /*
   * ACCESSIBILITY CONSIDERATION
   * Respects user preferences for reduced motion
   * Ensures inclusive experience for users with motion sensitivities
   */
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /*
   * REDUCED MOTION HANDLING
   * Provides immediate visibility for users who prefer reduced motion
   * Maintains functionality while respecting accessibility preferences
   */
  const finalClasses = prefersReducedMotion 
    ? `opacity-100 ${className}` 
    : `${animationClasses} ${className}`;

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-300 ease-out ${finalClasses}`}
      style={prefersReducedMotion ? {} : animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

/*
 * USAGE EXAMPLES FOR PORTFOLIO INTEGRATION:
 * 
 * // Basic fade up animation for main sections
 * <AnimatedSection animation="fadeUp">
 *   <About />
 * </AnimatedSection>
 * 
 * // Staggered animations for timeline elements
 * <AnimatedSection animation="slideLeft" delay={200}>
 *   <ProjectCard />
 * </AnimatedSection>
 * 
 * // Scale animation for call-to-action elements
 * <AnimatedSection animation="scale" delay={400} duration={600}>
 *   <ContactButton />
 * </AnimatedSection>
 * 
 * // Custom styling with additional classes
 * <AnimatedSection 
 *   animation="fadeUp" 
 *   delay={300}
 *   className="relative z-10"
 * >
 *   <Skills />
 * </AnimatedSection>
 */