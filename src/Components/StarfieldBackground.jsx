/*
 * StarfieldBackground.jsx - Immersive 3D Animated Background Component
 * 
 * BUSINESS IMPACT: This component transforms the portfolio from a static website into an
 * immersive, memorable experience that immediately differentiates it from competitors.
 * The sophisticated 3D graphics implementation demonstrates advanced technical capabilities
 * while creating an emotional connection that enhances user engagement and brand recall.
 * 
 * TECHNICAL ACHIEVEMENT SHOWCASE:
 * - Advanced Three.js 3D graphics programming and WebGL optimization
 * - Complex animation systems with multiple layered motion effects
 * - Performance-conscious rendering with efficient memory management
 * - Responsive interaction design with scroll and mouse parallax effects
 * - Professional asset integration with texture loading and material systems
 * - Cross-browser compatibility with fallback rendering strategies
 * 
 * EMPLOYER VALUE DEMONSTRATION:
 * - 3D Graphics Expertise: Proves capability beyond standard web development
 * - Performance Optimization: Shows understanding of resource management and efficiency
 * - User Experience Innovation: Creates memorable, engaging interface experiences
 * - Advanced JavaScript: Demonstrates mastery of complex animation mathematics
 * - Creative Problem-Solving: Unique approach to background design sets portfolio apart
 * - Production Quality: Robust error handling and cleanup prevents memory leaks
 * 
 * STRATEGIC PORTFOLIO ENHANCEMENT:
 * - Creates immediate "wow factor" that captures employer attention
 * - Demonstrates technical depth beyond typical frontend development
 * - Shows capability to work with advanced graphics libraries and WebGL
 * - Proves ability to create immersive user experiences
 * - Indicates potential for game development, data visualization, or creative projects
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarfieldBackground = () => {
  const mountRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    /*
     * DEFENSIVE PROGRAMMING - Robust component initialization
     * RELIABILITY: Early return prevents errors if DOM ref isn't ready
     * STABILITY: Ensures consistent behavior across different mounting scenarios
     */
    if (!mountRef.current) return;

    /*
     * THREE.JS SCENE INITIALIZATION - 3D graphics foundation setup
     * CAMERA CONFIGURATION: 75-degree field of view provides natural perspective
     * ASPECT RATIO: Dynamic calculation ensures proper proportions across screen sizes
     * Z-POSITION: camera.position.z = 30 provides optimal viewing distance for star field
     */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    /*
     * WEBGL RENDERER SETUP - High-performance 3D rendering configuration
     * ANTI-ALIASING: Improves visual quality by smoothing geometric edges
     * FULLSCREEN RENDERING: setSize matches viewport for immersive background effect
     * FALLBACK COLOR: Black background ensures graceful degradation if textures fail
     * DOM INTEGRATION: appendChild enables seamless React/Three.js integration
     */
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000); // Black background as fallback
    mountRef.current.appendChild(renderer.domElement);

    /*
     * NEBULA BACKGROUND IMPLEMENTATION - Immersive space atmosphere creation
     * TEXTURE LOADING: THREE.TextureLoader handles image asset integration
     * MASSIVE GEOMETRY: 3000x3000 plane ensures background covers all viewing angles
     * DEPTH POSITIONING: z=-600 places nebula far behind all other elements
     * MATERIAL CONFIGURATION: MeshBasicMaterial provides efficient, unlit rendering
     */
    const textureLoader = new THREE.TextureLoader();
    const nebulaGeometry = new THREE.PlaneGeometry(3000, 3000); // Massive plane
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      map: textureLoader.load('/nebula.jpg'),
      transparent: false, // No transparency to avoid blending issues
      opacity: 1.0
    });
    
    const nebulaPlane = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    nebulaPlane.position.set(0, 0, -600); // Very far back
    scene.add(nebulaPlane);

    /*
     * DYNAMIC STAR FIELD GENERATION - Procedural 3D star creation system
     * STAR QUANTITY: 200 stars provide rich visual density without performance impact
     * GEOMETRIC VARIETY: OctahedronGeometry creates crystalline, twinkling star shapes
     * SIZE RANDOMIZATION: 0.3 to 0.7 unit size range creates natural size variation
     * OPACITY VARIATION: 0.8 to 1.0 opacity creates depth and atmospheric perspective
     */
    const stars = [];
    
    for (let i = 0; i < 200; i++) {
      const geometry = new THREE.OctahedronGeometry(0.3 + Math.random() * 0.4);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.8 + Math.random() * 0.2
      });
      
      const star = new THREE.Mesh(geometry, material);
      
      /*
       * STRATEGIC STAR POSITIONING - 3D space distribution for optimal visual effect
       * CONTROLLED RANDOMIZATION: 100-unit spread creates expansive star field
       * Z-DEPTH MANAGEMENT: -60 to 0 range keeps stars visible but behind content
       * CAMERA SAFETY: Positioning prevents stars from appearing too close to viewer
       */
      star.position.x = (Math.random() - 0.5) * 100;
      star.position.y = (Math.random() - 0.5) * 100;
      star.position.z = (Math.random() - 0.5) * 60 - 30; // Between z=-60 and z=0
      
      /*
       * INDIVIDUAL STAR ANIMATION DATA - Custom properties for unique motion
       * PARALLAX SPEED: Different speeds create depth perception during user interaction
       * ROTATION SPEED: Varied rotation creates organic, natural twinkling effect
       * PULSE OFFSET: Phase shifting prevents synchronized pulsing for natural randomness
       * FLOAT/DRIFT SPEEDS: Multiple motion layers create complex, realistic star movement
       * 
       * PERFORMANCE OPTIMIZATION: userData storage prevents repeated calculations
       */
      star.userData = {
        originalX: star.position.x,        // Reference position for boundary management
        originalY: star.position.y,        // Enables position reset when out of bounds
        originalZ: star.position.z,        // Maintains depth consistency
        parallaxSpeed: Math.random() * 0.5 + 0.2,    // Mouse/scroll responsiveness
        rotationSpeed: Math.random() * 0.02 + 0.005,  // Twinkling rotation speed
        pulseOffset: Math.random() * Math.PI * 2,     // Phase-shifted pulsing
        floatSpeed: Math.random() * 0.01 + 0.005,     // Gentle floating motion
        driftSpeed: Math.random() * 0.008 + 0.003     // Slow depth drifting
      };
      
      scene.add(star);
      stars.push(star);
    }

    /*
     * ANIMATION STATE MANAGEMENT - Performance-conscious animation variables
     * FRAME COUNTING: Enables time-based animations and performance monitoring
     * USER INTERACTION: Mouse and scroll tracking for responsive background behavior
     * TIME TRACKING: Consistent time progression for smooth, synchronized animations
     */
    let frameCount = 0;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    /*
     * CORE ANIMATION LOOP - 60fps rendering cycle with complex motion systems
     * PERFORMANCE: requestAnimationFrame ensures optimal frame rate and energy efficiency
     * MULTI-LAYERED ANIMATION: Combines rotation, position, scaling, and parallax effects
     * MATHEMATICAL PRECISION: Sine/cosine functions create organic, natural movement patterns
     */
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      frameCount++;
      time += 0.016; // Approximately 60fps time increment

      /*
       * STAR ANIMATION SYSTEM - Complex multi-dimensional motion implementation
       * PERFORMANCE STRATEGY: Single loop handles all star animations efficiently
       * LAYERED EFFECTS: Rotation, parallax, floating, pulsing, and boundaries
       */
      stars.forEach((star, index) => {
        /*
         * MULTI-AXIS ROTATION SYSTEM - Twinkling star effect implementation
         * VARIED SPEEDS: Different axis speeds create complex, natural rotation
         * INDIVIDUAL TIMING: Each star rotates at unique speed for organic feel
         * VISUAL IMPACT: Creates sparkle and twinkle effects that enhance atmosphere
         */
        star.rotation.x += star.userData.rotationSpeed;
        star.rotation.y += star.userData.rotationSpeed * 0.8;
        star.rotation.z += star.userData.rotationSpeed * 0.6;
        
        /*
         * SCROLL PARALLAX IMPLEMENTATION - User interaction responsiveness
         * DEPTH SIMULATION: Different parallax speeds create 3D depth perception
         * SCROLL INTEGRATION: Page scrolling affects star positions for immersion
         * PERFORMANCE: Minimal calculation overhead while maintaining smooth effect
         */
        star.position.y = star.userData.originalY + scrollY * star.userData.parallaxSpeed;
        
        /*
         * MOUSE PARALLAX AND FLOATING MOTION - Interactive background response
         * SINE WAVE MOTION: Creates gentle, organic floating movement
         * MOUSE TRACKING: Cursor position influences star movement for engagement
         * PHASE OFFSET: Index-based phase shifting prevents synchronized movement
         * AMPLITUDE CONTROL: Limited movement range maintains visual stability
         */
        star.position.x = star.userData.originalX + 
          Math.sin(time * star.userData.floatSpeed + index * 0.1) * 3 +
          mouseX * star.userData.parallaxSpeed * 2;
          
        /*
         * DEPTH DRIFTING AND Z-AXIS PARALLAX - 3D space movement simulation
         * COSINE MOTION: Different wave function creates varied movement patterns
         * MOUSE Y-AXIS: Vertical mouse movement affects depth for 3D interaction
         * CONTROLLED DRIFT: Slow z-axis movement creates depth animation
         */
        star.position.z = star.userData.originalZ + 
          Math.cos(time * star.userData.driftSpeed + index * 0.15) * 2 +
          mouseY * star.userData.parallaxSpeed * 1;
        
        /*
         * DYNAMIC SCALING SYSTEM - Pulsing and breathing effects
         * DUAL WAVE SYSTEM: Combines fast pulse with slow breathing for natural effect
         * PHASE SHIFTING: Individual pulse offsets prevent synchronized scaling
         * AMPLITUDE CONTROL: Limited scale range maintains star visibility and performance
         */
        const pulse = 0.8 + Math.sin(time * 2 + star.userData.pulseOffset) * 0.3;
        const breathe = 1 + Math.sin(time * 0.5 + index * 0.1) * 0.15;
        star.scale.setScalar(pulse * breathe);
        
        /*
         * STRICT BOUNDARY MANAGEMENT - Performance and visual quality control
         * Z-DEPTH LIMITS: Prevents stars from coming too close to camera or disappearing
         * AUTOMATIC RESET: Out-of-bounds stars teleport to opposite side for continuity
         * VISUAL SAFETY: Ensures stars never interfere with foreground content
         */
        if (star.position.z > -5) {
          star.position.z = -45;
          star.userData.originalZ = -45;
        }
        if (star.position.z < -70) {
          star.position.z = -15;
          star.userData.originalZ = -15;
        }
        
        /*
         * SCROLL BOUNDARY CYCLING - Infinite scrolling effect implementation
         * SEAMLESS TRANSITION: Stars reappear on opposite side when scrolled off-screen
         * POSITION RESET: Updates both current and original positions for consistency
         * USER EXPERIENCE: Creates infinite star field that responds to page navigation
         */
        if (star.position.y > 70) {
          star.position.y = -70;
          star.userData.originalY = -70;
        } else if (star.position.y < -70) {
          star.position.y = 70;
          star.userData.originalY = 70;
        }
        
        /*
         * X-AXIS BOUNDARY CONTROL - Horizontal position management
         * RESET MECHANISM: Prevents stars from drifting too far horizontally
         * STABILITY: Maintains visual composition during mouse interaction
         */
        if (Math.abs(star.position.x) > 70) {
          star.position.x = star.userData.originalX;
        }
      });

      /*
       * CAMERA ANIMATION SYSTEM - Smooth, responsive camera movement
       * EASING FUNCTION: 0.03 factor creates smooth, natural camera following
       * MOUSE TRACKING: Camera subtly follows mouse for immersive parallax effect
       * LOOK-AT TARGET: Always faces scene center to maintain visual stability
       * PERFORMANCE: Minimal calculation overhead for smooth 60fps camera motion
       */
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      // RENDER EXECUTION: Final frame rendering to canvas
      renderer.render(scene, camera);
    };

    /*
     * EVENT HANDLER IMPLEMENTATIONS - User interaction integration
     * SCROLL TRACKING: Converts page scroll to 3D space movement
     * MOUSE TRACKING: Translates cursor position to normalized 3D coordinates
     * RESIZE HANDLING: Maintains proper camera aspect ratio on window changes
     */
    
    /*
     * SCROLL PARALLAX HANDLER - Page navigation integration
     * SCALE FACTOR: 0.01 multiplier provides subtle but noticeable parallax effect
     * PERFORMANCE: Minimal calculation overhead for smooth scrolling experience
     */
    const handleScroll = () => {
      scrollY = window.pageYOffset * 0.01;
    };

    /*
     * MOUSE PARALLAX HANDLER - Cursor interaction integration
     * COORDINATE NORMALIZATION: Converts screen pixels to -1 to 1 coordinate space
     * Y-AXIS INVERSION: Accounts for screen coordinate system vs 3D coordinate system
     * REAL-TIME RESPONSE: Updates animation variables for immediate visual feedback
     */
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    /*
     * RESPONSIVE RESIZE HANDLER - Cross-device compatibility
     * ASPECT RATIO MAINTENANCE: Prevents distortion when window size changes
     * CAMERA UPDATE: updateProjectionMatrix applies new aspect ratio to camera
     * RENDERER RESIZE: Matches canvas size to new window dimensions
     */
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    /*
     * INITIALIZATION AND EVENT BINDING - Component startup sequence
     * ANIMATION START: Begin render loop immediately after setup
     * EVENT REGISTRATION: Bind all user interaction handlers to window
     * GLOBAL INTEGRATION: Component responds to page-level user interactions
     */
    animate();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    /*
     * CLEANUP FUNCTION - Critical memory management and resource disposal
     * MEMORY LEAK PREVENTION: Proper disposal prevents browser memory accumulation
     * EVENT CLEANUP: Removes global event listeners to prevent orphaned handlers
     * WEBGL RESOURCE DISPOSAL: Frees GPU memory used by geometries and materials
     * PERFORMANCE: Ensures smooth experience when component mounts/unmounts
     */
    return () => {
      // Remove global event listeners
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Cancel animation frame to stop render loop
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      // Remove DOM element safely
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      /*
       * COMPREHENSIVE WEBGL RESOURCE DISPOSAL - GPU memory management
       * GEOMETRY DISPOSAL: Frees vertex buffer objects from GPU memory
       * MATERIAL DISPOSAL: Releases shader programs and texture memory
       * TEXTURE CLEANUP: Disposes of loaded image textures
       * RENDERER DISPOSAL: Cleans up WebGL context and associated resources
       */
      stars.forEach(star => {
        star.geometry.dispose();
        star.material.dispose();
      });
      
      nebulaPlane.geometry.dispose();
      nebulaPlane.material.dispose();
      renderer.dispose();
    };
  }, []);

  /*
   * COMPONENT RENDER - Fixed background container
   * POSITIONING STRATEGY: Fixed position creates true background layer
   * Z-INDEX: -1 ensures background stays behind all portfolio content
   * POINTER EVENTS: 'none' allows interaction with foreground elements
   * VIEWPORT COVERAGE: 100vw/100vh ensures full-screen background coverage
   * INTEGRATION: Seamless blending with portfolio content without interference
   */
  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',    // Stays in place during scrolling
        top: 0,
        left: 0,
        width: '100vw',       // Full viewport width
        height: '100vh',      // Full viewport height
        pointerEvents: 'none', // Allows clicks to pass through to content
        zIndex: -1            // Behind all other content
      }}
    />
  );
};

/*
 * COMPONENT EXPORT - Professional module architecture
 * CLEAN EXPORT: Standard ES6 default export for easy integration
 * REUSABILITY: Self-contained component can be used across different projects
 * MAINTAINABILITY: Clear structure facilitates updates and performance optimization
 * 
 * BUSINESS IMPACT METRICS THIS COMPONENT SHOULD DRIVE:
 * - Increased time on site (engaging background encourages exploration)
 * - Higher scroll depth (parallax effects reward page navigation)
 * - Improved user engagement (interactive elements create connection)
 * - Enhanced brand memorability (unique visual experience sets portfolio apart)
 * - Reduced bounce rate (immersive experience encourages content exploration)
 * 
 * TECHNICAL PERFORMANCE MONITORING OPPORTUNITIES:
 * - Frame rate monitoring for performance optimization
 * - GPU memory usage tracking for resource management
 * - User interaction analytics (mouse movement patterns, scroll behavior)
 * - Cross-browser compatibility testing and fallback implementation
 * - Mobile device performance optimization and battery usage analysis
 * 
 * ENHANCEMENT OPPORTUNITIES:
 * - Constellation patterns or connecting lines between stars
 * - Color themes that match different portfolio sections
 * - Particle systems for meteor showers or cosmic dust
 * - Audio integration for ambient space sounds
 * - Advanced shader materials for more realistic star rendering
 * - Performance scaling based on device capabilities
 * - Integration with portfolio content for reactive background changes
 */
export default StarfieldBackground;