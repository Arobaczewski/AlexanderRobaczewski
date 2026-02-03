/*
 * Hero.jsx - Portfolio Landing Section & Primary Conversion Driver
 * 
 * BUSINESS IMPACT: This component serves as the critical first impression and primary
 * conversion funnel for the entire portfolio. Within seconds, visitors must understand
 * who I am, what I do, and how to take action. The strategic layout and compelling
 * visual design work together to maximize engagement and drive contact conversions.
 * 
 * CONVERSION OPTIMIZATION STRATEGY:
 * - Clear value proposition in the headline immediately communicates expertise
 * - Social proof through professional social media presence builds credibility
 * - Dual call-to-action buttons cater to different user intents (contact vs. resume)
 * - Professional headshot creates personal connection and trustworthiness
 * - Modern glassmorphism design demonstrates technical competence visually
 * 
 * TECHNICAL ACHIEVEMENTS:
 * - Responsive grid layout ensures optimal presentation across all devices
 * - Advanced CSS effects (glassmorphism, gradients) showcase frontend skills
 * - Performance-optimized animations enhance UX without sacrificing speed
 * - Accessibility features support inclusive design principles
 * - Strategic visual hierarchy guides user attention to conversion elements
 * 
 * EMPLOYER VALUE DEMONSTRATION:
 * - Landing page optimization shows understanding of business goals
 * - Modern design trends prove awareness of current web standards
 * - Conversion-focused layout demonstrates marketing/business acumen
 * - Technical execution showcases frontend development expertise
 */

import { Github, Linkedin, Download, Contact, FolderOpenDot } from "lucide-react"

const Hero = () => {
    return (
        <section className="relative py-8 lg:py-16">
            {/* 
             * BACKGROUND ENHANCEMENT - Subtle depth creation
             * DESIGN PURPOSE: Creates visual depth without overwhelming content
             * PERFORMANCE: pointer-events-none maintains interactive element functionality
             * ACCESSIBILITY: Low opacity maintains sufficient contrast for text readability
             * VISUAL HIERARCHY: Draws attention to content within the gradient boundaries
             */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/30 via-transparent to-black/20 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 
                 * RESPONSIVE GRID LAYOUT - Optimal content presentation strategy
                 * MOBILE-FIRST: Single column stacks content vertically on small screens
                 * DESKTOP OPTIMIZATION: Two-column layout maximizes horizontal space usage
                 * VISUAL BALANCE: gap-8 lg:gap-12 provides comfortable spacing between elements
                 * ALIGNMENT: items-center ensures vertical centering for professional appearance
                 * ORDER CONTROL: Custom ordering places image first on mobile, text first on desktop
                 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* 
                     * TEXT CONTENT SECTION - Primary conversion and messaging area
                     * STRATEGIC POSITIONING: order-2 lg:order-1 optimizes content priority by device
                     * LAYOUT: Flexbox with space-y-8 creates consistent vertical rhythm
                     * HIERARCHY: justify-center ensures optimal content alignment
                     */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
                        {/* 
                         * MAIN HEADLINE CONTAINER - Critical first impression element
                         * BUSINESS PSYCHOLOGY: Glassmorphism creates premium, modern perception
                         * INTERACTION DESIGN: Group hover effects reward user engagement
                         * VISUAL IMPACT: Multi-layered effects create memorable first impression
                         */}
                        <div className="relative group">
                            {/* 
                             * DYNAMIC GLOW EFFECT - Enhanced interaction feedback
                             * ENGAGEMENT STRATEGY: opacity-75 to opacity-100 creates subtle animation
                             * PERFORMANCE: Dual transition timings (1000ms/200ms) optimize perceived responsiveness
                             * VISUAL PREMIUM: Blur and gradient effects demonstrate advanced CSS capabilities
                             * ATTENTION CAPTURE: Glow effect draws focus to most important content
                             */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            
                            {/* 
                             * GLASSMORPHISM CONTENT CONTAINER - Modern UI trend implementation
                             * VISUAL SOPHISTICATION: backdrop-blur-md creates professional glass effect
                             * DEPTH CREATION: gradient background and border-white/20 add dimensional layers
                             * CONTENT PROTECTION: Solid background ensures text readability across all backgrounds
                             * SPACING: p-8 provides generous padding for comfortable reading experience
                             */}
                            <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                                {/* 
                                 * PRIMARY HEADLINE - Strategic messaging and conversion optimization
                                 * TYPOGRAPHY: text-4xl lg:text-5xl ensures commanding presence across devices
                                 * READABILITY: leading-tight optimizes line spacing for multi-line headlines
                                 * VISUAL HIERARCHY: Font weight and size immediately establish importance
                                 */}
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                                    {/* 
                                     * OPENING GREETING - Personal connection establishment
                                     * COLOR STRATEGY: White to gray gradient ensures high contrast readability
                                     * ACCESSIBILITY: drop-shadow-lg improves text visibility on varied backgrounds
                                     * PSYCHOLOGY: "My name is" creates immediate personal connection
                                     */}
                                    <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                        My name is
                                    </span>
                                    {/* 
                                     * NAME HIGHLIGHTING - Brand identity emphasis
                                     * BRAND COLOR: Teal gradient reinforces consistent color scheme throughout portfolio
                                     * MEMORABILITY: Color contrast makes name more memorable and recognizable
                                     * PERSONAL BRANDING: Establishes "Alexander Robaczewski" as the professional brand
                                     */}
                                    <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg"> Alexander Robaczewski,</span>
                                    {/* 
                                     * FRIENDLY ANIMATION - Personality and approachability
                                     * ENGAGEMENT: animate-wave creates subtle movement that catches attention
                                     * PERSONALITY: Wave emoji adds human touch to professional presentation
                                     * INLINE-BLOCK: Prevents emoji from affecting line spacing
                                     */}
                                    <span className="inline-block animate-wave drop-shadow-lg">👋</span>
                                    <br />
                                    {/* 
                                     * ROLE INTRODUCTION - Professional positioning
                                     * READABILITY: Line break creates natural reading pause and visual separation
                                     * HIERARCHY: Continues white text for supporting information
                                     */}
                                    <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                        and I'm a
                                    </span>
                                    {/* 
                                     * PROFESSION HIGHLIGHT - Core value proposition
                                     * POSITIONING: "Web Developer" immediately communicates relevant expertise
                                     * VISUAL EMPHASIS: Teal gradient makes profession stand out for instant recognition
                                     * SEO BENEFIT: Clear profession declaration supports search optimization
                                     */}
                                    <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg"> Web Developer</span>.
                                </h1>
                            </div>
                        </div>
                        
                        {/* 
                         * SOCIAL MEDIA LINKS SECTION - Credibility and social proof
                         * TRUST BUILDING: Professional social presence validates expertise and experience
                         * NETWORKING: Provides multiple touchpoints for professional connection
                         * DESIGN CONSISTENCY: Glassmorphism styling matches main content container
                         */}
                        <div className="relative group">
                            {/* 
                             * SUBTLE CONTAINER GLOW - Understated visual enhancement
                             * DESIGN BALANCE: Lower opacity prevents competition with main headline
                             * CONSISTENCY: Maintains visual language established in headline container
                             */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/10 to-teal-600/10 rounded-2xl blur-lg opacity-75"></div>
                            
                            {/* 
                             * SOCIAL LINKS CONTAINER - Professional social proof presentation
                             * LAYOUT: Flexbox with gap-6 ensures consistent spacing between social icons
                             * SIZING: w-fit prevents container from expanding beyond content needs
                             * ACCESSIBILITY: Glassmorphism treatment maintains visual consistency
                             */}
                            <div className="relative flex items-center gap-6 backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl w-fit">
                                {/* 
                                 * GITHUB LINK - Technical portfolio and code demonstration
                                 * CREDIBILITY: Direct access to code repositories validates technical claims
                                 * TRANSPARENCY: Public code shows actual development capabilities
                                 * INTERACTION: hover:scale-125 creates engaging micro-interaction
                                 * ACCESSIBILITY: aria-label provides screen reader support
                                 */}
                                <a 
                                    href="https://github.com/Arobaczewski"
                                    className="text-teal-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg hover:drop-shadow-2xl"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                {/* 
                                 * LINKEDIN LINK - Professional networking and career history
                                 * PROFESSIONAL VALIDATION: LinkedIn profile provides employment verification
                                 * NETWORKING: Enables professional relationship building
                                 * RECOMMENDATIONS: Potential access to professional endorsements
                                 */}
                                <a 
                                    href="https://www.linkedin.com/in/alexander-robaczewski"
                                    className="text-teal-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg hover:drop-shadow-2xl"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        
                        {/* 
                         * CALL-TO-ACTION BUTTONS - Primary conversion mechanisms
                         * DUAL STRATEGY: Two buttons cater to different user intents and decision stages
                         * RESPONSIVE: flex-col sm:flex-row adapts to screen size for optimal usability
                         * HIERARCHY: Gap and alignment create clear visual separation and choice
                         */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {/* 
                             * CONTACT CTA - Primary conversion button for immediate engagement
                             * PSYCHOLOGY: "Contact Me" creates direct, personal invitation
                             * DESIGN CONSISTENCY: Styling matches project buttons for visual harmony
                             * INTERACTION: Multiple hover effects create engaging user experience
                             * ACCESSIBILITY: Clear labeling and icon support diverse user needs
                             */}
                            <a 
                                href="/#contact" 
                                className="flex items-center gap-2 px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 hover:border-teal-400/50 text-gray-200 hover:text-teal-200 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 group shadow-lg"
                            >
                                {/* 
                                 * CONTACT ICON - Visual communication enhancement
                                 * ANIMATION: group-hover:scale-110 creates playful micro-interaction
                                 * TIMING: 200ms duration provides snappy but smooth response
                                 * SYMBOLISM: Contact icon immediately communicates button purpose
                                 */}
                                <Contact className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                Contact Me
                            </a>
                            {/* 
                             * RESUME CTA - Secondary conversion for formal evaluation
                             * TARGET ATTRIBUTE: Opens in new tab to prevent navigation away from portfolio
                             * SECURITY: rel="noopener noreferrer" prevents security vulnerabilities
                             * VISUAL PROMINENCE: Gradient styling makes resume download highly visible
                             * PROGRESSIVE ENHANCEMENT: gap-2 to gap-3 creates subtle animation feedback
                             */}
                             <a 
                                href="#projects"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-600 hover:to-teal-400 hover:shadow-2xl hover:shadow-teal-400/40 rounded-full text-white font-semibold uppercase tracking-wider text-sm gap-2 hover:gap-3 transition-all duration-300 group shadow-lg"
                            >
                                Projects
                                {/* 
                                 * DOWNLOAD ICON - Clear action indication
                                 * UNIVERSAL SYMBOL: Download icon immediately communicates file retrieval
                                 * SIZE CONSISTENCY: w-4 h-4 matches contact button icon for visual harmony
                                 */}
                                <FolderOpenDot className="w-4 h-4" />    
                            </a>
                            <a 
                                href="/Alex's_Resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-600 hover:to-teal-400 hover:shadow-2xl hover:shadow-teal-400/40 rounded-full text-white font-semibold uppercase tracking-wider text-sm gap-2 hover:gap-3 transition-all duration-300 group shadow-lg"
                            >
                                Get Resume 
                                {/* 
                                 * DOWNLOAD ICON - Clear action indication
                                 * UNIVERSAL SYMBOL: Download icon immediately communicates file retrieval
                                 * SIZE CONSISTENCY: w-4 h-4 matches contact button icon for visual harmony
                                 */}
                                <Download className="w-4 h-4" />    
                            </a>
                        </div>
                    </div>
                    
                    {/* 
                     * PROFESSIONAL HEADSHOT SECTION - Trust building and personal connection
                     * PSYCHOLOGY: Human faces create immediate emotional connection and trust
                     * POSITIONING: order-1 lg:order-2 ensures image appears first on mobile for impact
                     * RESPONSIVE: flex justify-center lg:justify-end optimizes layout for different screens
                     */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        {/* 
                         * IMAGE CONTAINER - Professional presentation wrapper
                         * RESPONSIVE SIZING: max-w-md w-full ensures appropriate scaling across devices
                         * VISUAL ENHANCEMENT: Shadow effects create depth and premium appearance
                         * INTERACTION: hover:shadow-teal-400/20 creates subtle brand-colored glow on interaction
                         * OVERFLOW CONTROL: overflow-hidden ensures clean container boundaries
                         */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full hover:shadow-teal-400/20 hover:shadow-2xl transition-shadow duration-300">
                            {/* 
                             * PROFESSIONAL HEADSHOT - Personal branding and trust building
                             * OPTIMIZATION: object-cover ensures proper aspect ratio maintenance
                             * ACCESSIBILITY: Alt text provides meaningful description for screen readers
                             * FILE ORGANIZATION: /headshot.png indicates organized asset management
                             * RESPONSIVE: w-full h-auto ensures proper scaling behavior
                             */}
                            <img 
                                src='/headshot.png'
                                alt="Alex coding" 
                                className="w-full h-auto object-cover"
                            />
                            {/* 
                             * SUBTLE IMAGE OVERLAY - Visual enhancement without distraction
                             * PURPOSE: Creates slight gradient effect for visual sophistication
                             * TRANSPARENCY: from-black/10 to-transparent provides subtle depth
                             * INTERACTION: pointer-events-none prevents overlay from blocking image
                             */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*
 * COMPONENT EXPORT - Professional module structure
 * ARCHITECTURE: Clean default export enables easy integration across portfolio
 * REUSABILITY: Self-contained component can be used in different layout contexts
 * MAINTAINABILITY: Clear structure facilitates updates and testing
 * 
 * BUSINESS METRICS THIS COMPONENT SHOULD DRIVE:
 * - Time on site (engaging first impression encourages exploration)
 * - Contact form completions (clear CTAs drive conversions)
 * - Resume downloads (provides qualification verification pathway)
 * - Social media connections (builds ongoing professional relationship)
 * 
 * CONVERSION OPTIMIZATION CONSIDERATIONS:
 * - A/B testing opportunities: headline variations, CTA button colors/text
 * - Analytics integration: track which CTAs perform better
 * - User feedback: monitor which social links get most engagement
 * - Performance monitoring: ensure animations don't impact load times
 */
export default Hero