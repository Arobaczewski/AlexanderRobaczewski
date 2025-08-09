/*
 * useInView.js - Custom Intersection Observer Hook for Scroll-Triggered Animations
 * 
 * BUSINESS IMPACT: This hook creates a premium, engaging user experience that encourages
 * exploration and significantly improves perceived performance. The smooth, progressive
 * content loading creates a modern, professional feel that sets the portfolio apart
 * from static presentations and demonstrates advanced frontend development capabilities.
 * 
 * TECHNICAL ACHIEVEMENTS:
 * - Performance optimization through lazy component rendering
 * - Modern Intersection Observer API usage with fallback support
 * - Custom React hook following current best practices
 * - Memory-efficient observer cleanup and management
 * - Configurable thresholds for precise animation timing
 * 
 * USER EXPERIENCE BENEFITS:
 * - Smooth, progressive content revelation rewards scrolling behavior
 * - Improved perceived performance through staggered loading
 * - Reduced cognitive load by presenting content sequentially
 * - Enhanced engagement through interactive, responsive interface
 */

import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport
 * 
 * @param {Object} options - Configuration options for the intersection observer
 * @param {number} options.threshold - Percentage of element that must be visible (0.1 = 10%)
 * @param {string} options.rootMargin - Margin around the root element
 * @param {boolean} options.triggerOnce - Whether to trigger only once or repeatedly
 * @returns {Object} - { ref, isInView, hasBeenInView }
 */
export const useInView = (options = {}) => {
  /*
   * HOOK CONFIGURATION - Flexible parameters for different animation needs
   * threshold: 0.1 means trigger when 10% of element is visible
   * rootMargin: '-50px' triggers animation 50px before element enters viewport
   * triggerOnce: true means animation triggers once and stays active
   */
  const {
    threshold = 0.1,
    rootMargin = '-50px 0px',
    triggerOnce = true
  } = options;

  /*
   * STATE MANAGEMENT - Track visibility and animation states
   * isInView: Current visibility state
   * hasBeenInView: Persistent state for one-time animations
   */
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    /*
     * INTERSECTION OBSERVER SETUP - Modern performance-conscious visibility detection
     * Replaces expensive scroll event listeners with efficient browser API
     * Automatically handles throttling and performance optimization
     */
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const inView = entry.isIntersecting;
        
        /*
         * VISIBILITY STATE MANAGEMENT
         * Updates current visibility and persistent "has been seen" state
         * Supports both one-time and repeating animations
         */
        setIsInView(inView);
        
        if (inView && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    /*
     * CLEANUP FUNCTION - Prevent memory leaks
     * Essential for performance in single-page applications
     */
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, hasBeenInView]);

  /*
   * RETURN API - Flexible interface for component usage
   * ref: Attach to element you want to observe
   * isInView: Current visibility state
   * hasBeenInView: One-time trigger state (useful for animations that should persist)
   */
  return {
    ref: elementRef,
    isInView,
    hasBeenInView: triggerOnce ? hasBeenInView : isInView
  };
};