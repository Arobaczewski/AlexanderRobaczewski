/*
 * Projects.jsx - Strategic Portfolio Showcase & Development Journey Timeline
 * 
 * BUSINESS IMPACT: This component serves as the primary proof-of-concept showcase,
 * demonstrating technical progression, problem-solving abilities, and real-world
 * business impact. The timeline format tells a compelling story of rapid skill
 * development while quantifying actual business value delivered.
 * 
 * STRATEGIC PORTFOLIO ARCHITECTURE:
 * - Chronological progression shows learning velocity and skill development
 * - Quantified business impact (45+ minutes saved daily) proves ROI capability  
 * - Technology stack diversity demonstrates adaptability and modern skills
 * - Production deployment links provide immediate validation of working code
 * - GitHub integration enables code review and technical assessment
 * 
 * EMPLOYER VALUE DEMONSTRATION:
 * - Real business problem solving (Tip Calculator workplace implementation)
 * - API integration expertise (WeatherBeatz multi-API orchestration)
 * - Modern React mastery (Portfolio showcasing advanced concepts)
 * - Project management skills (timeline, scope, delivery tracking)
 * - Production deployment experience (live, working applications)
 * 
 * TECHNICAL ACHIEVEMENTS SHOWCASED:
 * - Complex state management and data flow architecture
 * - Responsive timeline UI with sophisticated visual effects
 * - Dynamic content rendering with category-based styling
 * - Advanced CSS animations and micro-interactions
 * - Strategic information architecture for optimal user engagement
 */

import { ExternalLink, Github, Calendar, Award, Code, Users } from "lucide-react"

const ProjectsTimeline = () => {
    /*
     * PROJECTS DATA STRUCTURE - Strategic project portfolio curation
     * BUSINESS INTELLIGENCE: Each project demonstrates different skill sets and value propositions
     * PROGRESSION NARRATIVE: Projects ordered to show increasing complexity and technical sophistication
     * IMPACT QUANTIFICATION: Concrete metrics (45+ minutes saved) prove business value creation
     * 
     * PROJECT SELECTION STRATEGY:
     * 1. Tip Calculator: Demonstrates immediate business value and problem-solving
     * 2. WeatherBeatz: Shows API integration skills and creative thinking
     * 3. Portfolio Website: Proves comprehensive React mastery and design skills
     */
    const projects = [
        {
            id: 1,
            title: "Tip Calculator",
            subtitle: "Business Solution",
            date: "May 2025",
            type: "Utility App",
            /*
             * BUSINESS VALUE EMPHASIS - Real workplace implementation
             * QUANTIFIED IMPACT: "45+ minutes saved daily" provides concrete ROI measurement
             * ADOPTION PROOF: "Used daily by management team" shows practical value and user acceptance
             * PROBLEM-SOLUTION FIT: Addresses actual business pain point with technical solution
             */
            description: "A React-based tip calculator that revolutionized daily operations at my workplace, reducing calculation time from over an hour to just 15 minutes. Used daily by management team.",
            impact: "45+ minutes saved daily",
            /*
             * TECHNICAL STACK DOCUMENTATION - Demonstrates core React competencies
             * FOUNDATION SKILLS: React, JavaScript, CSS show solid frontend fundamentals
             * ARCHITECTURE: State Management indicates understanding of complex data flow
             */
            techStack: ["React", "JavaScript", "CSS", "State Management"],
            features: [
                "Real-time calculations",    // Performance optimization
                "Multiple split options",    // Complex business logic handling
                "Save/load presets",        // Data persistence and user experience
                "Mobile responsive"         // Cross-platform accessibility
            ],
            liveUrl: "https://ayrtips.netlify.app/",
            githubUrl: "https://github.com/Arobaczewski",
            status: "Production",           // Live business application
            category: "business"            // Business value categorization
        },
        {
            id: 2,
            title: "WeatherBeatz",
            subtitle: "API Integration Project", 
            date: "June 2025",
            type: "Web Application",
            /*
             * API INTEGRATION EXPERTISE - Complex third-party service orchestration
             * INNOVATION: Novel concept combining weather data with music recommendations
             * TECHNICAL COMPLEXITY: Multiple API coordination (geolocation, weather, Spotify)
             * USER EXPERIENCE: Dynamic UI adaptation based on external data
             */
            description: "An innovative app that recommends Spotify playlists based on current weather conditions using geolocation and real-time weather data.",
            impact: "Complex API Integration",
            /*
             * DIVERSE TECHNOLOGY STACK - API integration and external service management
             * THIRD-PARTY APIS: Spotify API, OpenWeather API show external service integration
             * VANILLA TECHNOLOGIES: JavaScript, CSS, HTML prove fundamental web skills
             */
            techStack: ["JavaScript", "Spotify API", "OpenWeather API", "CSS", "HTML"],
            features: [
                "Geolocation detection",           // Browser API utilization
                "Real-time weather data",         // External API data fetching
                "Spotify playlist recommendations", // Complex API authentication/integration
                "Dynamic UI based on weather"     // Responsive UI based on data
            ],
            liveUrl: "https://weatherbeatz.netlify.app/",
            githubUrl: "https://github.com/Arobaczewski",
            status: "Live",                       // Deployed and functional
            category: "api"                       // API integration focus
        },
        {
            id: 3,
            title: "Robo's Wishlist",
            subtitle: "Ecommerce Showcase",
            date: "July 2025", 
            type: "Ecommerce Site",
            /*
             * COMPREHENSIVE REACT MASTERY - Advanced framework utilization
             * PROFESSIONAL DEVELOPMENT: "from scratch" shows ability to architect complete solutions
             * DESIGN SKILLS: "modern design principles" demonstrates UI/UX competence
             * BEST PRACTICES: "professional development practices" indicates code quality awareness
             */
            description: "A comprehensive portfolio website built from scratch showcasing advanced React concepts, modern design principles, and professional development practices.",
            impact: "Complete React Mastery",
            /*
             * ADVANCED TECHNOLOGY STACK - Modern React ecosystem expertise
             * STYLING: Tailwind CSS shows utility-first CSS methodology
             * STATE MANAGEMENT: Context API demonstrates global state architecture
             * INTEGRATION: EmailJS shows form handling and email service integration
             * ANIMATION: Three.js indicates 3D graphics and advanced visual capabilities
             */
            techStack: ["React", "Tailwind CSS", "Context API", "EmailJS", "Three.js"],
            features: [
                "Dynamic routing",           // SPA navigation architecture
                "Global state management",   // Complex application state handling
                "Email integration",        // Third-party service integration
                "Responsive design",        // Cross-device compatibility
                "Interactive animations"    // Enhanced user experience
            ],
            liveUrl: "https://roboswishlist.netlify.app/", 
            githubUrl: "https://github.com/Arobaczewski",
            status: "Current",              // Active development project
            category: "portfolio"           // Portfolio/showcase categorization
        }
    ];

    /*
     * CATEGORY ICON MAPPING SYSTEM - Visual categorization and quick recognition
     * BUSINESS STRATEGY: Icons enable immediate project type identification
     * USER EXPERIENCE: Visual cues improve content scannability and comprehension
     * SCALABILITY: Switch statement allows easy addition of new project categories
     */
    const getCategoryIcon = (category) => {
        switch(category) {
            case 'business': return <Award className="w-5 h-5" />;      // Business value emphasis
            case 'api': return <Code className="w-5 h-5" />;           // Technical complexity
            case 'portfolio': return <Users className="w-5 h-5" />;    // Showcase/demonstration
            default: return <Code className="w-5 h-5" />;              // Default technical icon
        }
    };

    /*
     * CATEGORY COLOR CODING SYSTEM - Visual differentiation and brand reinforcement
     * PSYCHOLOGY: Different colors create mental associations with project types
     * VISUAL HIERARCHY: Color coding enables quick project type identification
     * BRAND CONSISTENCY: Teal color maintains portfolio brand identity
     */
    const getCategoryColor = (category) => {
        switch(category) {
            case 'business': return 'from-green-500 to-emerald-600';    // Green = money/business value
            case 'api': return 'from-blue-500 to-indigo-600';          // Blue = technical/data
            case 'portfolio': return 'from-teal-400 to-teal-600';      // Teal = brand/personal
            default: return 'from-gray-500 to-gray-600';               // Gray = neutral/default
        }
    };

    return (
        <section id="projects" className="py-16 lg:py-24 relative">
            {/* 
             * CONSISTENT VISUAL TREATMENT - Portfolio design language maintenance
             * DEPTH CREATION: Gradient overlay adds visual sophistication
             * ACCESSIBILITY: pointer-events-none maintains interactive functionality
             */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 
                 * SECTION HEADER - Strategic messaging and expectation setting
                 * NARRATIVE FRAMING: "My Development Journey" creates story context
                 * VALUE PROPOSITION: Subtitle emphasizes progression from business problems to technical mastery
                 */}
                <div className="text-center mb-16">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                {/* 
                                 * JOURNEY NARRATIVE - Personal development story emphasis
                                 * PSYCHOLOGY: "Journey" implies progress, growth, and destination
                                 * EMPLOYER APPEAL: Shows self-directed learning and skill development
                                 */}
                                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                    My Development Journey
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                            {/* 
                             * VALUE PROGRESSION SUMMARY - Key learning trajectory highlights
                             * BUSINESS FOCUS: "real business problems" emphasizes practical value
                             * TECHNICAL GROWTH: "complex APIs" to "modern React" shows skill advancement
                             */}
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                                From solving real business problems to mastering complex APIs and modern React development
                            </p>
                        </div>
                    </div>
                </div>

                {/* 
                 * TIMELINE CONTAINER - Visual progression and narrative structure
                 * UX STRATEGY: Timeline format creates natural reading flow and story progression
                 * VISUAL HIERARCHY: Relative positioning enables complex layering for timeline effects
                 */}
                <div className="relative">
                    {/* 
                     * ENHANCED TIMELINE LINE - Visual progression indicator
                     * RESPONSIVE POSITIONING: left-8 md:left-1/2 adapts to screen size
                     * VISUAL IMPACT: Gradient and shadow create premium appearance
                     * BRAND CONSISTENCY: Teal colors maintain visual identity
                     */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 shadow-lg shadow-teal-400/50"></div>

                    {/* 
                     * PROJECTS MAPPING - Dynamic content rendering with responsive layout
                     * LAYOUT STRATEGY: Alternating left/right positioning creates visual interest
                     * RESPONSIVE BEHAVIOR: index % 2 logic creates zigzag pattern on desktop
                     * PERFORMANCE: Key prop and unique IDs enable efficient React rendering
                     */}
                    {projects.map((project, index) => (
                        <div key={project.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* 
                             * TIMELINE NODE SECTION - Project positioning and date presentation
                             * VISUAL ANCHOR: Absolute positioning centers node on timeline
                             * DATE DISPLAY: Glass badge treatment maintains design consistency
                             * ANIMATION: Pulsing dot creates active, dynamic feeling
                             */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                                {/* 
                                 * GLASS DATE BADGE - Timeline milestone marking
                                 * INFORMATION HIERARCHY: Date and duration provide project context
                                 * VISUAL TREATMENT: Glassmorphism maintains design language consistency
                                 */}
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-full blur-md opacity-75"></div>
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 shadow-xl border border-white/20">
                                        {project.date}
                                    </div>
                                </div>
                                
                                {/* 
                                 * ENHANCED TIMELINE NODE - Visual timeline progression indicator
                                 * ANIMATION: animate-ping creates active, living timeline effect
                                 * LAYERING: Multiple elements create depth and visual interest
                                 * BRANDING: Teal color maintains consistent visual identity
                                 */}
                                <div className="relative">
                                    <div className="w-4 h-4 bg-teal-400 rounded-full border-4 border-black shadow-xl">
                                        <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-20"></div>
                                    </div>
                                    <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-sm"></div>
                                </div>
                            </div>

                            {/* 
                             * PROJECT CARD CONTAINER - Main content presentation area
                             * RESPONSIVE LAYOUT: w-full md:w-5/12 ensures proper sizing across devices
                             * ALTERNATING POSITIONING: Complex margin logic creates zigzag timeline effect
                             * SPACING: ml-16 md:ml-0 mt-16 provides proper spacing around timeline node
                             */}
                            <div className={`w-full md:w-5/12 ml-16 md:ml-0 mt-16 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <div className="relative group">
                                    {/* 
                                     * CARD GLOW EFFECT - Premium interaction feedback
                                     * ENGAGEMENT: opacity-0 to opacity-100 creates reward for user interaction
                                     * PERFORMANCE: 500ms duration provides smooth but responsive feel
                                     * VISUAL IMPACT: Creates premium, high-quality interface perception
                                     */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    
                                    {/* 
                                     * GLASS PROJECT CARD - Main project information container
                                     * GLASSMORPHISM: backdrop-blur-md creates sophisticated glass effect
                                     * INTERACTION: Multiple hover effects create engaging user experience
                                     * ACCESSIBILITY: border color changes provide clear focus indicators
                                     */}
                                    <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-teal-400/50 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-teal-400/10 hover:-translate-y-1">
                                        {/* 
                                         * CARD HEADER - Project identification and categorization
                                         * INFORMATION ARCHITECTURE: Title, subtitle, and category icon create clear hierarchy
                                         * VISUAL ORGANIZATION: Flexbox layout ensures proper spacing and alignment
                                         */}
                                        <div className="p-6 pb-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    {/* 
                                                     * CATEGORY ICON CONTAINER - Visual project type identification
                                                     * DYNAMIC STYLING: getCategoryColor provides unique visual identity per project type
                                                     * IMMEDIATE RECOGNITION: Icon enables quick project categorization
                                                     */}
                                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg`}>
                                                        {getCategoryIcon(project.category)}
                                                    </div>
                                                    <div>
                                                        {/* 
                                                         * PROJECT TITLE - Primary identification element
                                                         * INTERACTION: group-hover:text-teal-200 provides engagement feedback
                                                         * HIERARCHY: text-xl font-bold establishes visual prominence
                                                         */}
                                                        <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition-colors duration-300 drop-shadow-lg">
                                                            {project.title}
                                                        </h3>
                                                        {/* 
                                                         * PROJECT SUBTITLE - Secondary classification information
                                                         * BRAND COLOR: text-teal-300 maintains visual consistency
                                                         * CONTEXT: Provides additional project categorization
                                                         */}
                                                        <p className="text-sm text-teal-300 font-medium drop-shadow-md">{project.subtitle}</p>
                                                    </div>
                                                </div>
                                                {/* 
                                                 * CALENDAR ICON - Visual date/timeline reference
                                                 * SUBTLE INDICATOR: Reinforces temporal context without overwhelming
                                                 */}
                                                <div className="flex items-center gap-1 text-gray-300 text-sm drop-shadow-md">
                                                    <Calendar className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* 
                                             * STATUS BADGE - Project state communication
                                             * VISUAL TREATMENT: Glassmorphism maintains design consistency
                                             * INFORMATION: Communicates current project state (Production, Live, Current)
                                             */}
                                            <div className="relative inline-block">
                                                <div className="absolute -inset-1 bg-teal-400/30 rounded-full blur-sm"></div>
                                                <div className="relative inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-teal-500/20 text-teal-200 border border-teal-500/30 mb-4 shadow-lg">
                                                    {project.status}
                                                </div>
                                            </div>
                                        </div>

                                        {/* 
                                         * CARD BODY - Detailed project information section
                                         * CONTENT ORGANIZATION: Description, impact, tech stack, and features
                                         * VISUAL HIERARCHY: Consistent spacing and typography create readable flow
                                         */}
                                        <div className="px-6 pb-6">
                                            {/* 
                                             * PROJECT DESCRIPTION - Comprehensive project overview
                                             * BUSINESS FOCUS: Emphasizes real-world application and business value
                                             * READABILITY: leading-relaxed ensures comfortable reading experience
                                             */}
                                            <p className="text-gray-200 leading-relaxed mb-4 drop-shadow-md">
                                                {project.description}
                                            </p>

                                            {/* 
                                             * IMPACT HIGHLIGHT - Business value and achievement emphasis
                                             * VISUAL PROMINENCE: Special styling draws attention to key achievements
                                             * QUANTIFICATION: Specific metrics demonstrate concrete value delivery
                                             */}
                                            <div className="relative">
                                                <div className="absolute -inset-1 bg-teal-400/20 rounded-lg blur-sm opacity-50"></div>
                                                <div className="relative backdrop-blur-md bg-teal-900/20 rounded-lg p-3 mb-4 border border-teal-500/20 shadow-lg">
                                                    <p className="text-teal-200 font-semibold text-sm drop-shadow-md">💡 Key Impact:</p>
                                                    <p className="text-white font-medium drop-shadow-md">{project.impact}</p>
                                                </div>
                                            </div>

                                            {/* 
                                             * TECH STACK DISPLAY - Technical skills demonstration
                                             * SKILL SHOWCASE: Each technology represents demonstrated competency
                                             * INTERACTIVE DESIGN: Hover effects encourage exploration
                                             * VISUAL ORGANIZATION: Tags provide scannable skill overview
                                             */}
                                            <div className="mb-4">
                                                <p className="text-gray-300 text-sm font-medium mb-2 drop-shadow-md">Tech Stack:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map((tech, techIndex) => (
                                                        <span key={techIndex} className="px-3 py-1 backdrop-blur-md bg-white/10 text-gray-200 rounded-full text-xs border border-white/20 hover:border-teal-400/50 hover:text-teal-200 transition-all duration-200 shadow-lg">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 
                                             * FEATURES LIST - Functional capability overview
                                             * ORGANIZATION: Grid layout maximizes space utilization
                                             * VISUAL HIERARCHY: Bullet points create scannable feature list
                                             * CAPABILITY DEMONSTRATION: Each feature shows specific technical achievement
                                             */}
                                            <div className="mb-6">
                                                <p className="text-gray-300 text-sm font-medium mb-2 drop-shadow-md">Key Features:</p>
                                                <div className="grid grid-cols-2 gap-1">
                                                    {project.features.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-200 drop-shadow-md">
                                                            {/* 
                                                             * FEATURE BULLET POINT - Visual list organization
                                                             * BRAND CONSISTENCY: Teal color maintains visual identity
                                                             * VISUAL ENHANCEMENT: Glow effect adds premium feel
                                                             */}
                                                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"></div>
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 
                                             * PROJECT LINKS - Direct access to working code and live applications
                                             * VALIDATION: Live Demo provides immediate proof of working application
                                             * CODE REVIEW: GitHub link enables technical assessment of code quality
                                             * VISUAL HIERARCHY: Primary/secondary button styling guides user behavior
                                             */}
                                            <div className="flex gap-3">
                                                {/* 
                                                 * LIVE DEMO BUTTON - Primary call-to-action for project validation
                                                 * SECURITY: target="_blank" and rel="noopener noreferrer" prevent vulnerabilities
                                                 * VISUAL PROMINENCE: Gradient styling makes primary action clear
                                                 * MICRO-INTERACTION: Icon scaling provides engaging feedback
                                                 */}
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-xl hover:shadow-teal-400/40 group/btn shadow-lg"
                                                >
                                                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                                                    Live Demo
                                                </a>
                                                {/* 
                                                 * CODE REPOSITORY BUTTON - Technical evaluation access
                                                 * TRANSPARENCY: Provides direct access to source code for assessment
                                                 * SECONDARY STYLING: Glassmorphism treatment indicates secondary priority
                                                 * GITHUB INTEGRATION: Direct link to repository for code review
                                                 */}
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 hover:border-teal-400/50 text-gray-200 hover:text-teal-200 rounded-lg font-medium transition-all duration-200 group/btn shadow-lg"
                                                >
                                                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                                                    Code
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 
                 * TIMELINE CONCLUSION - Future development indication
                 * GROWTH MINDSET: "More projects coming soon" shows ongoing development
                 * VISUAL COMPLETION: Provides natural ending to timeline narrative
                 * ENGAGEMENT: Pulsing animation maintains dynamic feel
                 */}
                <div className="text-center mt-16">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-r from-teal-600/20 to-teal-500/20 rounded-xl border border-teal-500/30 px-6 py-3 shadow-xl">
                            <div className="inline-flex items-center gap-3">
                                {/* 
                                 * PULSING INDICATOR - Active development signal
                                 * ANIMATION: animate-pulse creates living, active feeling
                                 * VISUAL CONSISTENCY: Matches timeline node styling
                                 */}
                                <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-400/50"></div>
                                <span className="text-teal-200 font-medium drop-shadow-md">More projects coming soon...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*
 * COMPONENT EXPORT - Professional module architecture
 * NAMING: ProjectsTimeline clearly indicates component purpose and structure
 * REUSABILITY: Self-contained component enables easy integration and testing
 * MAINTAINABILITY: Clear data structure and helper functions facilitate updates
 * 
 * BUSINESS IMPACT MEASUREMENT OPPORTUNITIES:
 * - Click-through rates on Live Demo vs Code buttons
 * - Time spent viewing each project card
 * - Social sharing of specific projects
 * - Contact form submissions following project viewing
 * 
 * TECHNICAL DEBT AND ENHANCEMENT OPPORTUNITIES:
 * - Modal overlays for detailed project information
 * - Image galleries for project screenshots
 * - Video demonstrations of project functionality
 * - Integration with GitHub API for live commit data
 * - Performance monitoring for animation impacts
 * - A/B testing for different project presentation formats
 */
export default ProjectsTimeline