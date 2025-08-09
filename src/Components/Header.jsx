/*
 * Header.jsx - Portfolio Navigation Component
 * 
 * BUSINESS IMPACT: This component serves as the primary navigation system for the portfolio,
 * creating first impressions and enabling seamless user journey through content sections.
 * The sophisticated glassmorphism design demonstrates advanced CSS skills while maintaining
 * professional aesthetics that build trust with potential employers.
 * 
 * KEY TECHNICAL ACHIEVEMENTS:
 * - Advanced z-index layering prevents visual bleeding and maintains clean presentation
 * - Glassmorphism effects using backdrop-blur and transparency create modern UI aesthetic
 * - Responsive design with mobile-first approach (hidden navigation on mobile)
 * - Micro-interactions and hover effects enhance user engagement
 * - Semantic navigation structure supports accessibility and SEO
 * 
 * EMPLOYER VALUE DEMONSTRATION:
 * - CSS mastery through complex layering and visual effects
 * - Attention to detail in preventing common UI issues (shadow bleeding)
 * - Understanding of modern design trends (glassmorphism, micro-animations)
 * - Responsive design principles for cross-device compatibility
 * - Performance-conscious design with optimized visual effects
 */

import { User, Brain, Laptop, Contact } from "lucide-react";

const Header = () => {
    return (
        <div className="w-full bg-transparent relative">
            {/* 
             * MAIN BACKGROUND SHADOW - Foundation layer visual enhancement
             * LAYERING STRATEGY: Lowest z-index (z-0) ensures proper stacking order
             * DESIGN PURPOSE: Creates subtle depth without interfering with interactive elements
             * ACCESSIBILITY: pointer-events-none maintains navigation functionality
             * VISUAL HARMONY: Gradient matches overall portfolio aesthetic
             */}
            <div className="absolute inset-2 bg-gradient-to-r from-black/20 via-transparent to-black/15 rounded-2xl pointer-events-none z-0"></div>
            
            {/* 
             * MAIN HEADER CONTAINER - Primary navigation structure
             * LAYOUT: Flexbox ensures responsive alignment between logo and navigation
             * Z-INDEX: High value (z-20) ensures header stays above background elements
             * POSITIONING: Relative positioning enables proper z-index stacking context
             * RESPONSIVE: py-5 provides consistent vertical spacing across devices
             */}
            <header className="flex justify-between items-center text-white py-5 mx-auto relative z-20">
                {/* 
                 * LOGO SECTION - Brand identity and visual anchor
                 * BRANDING STRATEGY: "Alex Robo" creates memorable, approachable brand identity
                 * FLEXIBILITY: flex-shrink-0 prevents logo compression on small screens
                 * VISUAL HIERARCHY: Larger font size establishes brand prominence
                 */}
                <div className="flex flex-shrink-0 items-center">
                    {/* 
                     * LOGO CONTAINER - Advanced glassmorphism implementation
                     * HOVER EFFECTS: Group hover system enables coordinated animations
                     * LAYERING SOLUTION: Careful z-index management prevents visual conflicts
                     */}
                    <div className="relative group">
                        {/* 
                         * CONTROLLED GLOW EFFECT - Sophisticated hover enhancement
                         * PERFORMANCE OPTIMIZATION: Reduced blur and opacity prevent GPU overload
                         * TRANSITION STRATEGY: opacity-0 to opacity-75 creates smooth reveal
                         * VISUAL REFINEMENT: Lower opacity values prevent overwhelming glow effects
                         * Z-INDEX PRECISION: z-10 positions glow between background and content
                         */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/15 to-teal-600/15 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition duration-500 z-10"></div>
                        
                        {/* 
                         * GLASSMORPHISM LOGO CONTAINER - Modern UI design implementation
                         * BACKDROP BLUR: Creates sophisticated glass-like transparency effect
                         * BORDER SYSTEM: Multi-layered borders create depth and refinement
                         * HOVER STATES: Color transitions provide interactive feedback
                         * RESPONSIVE SPACING: ml-5 maintains consistent left margin alignment
                         * Z-INDEX CONTROL: z-20 ensures logo text appears above all effects
                         */}
                        <div className="relative backdrop-blur-md ml-5 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 shadow-lg z-20">
                            <div className="text-3xl md:text-4xl font-bold">
                                {/* 
                                 * GRADIENT TEXT EFFECT - Premium brand presentation
                                 * TECHNIQUE: bg-clip-text creates gradient text without background bleeding
                                 * COLOR CHOICE: Teal gradient maintains brand consistency across portfolio
                                 * ACCESSIBILITY: drop-shadow-lg improves text readability on varied backgrounds
                                 * RESPONSIVE: Font size scales appropriately for mobile (text-3xl) and desktop (md:text-4xl)
                                 */}
                                <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg">
                                    Alex Robo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 
                 * NAVIGATION SECTION - Primary user journey control
                 * RESPONSIVE STRATEGY: hidden md:block implements mobile-first design
                 * MOBILE CONSIDERATION: Hidden on small screens to prevent overcrowding
                 * DESKTOP OPTIMIZATION: Full navigation available on larger screens
                 * 
                 * BUSINESS JUSTIFICATION: Single-page application with smooth scrolling
                 * provides better user experience than traditional multi-page navigation
                 */}
                <nav className="hidden md:block">
                    {/* 
                     * NAVIGATION CONTAINER - Glassmorphism navigation wrapper
                     * DESIGN CONSISTENCY: Matches logo container styling for visual harmony
                     * SHADOW CONTROL: Reduced blur prevents visual interference with text
                     */}
                    <div className="relative group">
                        {/* 
                         * SUBTLE BACKGROUND GLOW - Navigation enhancement without distraction
                         * PERFORMANCE: Lower opacity (opacity-60) reduces GPU load while maintaining effect
                         * VISUAL BALANCE: Smaller blur radius prevents overwhelming the navigation text
                         * LAYERING: z-10 positioning ensures proper stacking with navigation items
                         */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/8 to-teal-600/8 rounded-2xl blur-md opacity-60 z-10"></div>
                        
                        {/* 
                         * NAVIGATION WRAPPER - Container for navigation items
                         * GLASSMORPHISM: backdrop-blur-md creates consistent visual treatment
                         * PADDING: p-2 provides comfortable spacing around navigation items
                         * BORDER SYSTEM: Subtle borders create definition without harsh lines
                         * POSITIONING: mr-5 maintains symmetric spacing with logo ml-5
                         */}
                        <div className="relative mr-5 backdrop-blur-md bg-white/5 p-2 rounded-2xl border border-white/10 shadow-xl z-20">
                            {/* 
                             * NAVIGATION LIST - Semantic HTML for accessibility and SEO
                             * LAYOUT: Flexbox with space-x-2 creates consistent item spacing
                             * TYPOGRAPHY: text-lg ensures readability while maintaining elegance
                             * SEMANTIC STRUCTURE: Proper ul/li structure supports screen readers
                             */}
                            <ul className="flex space-x-2 text-lg">
                                {/* 
                                 * ABOUT NAVIGATION ITEM - User story and background section
                                 * ANCHOR LINKS: Hash-based navigation enables smooth scrolling within SPA
                                 * ICON STRATEGY: User icon immediately communicates personal/about content
                                 */}
                                <li>
                                    {/* 
                                     * NAVIGATION LINK - Advanced interaction design
                                     * MICRO-INTERACTIONS: Multiple hover effects create engaging experience
                                     * ACCESSIBILITY: Focus states and clear visual feedback
                                     * PERFORMANCE: transition-all enables smooth state changes
                                     * LAYERING: z-30 ensures interactive elements stay on top
                                     * 
                                     * HOVER EFFECT BREAKDOWN:
                                     * - Text color changes to teal (brand reinforcement)
                                     * - Background opacity increases (visual feedback)
                                     * - Border appears (definition and focus indication)
                                     * - Icon scales (playful micro-interaction)
                                     * - Shadow appears (depth and importance)
                                     */}
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-teal-300 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#about">
                                        {/* 
                                         * NAVIGATION ICON - Visual content identification
                                         * ANIMATION: scale-110 on hover creates playful interaction
                                         * TIMING: 200ms duration provides snappy but smooth animation
                                         * ACCESSIBILITY: Icon complements text, doesn't replace it
                                         */}
                                        <User className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        {/* 
                                         * NAVIGATION TEXT - Clear section labeling
                                         * TYPOGRAPHY: font-medium provides appropriate visual weight
                                         * ACCESSIBILITY: drop-shadow-lg improves readability
                                         * CONSISTENCY: text-shadow maintains visual harmony
                                         */}
                                        <span className="font-medium drop-shadow-lg text-shadow">About</span>
                                    </a> 
                                </li>
                                
                                {/* 
                                 * SKILLS NAVIGATION ITEM - Technical competency showcase section
                                 * ICON CHOICE: Brain icon represents knowledge and technical thinking
                                 * STRATEGIC POSITIONING: Second position in navigation follows logical user journey
                                 */}
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-teal-300 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#skills">
                                        <Brain className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        <span className="font-medium drop-shadow-lg text-shadow">Skills</span>
                                    </a>
                                </li>
                                
                                {/* 
                                 * PROJECTS NAVIGATION ITEM - Portfolio work demonstration section
                                 * ICON STRATEGY: Laptop icon immediately communicates technical projects
                                 * USER JOURNEY: Third position allows users to learn about person/skills before seeing work
                                 */}
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-teal-300 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#projects">
                                        <Laptop className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        <span className="font-medium drop-shadow-lg text-shadow">Projects</span>
                                    </a>
                                </li>
                                
                                {/* 
                                 * CONTACT NAVIGATION ITEM - Conversion and engagement section
                                 * STRATEGIC PLACEMENT: Final position follows natural progression toward action
                                 * ICON COMMUNICATION: Contact icon clearly indicates communication/connection
                                 * CONVERSION OPTIMIZATION: Prominent placement encourages user engagement
                                 */}
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-teal-300 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#contact">
                                        <Contact className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        <span className="font-medium drop-shadow-lg text-shadow">Contact</span>
                                    </a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

/*
 * COMPONENT EXPORT - Clean module architecture
 * ES6 STANDARD: Default export follows modern JavaScript conventions
 * REUSABILITY: Component structure enables easy integration across different layouts
 * MAINTAINABILITY: Clear separation of concerns facilitates updates and testing
 * 
 * TECHNICAL DEBT CONSIDERATIONS:
 * - Mobile navigation could be enhanced with hamburger menu for better UX
 * - Active state indicators could show current section for better navigation feedback
 * - Keyboard navigation support could be enhanced for improved accessibility
 * 
 * PERFORMANCE OPTIMIZATIONS IMPLEMENTED:
 * - Reduced blur effects prevent GPU overload
 * - Controlled opacity transitions minimize repainting
 * - Efficient z-index layering reduces rendering complexity
 * - Single-component structure reduces bundle size
 */
export default Header;