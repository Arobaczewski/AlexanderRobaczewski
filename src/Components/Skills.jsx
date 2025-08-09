/*
 * Skills.jsx - Dynamic Technical Skills Showcase Component
 * 
 * BUSINESS IMPACT: This component transforms the traditional static skills list into an
 * engaging, memorable experience that demonstrates both technical competence and creative
 * problem-solving. The dynamic marquee presentation immediately differentiates this
 * portfolio from competitors while showcasing modern web animation techniques.
 * 
 * STRATEGIC SKILL PRESENTATION APPROACH:
 * - Interactive marquee animation demonstrates advanced React component integration
 * - Curated skill selection focuses on current, in-demand technologies
 * - Visual iconography enables immediate skill recognition and memorability
 * - Dual-marquee layout creates dynamic, engaging user experience
 * - Growth mindset messaging reinforces continuous learning commitment
 * 
 * TECHNICAL ACHIEVEMENTS DEMONSTRATED:
 * - Third-party library integration (react-fast-marquee) shows ecosystem knowledge
 * - Advanced CSS animations and micro-interactions showcase frontend expertise
 * - Responsive design principles ensure optimal presentation across devices
 * - Component composition and reusability demonstrate React best practices
 * - Performance-conscious animation implementation prevents UI lag
 * 
 * EMPLOYER VALUE PROPOSITION:
 * - Skill currency: All technologies listed are modern, relevant, and in-demand
 * - Learning agility: "Always learning" messaging shows growth mindset
 * - Creative problem-solving: Innovative presentation format demonstrates thinking beyond conventions
 * - Technical depth: From frontend (React, CSS) to backend (Node.js) to tools (Git, APIs)
 * - Production readiness: Each skill represents deployable, professional capability
 */

import Marquee from "react-fast-marquee"

const Skills = () => {
    /*
     * STRATEGIC SKILLS CURATION - Carefully selected technology portfolio
     * MARKET ALIGNMENT: Each skill represents current industry demand and practical utility
     * CAREER PROGRESSION: Technologies chosen to demonstrate both current capabilities and growth trajectory
     * VISUAL IDENTITY: Emoji icons create memorable, approachable skill presentation
     * 
     * SKILL SELECTION RATIONALE:
     * - React: Core modern frontend framework expertise
     * - JavaScript: Fundamental programming language mastery
     * - Tailwind CSS: Modern utility-first styling methodology
     * - Node.js: Full-stack development capability indicator
     * - Git & GitHub: Essential collaboration and version control proficiency
     * - HTML5/CSS3: Foundational web development competencies
     * - Three.js: Advanced graphics programming and creative development
     * - RESTful APIs: Backend integration and data management skills
     */
    const skills = [
        { name: "React", icon: "⚛️" },         // Modern frontend framework - high demand
        { name: "JavaScript", icon: "🟨" },    // Core programming language - essential
        { name: "Tailwind CSS", icon: "🎨" },  // Modern CSS framework - trending
        { name: "Git & GitHub", icon: "🐙" },  // Version control - collaboration essential
        { name: "HTML5", icon: "🌐" },         // Web fundamentals - foundation
        { name: "CSS3", icon: "🎭" },          // Styling expertise - visual skills
        { name: "Three.js", icon: "🎮" },      // 3D graphics - advanced/creative
        { name: "RESTful APIs", icon: "🔗" },   // Data integration - backend connection
        { name: "Netlify", icon: "🌐" },       // Web Deployment
        { name: "Vercel", icon: "▲" },         // React deployment platform
        { name: "Vite", icon: "⚡" },           // Modern build tool - shows you use cutting-edge tooling
        { name: "npm", icon: "📦" },       // Package management - essential for team collaboration
        { name: "VS Code", icon: "💻" }, 
        { name: "Testing", icon: "✅" }
    ];

    return (
        <section id="skills" className="py-16 lg:py-24 relative">
            {/* 
             * CONSISTENT VISUAL TREATMENT - Portfolio design language maintenance
             * DEPTH CREATION: Gradient overlay adds visual sophistication without content interference
             * ACCESSIBILITY: pointer-events-none ensures interactive elements remain functional
             */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 
                 * SECTION HEADER - Clear skill showcase introduction
                 * BRANDING: "My Tech Stack" creates personal ownership and expertise claim
                 * EMOTIONAL CONNECTION: "Technologies I work with and love" shows passion and enthusiasm
                 * VISUAL HIERARCHY: Smaller header size allows skills content to dominate section
                 */}
                <div className="text-center mb-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                {/* 
                                 * BRAND COLOR APPLICATION - Skill expertise emphasis
                                 * VISUAL IDENTITY: Teal gradient maintains consistent portfolio branding
                                 * EMPHASIS: Color treatment draws attention to technical competency section
                                 */}
                                <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg">
                                    My Tech Stack
                                </span>
                            </h2>
                            {/* 
                             * PASSION MESSAGING - Emotional connection to technology
                             * PSYCHOLOGY: "love" indicates genuine enthusiasm beyond mere competency
                             * CULTURE FIT: Shows alignment with passionate development teams
                             */}
                            <p className="text-gray-200 text-lg drop-shadow-md">
                                Technologies I work with and love
                            </p>
                        </div>
                    </div>
                </div>

                {/* 
                 * FIRST MARQUEE CONTAINER - Primary skills showcase animation
                 * INNOVATION: Marquee animation creates dynamic, engaging skill presentation
                 * DIFFERENTIATION: Unique approach sets portfolio apart from static skill lists
                 * TECHNICAL DEMONSTRATION: Component integration shows React ecosystem knowledge
                 */}
                <div className="relative overflow-hidden">
                    {/* 
                     * GLASS CONTAINER TREATMENT - Visual enhancement and depth creation
                     * FADE EFFECT: Gradient edges create natural visual boundaries
                     * DESIGN CONSISTENCY: Maintains glassmorphism theme throughout portfolio
                     */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 rounded-2xl pointer-events-none"></div>
                        {/* 
                         * PRIMARY MARQUEE CONFIGURATION - Optimized animation settings
                         * PERFORMANCE: speed={50} provides smooth movement without excessive CPU usage
                         * USER CONTROL: pauseOnHover enables examination of individual skills
                         * ACCESSIBILITY: Pause functionality accommodates users with motion sensitivities
                         * STYLING: py-8 provides comfortable vertical spacing around moving elements
                         */}
                        <Marquee
                            gradient={false}           // Disable default gradient for custom styling
                            speed={50}                 // Balanced speed for readability and engagement
                            pauseOnHover={true}        // User interaction and accessibility feature
                            className="py-8"           // Vertical spacing for visual comfort
                        >
                            {/* 
                             * SKILL CARD MAPPING - Dynamic skill presentation generation
                             * SCALABILITY: Map function enables easy skill list updates
                             * CONSISTENCY: Each skill receives identical visual treatment
                             * PERFORMANCE: React key prop enables efficient re-rendering
                             */}
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6"  // Horizontal spacing between skills
                                >
                                    {/* 
                                     * GLOW EFFECT SYSTEM - Premium interaction feedback
                                     * ENGAGEMENT: opacity-0 to opacity-100 creates reward for user attention
                                     * PERFORMANCE: 500ms duration provides smooth but responsive animation
                                     * VISUAL IMPACT: Glow effect creates premium, high-quality interface perception
                                     */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    
                                    {/* 
                                     * GLASS SKILL CARD - Individual skill presentation container
                                     * GLASSMORPHISM: backdrop-blur-md creates sophisticated transparency effect
                                     * INTERACTION DESIGN: Multiple hover effects create engaging micro-interactions
                                     * SCALE ANIMATION: hover:scale-110 creates playful, responsive feel
                                     * ACCESSIBILITY: cursor-pointer indicates interactive element
                                     */}
                                    <div className="relative backdrop-blur-md bg-white/10 px-6 py-4 rounded-xl border border-white/20 hover:border-teal-400/50 hover:bg-white/15 hover:scale-110 hover:shadow-xl hover:shadow-teal-400/20 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            {/* 
                                             * SKILL ICON - Visual skill identification
                                             * MEMORABILITY: Emoji icons create immediate visual association
                                             * ANIMATION: group-hover:scale-125 adds playful interaction
                                             * ACCESSIBILITY: Large text size ensures visibility across devices
                                             */}
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
                                            {/* 
                                             * SKILL NAME - Clear technology identification
                                             * TYPOGRAPHY: font-semibold and text-lg ensure readability during animation
                                             * COLOR TRANSITION: hover:text-teal-200 provides brand-consistent feedback
                                             * SPACING: whitespace-nowrap prevents text wrapping during animation
                                             */}
                                            <span className="text-white font-semibold text-lg group-hover:text-teal-200 transition-colors duration-300 drop-shadow-md">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* 
                 * SECOND MARQUEE ROW - Enhanced visual variety and engagement
                 * DESIGN STRATEGY: Dual rows create dynamic, layered presentation
                 * DIRECTION VARIATION: Right-to-left movement creates visual interest and balance
                 * SPEED DIFFERENTIATION: Slightly slower speed (40 vs 50) creates natural rhythm variation
                 */}
                <div className="relative overflow-hidden mt-8">
                    {/* 
                     * REVERSE GRADIENT TREATMENT - Visual balance and symmetry
                     * DIRECTIONAL BALANCE: bg-gradient-to-l mirrors first marquee's gradient direction
                     * VISUAL HARMONY: Consistent styling with directional variation creates sophisticated layout
                     */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black/30 rounded-2xl pointer-events-none"></div>
                        {/* 
                         * REVERSE MARQUEE CONFIGURATION - Complementary animation settings
                         * DIRECTION: "right" creates counter-movement to first marquee
                         * SPEED: 40 provides slight variation while maintaining visual coherence
                         * CONTENT: skills.slice().reverse() creates mirrored content presentation
                         */}
                        <Marquee
                            gradient={false}
                            speed={40}                 // Slightly slower for visual variety
                            direction="right"          // Opposite direction creates dynamic effect
                            pauseOnHover={true}        // Consistent user interaction capability
                            className="py-8"
                        >
                            {/* 
                             * REVERSED SKILLS ARRAY - Content variation strategy
                             * VISUAL INTEREST: Different skill order prevents repetitive visual pattern
                             * CONTENT STRATEGY: Skills appear in different sequence, encouraging full viewing
                             */}
                            {skills.slice().reverse().map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6"
                                >
                                    {/* 
                                     * ENHANCED GLOW EFFECT - Second row visual differentiation
                                     * INTENSITY: Higher opacity (from-teal-400/30) creates stronger glow effect
                                     * VISUAL HIERARCHY: More prominent glow distinguishes second row
                                     */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    
                                    {/* 
                                     * TEAL-THEMED SKILL CARD - Brand color emphasis variation
                                     * VISUAL VARIETY: Teal background treatment differentiates second row
                                     * BRAND REINFORCEMENT: Strong teal theming reinforces portfolio color identity
                                     * COLOR HARMONY: Teal variations create sophisticated color progression
                                     */}
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-teal-900/20 to-teal-800/20 px-6 py-4 rounded-xl border border-teal-500/30 hover:border-teal-400/70 hover:from-teal-800/30 hover:to-teal-700/30 hover:scale-110 hover:shadow-xl hover:shadow-teal-400/30 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
                                            {/* 
                                             * INVERTED COLOR SCHEME - Visual variation and emphasis
                                             * BASE COLOR: text-teal-200 creates teal-on-teal sophisticated look
                                             * HOVER STATE: group-hover:text-white provides clear interaction feedback
                                             * CONTRAST: Color inversion from first row creates visual interest
                                             */}
                                            <span className="text-teal-200 font-semibold text-lg group-hover:text-white transition-colors duration-300 drop-shadow-md">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* 
                 * GROWTH MINDSET FOOTER - Learning commitment and future orientation
                 * PSYCHOLOGY: "Always learning, always growing" appeals to employer desire for adaptable talent
                 * POSITIONING: Shows commitment to staying current with evolving technology landscape
                 * VISUAL TREATMENT: Glassmorphism styling maintains design consistency
                 */}
                <div className="text-center mt-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-white/5 px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
                            {/* 
                             * INSPIRATIONAL MESSAGING - Professional development commitment
                             * SPARKLE EMOJI: Adds personality while maintaining professionalism
                             * GROWTH MINDSET: Critical trait for technology roles where skills evolve rapidly
                             * RETENTION FACTOR: Indicates long-term learning commitment and adaptability
                             */}
                            <p className="text-teal-200 font-medium drop-shadow-md">
                                ✨ Always learning, always growing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*
 * COMPONENT EXPORT - Professional module architecture
 * SIMPLICITY: Clean default export enables straightforward integration
 * REUSABILITY: Self-contained component with minimal external dependencies
 * MAINTAINABILITY: Clear structure facilitates easy updates and skill additions
 * 
 * BUSINESS IMPACT MEASUREMENT OPPORTUNITIES:
 * - Hover interaction rates on individual skill cards
 * - Time spent in skills section (engagement measurement)
 * - Correlation between skills viewed and contact form submissions
 * - A/B testing for static vs. animated skill presentation
 * 
 * TECHNICAL ENHANCEMENT OPPORTUNITIES:
 * - Skill proficiency levels (beginner, intermediate, advanced)
 * - Skill category grouping (frontend, backend, tools, etc.)
 * - Dynamic skill loading from external data source
 * - Integration with GitHub to show language usage statistics
 * - Skill certification badges or timeline of learning
 * - Interactive skill filtering or search functionality
 * 
 * PERFORMANCE CONSIDERATIONS:
 * - Monitor animation performance on lower-end devices
 * - Implement intersection observer for animation triggers
 * - Consider reduced motion preferences for accessibility
 * - Optimize marquee library bundle size impact
 * 
 * ACCESSIBILITY ENHANCEMENTS:
 * - Keyboard navigation support for skill cards
 * - Screen reader announcements for skill information
 * - High contrast mode compatibility
 * - Respect user preferences for reduced motion
 */
export default Skills