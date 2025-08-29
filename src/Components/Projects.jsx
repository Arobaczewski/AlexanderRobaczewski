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
 * - Visual project previews enhance engagement and showcase design skills
 * 
 * EMPLOYER VALUE DEMONSTRATION:
 * - Real business problem solving (Tip Calculator workplace implementation)
 * - API integration expertise (WeatherBeatz multi-API orchestration)
 * - Advanced eCommerce development (Robo's Wishlist frontend mastery)
 * - Full-stack development progression (Robo's Wishlist Pt 2 with .NET backend integration)
 * - Personal branding mastery (Portfolio showcasing 3D graphics and modern design)
 * - Project management skills (timeline, scope, delivery tracking)
 * - Production deployment experience (live, working applications)
 * 
 * TECHNICAL ACHIEVEMENTS SHOWCASED:
 * - Complex state management and data flow architecture
 * - Responsive timeline UI with sophisticated visual effects
 * - Dynamic content rendering with category-based styling
 * - Advanced CSS animations and micro-interactions
 * - Full-stack development with C#/.NET backend integration
 * - Cloud deployment and database management with Entity Framework Core
 * - Modern TypeScript and Next.js expertise
 * - Enterprise-grade authentication with JWT implementation
 * - Strategic information architecture for optimal user engagement
 */

import { ExternalLink, Github, Calendar, Award, Code, Users, Briefcase } from "lucide-react"

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
     * 3. Robo's Wishlist: Proves comprehensive frontend eCommerce capabilities
     * 4. Portfolio Website: Demonstrates personal branding, 3D graphics, and domain management
     * 5. Robo's Wishlist Pt 2: Showcases full-stack development with enterprise-grade .NET backend
     * 
     * SKILL PROGRESSION TIMELINE:
     * - Frontend fundamentals (React, JavaScript, CSS)
     * - API integration and external service orchestration
     * - Advanced frontend with state management and eCommerce features
     * - Professional branding and 3D graphics integration
     * - Full-stack development with .NET backend, EF Core ORM, and cloud deployment
     */
    const projects = [
        {
            id: 1,
            title: "Tip Calculator",
            subtitle: "Business Solution",
            date: "May 2025",
            type: "Utility App",
            img: "/tip-calculator.png",
            /*
             * BUSINESS VALUE EMPHASIS - Real workplace implementation
             * QUANTIFIED IMPACT: "45+ minutes saved daily" provides concrete ROI measurement
             * ADOPTION PROOF: "Used daily by management team" shows practical value and user acceptance
             * PROBLEM-SOLUTION FIT: Addresses actual business pain point with technical solution
             * WORKPLACE INTEGRATION: Demonstrates ability to identify and solve real business problems
             */
            description: "React app actively used in a retail environment to simplify tip-out calculations. Reduced daily management task time from 1 hour to 15 minutes.",
            impact: "45+ minutes saved daily",
            /*
             * TECHNICAL STACK DOCUMENTATION - Demonstrates core React competencies
             * FOUNDATION SKILLS: React, JavaScript, CSS show solid frontend fundamentals
             * ARCHITECTURE: State Management indicates understanding of complex data flow
             * DEPLOYMENT: Netlify shows modern deployment workflow knowledge
             */
            techStack: ["React", "JavaScript", "CSS", "State Management"],
            features: [
                "Real-time calculations",    // Performance optimization and immediate feedback
                "Multiple split options",    // Complex business logic handling for various scenarios
                "Save/load presets",        // Data persistence and enhanced user experience
                "Mobile responsive"         // Cross-platform accessibility and modern design
            ],
            liveUrl: "https://ayrtips.netlify.app/",
            githubUrl: "https://github.com/Arobaczewski/React-Tip-Calculator",
            status: "Production",           // Live business application actively used
            category: "business"            // Business value categorization
        },
        {
            id: 2,
            title: "WeatherBeatz",
            subtitle: "API Integration Project", 
            date: "June 2025",
            type: "Web Application",
            img: "/weatherbeats.png",
            /*
             * API INTEGRATION EXPERTISE - Complex third-party service orchestration
             * INNOVATION: Novel concept combining weather data with music recommendations
             * TECHNICAL COMPLEXITY: Multiple API coordination (geolocation, weather, Spotify)
             * USER EXPERIENCE: Dynamic UI adaptation based on external data
             * CREATIVE PROBLEM SOLVING: Demonstrates ability to connect disparate data sources
             */
            description: "Generates music playlists based on live weather conditions using geolocation + API data. Demonstrates asynchronous data handling and multi-API integration.",
            impact: "Complex API Integration",
            /*
             * DIVERSE TECHNOLOGY STACK - API integration and external service management
             * THIRD-PARTY APIS: Spotify API, OpenWeather API show external service integration
             * BROWSER APIS: Geolocation API demonstrates modern web API utilization
             * VANILLA TECHNOLOGIES: JavaScript, CSS, HTML prove fundamental web skills
             * DEPLOYMENT: Netlify shows consistent deployment workflow
             */
            techStack: ["JavaScript", "Spotify API", "OpenWeather API", "Geolocation API", "CSS", "HTML"],
            features: [
                "Geolocation detection",           // Browser API utilization and location services
                "Real-time weather data",         // External API data fetching and processing
                "Spotify playlist recommendations", // Complex API authentication and integration
                "Dynamic UI based on weather"     // Responsive UI adaptation based on data
            ],
            liveUrl: "https://weatherbeatz.netlify.app/",
            githubUrl: "https://github.com/Arobaczewski/WeatherBeats",
            status: "API",                       // Deployed and functional
            category: "api"                       // API integration focus
        },
        {
            id: 3,
            title: "Robo's Wishlist",
            subtitle: "Ecommerce Showcase",
            date: "July 2025", 
            type: "Ecommerce Site",
            img: "/robos-wishlist.png",
            /*
             * COMPREHENSIVE FRONTEND MASTERY - Advanced React application development
             * ECOMMERCE FUNCTIONALITY: Shopping cart, product filtering, and search capabilities
             * USER EXPERIENCE: Complete customer journey from browsing to checkout
             * MODERN DEVELOPMENT: Built from scratch showcasing architectural skills
             * PROFESSIONAL PRACTICES: Clean code structure and component organization
             */
            description: "Built an online storefront with dynamic filtering, persistent cart, and search functionality. Includes a checkout flow and EmailJS for mock purchase confirmations.",
            impact: "Complete React Mastery",
            /*
             * ADVANCED TECHNOLOGY STACK - Modern React ecosystem expertise
             * STYLING: Tailwind CSS shows utility-first CSS methodology mastery
             * STATE MANAGEMENT: Context API demonstrates global state architecture
             * COMMUNICATION: EmailJS shows form handling and email service integration
             * DEPLOYMENT: Netlify demonstrates professional deployment workflows
             */
            techStack: ["React", "Tailwind CSS", "Context API", "EmailJS", "Netlify"],
            features: [
                "Dynamic routing",           // SPA navigation architecture and URL management
                "Global state management",   // Complex application state handling with Context API
                "Email integration",        // Contact form and communication features
                "Responsive design"         // Cross-device compatibility and modern UX
            ],
            liveUrl: "https://roboswishlist.netlify.app/", 
            githubUrl: "https://github.com/Arobaczewski/eCommerce",
            status: "Ecommerce",                   // Active showcase project
            category: "ecommerce"             // eCommerce development categorization
        },
        {
            id: 4,
            title: "Portfolio Website",
            subtitle: "Personal Brand",
            date: "August 2025", 
            type: "Portfolio Site",
            img: "/alex-robo.png",
            /*
             * PERSONAL BRANDING MASTERY - Professional portfolio development
             * 3D GRAPHICS INTEGRATION: Three.js demonstrates advanced visual capabilities
             * DOMAIN MANAGEMENT: Custom domain shows professional web presence setup
             * MODERN DEPLOYMENT: Vercel integration demonstrates cutting-edge deployment
             * COMPREHENSIVE SHOWCASE: Timeline, animations, and responsive design
             */
            description: "Custom React-based portfolio featuring a 3D animated background, responsive layout, and dynamic marquee elements. Deployed with Vercel on a custom GoDaddy domain.",
            impact: "Personal Brand Development",
            /*
             * CUTTING-EDGE TECHNOLOGY STACK - Modern web development expertise
             * 3D GRAPHICS: Three.js shows advanced visual programming capabilities
             * STYLING: Tailwind CSS demonstrates utility-first design methodology
             * COMMUNICATION: EmailJS enables professional contact functionality
             * DEPLOYMENT: Vercel shows modern, professional deployment workflows
             * DOMAIN: Custom domain management demonstrates professional web presence
             */
            techStack: ["React", "Tailwind CSS", "Three.js", "EmailJS", "Vercel"],
            features: [
                "Global state management",   // Complex application state handling
                "Email integration",        // Third-party service integration for contact
                "Responsive design",        // Cross-device compatibility and accessibility
                "Interactive animations"    // Micro-interactions and user engagement
            ],
            liveUrl: "https://alexrobo.dev/", 
            githubUrl: "https://github.com/Arobaczewski/AlexanderRobaczewski",
            status: "Personal Brand",                   // Active personal brand showcase
            category: "portfolio"             // Personal branding categorization
        },
        {
            id: 5,
            title: "Robo's Wishlist Pt 2",
            subtitle: "Full-Stack Application",
            date: "EST October 2025", 
            type: "Full-Stack Ecommerce",
            img: "/comingsoon.png",
            /*
             * FULL-STACK DEVELOPMENT MASTERY - Complete application architecture
             * MODERN TECH STACK: Next.js, TypeScript, and C#/.NET backend integration
             * CLOUD DEPLOYMENT: Azure and Vercel demonstrate enterprise-level deployment
             * AUTHENTICATION: JWT-based user management and security implementation
             * PAYMENT INTEGRATION: Stripe checkout shows real-world eCommerce capability
             * DATABASE MANAGEMENT: MSSQL with Entity Framework Core demonstrates enterprise data architecture
             */
            description: "Full-stack e-commerce wishlist application built with Next.js, TypeScript, and TailwindCSS on the frontend, with a C#/.NET backend and MSSQL database, featuring authentication, cart management, Stripe test checkout, and cloud deployment via Vercel and Azure.",
            impact: "Full-Stack Showcase",
            /*
             * ENTERPRISE-GRADE TECHNOLOGY STACK - Complete development ecosystem
             * FRONTEND: Next.js, TypeScript show modern React and type safety
             * STYLING: Tailwind CSS and Framer Motion demonstrate advanced UI/animation
             * STATE MANAGEMENT: Zustand and Redux show multiple state management approaches
             * PAYMENT: Stripe integration demonstrates real-world payment processing
             * BACKEND: .NET and MSSQL show enterprise backend development
             * ORM: Entity Framework Core demonstrates Microsoft's enterprise ORM solution
             * AUTHENTICATION: JWT shows secure, stateless authentication implementation
             * CLOUD: Azure deployment shows enterprise cloud infrastructure
             */
            techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "Redux", "Stripe", "MSSQL", "EF Core", "JWT", ".Net", "Azure"],
            features: [
                "User Authentication",       // Secure JWT-based user management and session handling
                "Checkout Flow",            // Complete payment processing with Stripe integration
                "Responsive Design",        // Cross-device compatibility and modern UX
                "Back End Integration",     // RESTful API development and database management
                "Cart Management",          // Complex state management for shopping functionality
                "Cloud Deployment"          // Enterprise-level deployment and scaling
            ],
            liveUrl: "https://alexrobo.dev/", 
            githubUrl: "https://github.com/Arobaczewski",
            status: "In Progress",              // Active development project
            category: "fullstack"               // Full-stack development categorization
        }
    ];

    /*
     * CATEGORY ICON MAPPING SYSTEM - Visual categorization and quick recognition
     * BUSINESS STRATEGY: Icons enable immediate project type identification
     * USER EXPERIENCE: Visual cues improve content scannability and comprehension
     * SCALABILITY: Switch statement allows easy addition of new project categories
     * SIMPLIFIED APPROACH: Unified teal gradient provides consistent visual identity
     * 
     * UPDATED MAPPINGS: 
     * - Award icon for business value projects
     * - Code icon for technical/API integration projects
     * - Users icon for eCommerce and user-focused applications
     * - Briefcase icon for personal branding and portfolio projects
     * - Code icon for full-stack development (emphasizing technical complexity)
     */
    const getCategoryIcon = (category) => {
        switch(category) {
            case 'business': return <Award className="w-5 h-5" />;         // Business value emphasis
            case 'api': return <Code className="w-5 h-5" />;              // Technical complexity
            case 'ecommerce': return <Users className="w-5 h-5" />;       // eCommerce/user-focused
            case 'portfolio': return <Briefcase className="w-5 h-5" />;   // Personal branding/professional
            case 'fullstack': return <Code className="w-5 h-5" />;        // Full-stack development
            default: return <Code className="w-5 h-5" />;                 // Default technical icon
        }
    };

    return (
        <section id="projects" className="py-16 lg:py-24 relative">
            {/* 
             * CONSISTENT VISUAL TREATMENT - Portfolio design language maintenance
             * DEPTH CREATION: Gradient overlay adds visual sophistication
             * ACCESSIBILITY: pointer-events-none maintains interactive functionality
             * VISUAL HIERARCHY: Creates subtle depth without overwhelming content
             */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 
                 * SECTION HEADER - Strategic messaging and expectation setting
                 * NARRATIVE FRAMING: "My Development Journey" creates story context
                 * VALUE PROPOSITION: Subtitle emphasizes progression from business problems to full-stack mastery
                 * VISUAL HIERARCHY: Glass card treatment maintains design consistency
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
                                 * TYPOGRAPHY: Gradient text creates premium, professional appearance
                                 */}
                                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                    My Development Journey
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                            {/* 
                             * VALUE PROGRESSION SUMMARY - Key learning trajectory highlights
                             * BUSINESS FOCUS: "real business problems" emphasizes practical value
                             * TECHNICAL GROWTH: Shows advancement from simple solutions to full-stack applications
                             * COMPREHENSIVE SCOPE: Covers business, API, eCommerce, branding, and full-stack skills
                             */}
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                                From solving real business problems to mastering complex APIs, building complete eCommerce applications, and developing full-stack solutions
                            </p>
                        </div>
                    </div>
                </div>

                {/* 
                 * TIMELINE CONTAINER - Visual progression and narrative structure
                 * UX STRATEGY: Timeline format creates natural reading flow and story progression
                 * VISUAL HIERARCHY: Relative positioning enables complex layering for timeline effects
                 * RESPONSIVE DESIGN: Adapts beautifully from mobile to desktop layouts
                 */}
                <div className="relative">
                    {/* 
                     * ENHANCED TIMELINE LINE - Visual progression indicator
                     * RESPONSIVE POSITIONING: left-8 md:left-1/2 adapts to screen size
                     * VISUAL IMPACT: Gradient and shadow create premium appearance
                     * BRAND CONSISTENCY: Teal colors maintain visual identity throughout
                     */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 shadow-lg shadow-teal-400/50"></div>

                    {/* 
                     * PROJECTS MAPPING - Dynamic content rendering with responsive layout
                     * LAYOUT STRATEGY: Alternating left/right positioning creates visual interest
                     * RESPONSIVE BEHAVIOR: index % 2 logic creates zigzag pattern on desktop
                     * PERFORMANCE: Key prop and unique IDs enable efficient React rendering
                     * ACCESSIBILITY: Semantic structure maintains screen reader compatibility
                     */}
                    {projects.map((project, index) => (
                        <div key={project.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* 
                             * TIMELINE NODE SECTION - Project positioning and date presentation
                             * VISUAL ANCHOR: Absolute positioning centers node on timeline
                             * DATE DISPLAY: Glass badge treatment maintains design consistency
                             * ANIMATION: Pulsing dot creates active, dynamic feeling
                             * Z-INDEX: Ensures timeline elements appear above background
                             */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                                {/* 
                                 * GLASS DATE BADGE - Timeline milestone marking
                                 * INFORMATION HIERARCHY: Date provides project context and timeline position
                                 * VISUAL TREATMENT: Glassmorphism maintains design language consistency
                                 * INTERACTION: Subtle glow effect adds premium feel
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
                                 * ACCESSIBILITY: Sufficient contrast for visual clarity
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
                             * VISUAL BALANCE: Ensures cards don't overlap timeline elements
                             */}
                            <div className={`w-full md:w-5/12 ml-16 md:ml-0 mt-16 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <div className="relative group">
                                    {/* 
                                     * CARD GLOW EFFECT - Premium interaction feedback
                                     * ENGAGEMENT: opacity-0 to opacity-100 creates reward for user interaction
                                     * PERFORMANCE: 500ms duration provides smooth but responsive feel
                                     * VISUAL IMPACT: Creates premium, high-quality interface perception
                                     * BRAND CONSISTENCY: Teal color maintains visual identity
                                     */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    
                                    {/* 
                                     * GLASS PROJECT CARD - Main project information container
                                     * GLASSMORPHISM: backdrop-blur-md creates sophisticated glass effect
                                     * INTERACTION: Multiple hover effects create engaging user experience
                                     * ACCESSIBILITY: border color changes provide clear focus indicators
                                     * VISUAL HIERARCHY: Card structure organizes information effectively
                                     */}
                                    <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-teal-400/50 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-teal-400/10 hover:-translate-y-1">
                                        {/* 
                                         * CARD HEADER - Project identification and categorization
                                         * INFORMATION ARCHITECTURE: Title, subtitle, and category icon create clear hierarchy
                                         * VISUAL ORGANIZATION: Flexbox layout ensures proper spacing and alignment
                                         * CATEGORY SYSTEM: Icon and color coding enable quick project type identification
                                         */}
                                        <div className="p-6 pb-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    {/* 
                                                     * CATEGORY ICON CONTAINER - Visual project type identification
                                                     * UNIFIED STYLING: Consistent teal gradient provides cohesive visual identity
                                                     * IMMEDIATE RECOGNITION: Icon enables quick project categorization
                                                     * VISUAL IMPACT: Gradient background adds depth and sophistication
                                                     * SIMPLIFIED APPROACH: Single color scheme reduces visual complexity
                                                     */}
                                                    <div className={`p-2 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg`}>
                                                        {getCategoryIcon(project.category)}
                                                    </div>
                                                    <div>
                                                        {/* 
                                                         * PROJECT TITLE - Primary identification element
                                                         * INTERACTION: group-hover:text-teal-200 provides engagement feedback
                                                         * HIERARCHY: text-xl font-bold establishes visual prominence
                                                         * ACCESSIBILITY: High contrast ensures readability
                                                         */}
                                                        <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition-colors duration-300 drop-shadow-lg">
                                                            {project.title}
                                                        </h3>
                                                        {/* 
                                                         * PROJECT SUBTITLE - Secondary classification information
                                                         * BRAND COLOR: text-teal-300 maintains visual consistency
                                                         * CONTEXT: Provides additional project categorization
                                                         * TYPOGRAPHY: Smaller size creates proper hierarchy
                                                         */}
                                                        <p className="text-sm text-teal-300 font-medium drop-shadow-md">{project.subtitle}</p>
                                                    </div>
                                                </div>
                                                {/* 
                                                 * CALENDAR ICON - Visual date/timeline reference
                                                 * SUBTLE INDICATOR: Reinforces temporal context without overwhelming
                                                 * CONSISTENCY: Matches other icon treatments throughout
                                                 */}
                                                <div className="flex items-center gap-1 text-gray-300 text-sm drop-shadow-md">
                                                    <Calendar className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* 
                                             * STATUS BADGE - Project state communication
                                             * VISUAL TREATMENT: Glassmorphism maintains design consistency
                                             * INFORMATION: Communicates current project state (Production, Live, In Progress)
                                             * TRUST BUILDING: Shows active, maintained projects
                                             */}
                                            <div className="relative inline-block">
                                                <div className="absolute -inset-1 bg-teal-400/30 rounded-full blur-sm"></div>
                                                <div className="relative inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-teal-500/20 text-teal-200 border border-teal-500/30 mb-4 shadow-lg">
                                                    {project.status}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* 
                                         * PROJECT IMAGE PREVIEW - Visual project showcase
                                         * ENGAGEMENT: Images provide immediate visual context and increase engagement
                                         * DESIGN SHOWCASE: Demonstrates UI/UX design capabilities
                                         * ACCESSIBILITY: Alt text provides screen reader compatibility
                                         * RESPONSIVE: object-contain preserves full image visibility on all screen sizes
                                         * MOBILE OPTIMIZATION: Fixed height with object-contain prevents cropping/zooming issues
                                         * OVERFLOW HANDLING: overflow-auto allows scrolling if needed for large images
                                         */}
                                        <div className="mb-4 rounded-lg overflow-hidden">
                                            <img
                                                className="w-full p-2 overflow-auto rounded-2xl h-48 object-contain"
                                                src={project.img}
                                                alt={`${project.title} project preview`}
                                            />
                                        </div>

                                        {/* 
                                         * CARD BODY - Detailed project information section
                                         * CONTENT ORGANIZATION: Description, impact, tech stack, and features
                                         * VISUAL HIERARCHY: Consistent spacing and typography create readable flow
                                         * INFORMATION DENSITY: Balanced content that informs without overwhelming
                                         */}
                                        <div className="px-6 pb-6">
                                            {/* 
                                             * PROJECT DESCRIPTION - Comprehensive project overview
                                             * BUSINESS FOCUS: Emphasizes real-world application and business value
                                             * READABILITY: leading-relaxed ensures comfortable reading experience
                                             * STORYTELLING: Each description tells a compelling project story
                                             */}
                                            <p className="text-gray-200 leading-relaxed mb-4 drop-shadow-md">
                                                {project.description}
                                            </p>

                                            {/* 
                                             * IMPACT HIGHLIGHT - Business value and achievement emphasis
                                             * VISUAL PROMINENCE: Special styling draws attention to key achievements
                                             * QUANTIFICATION: Specific metrics demonstrate concrete value delivery
                                             * EMPLOYER APPEAL: Shows focus on results and business impact
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
                                             * EMPLOYER VALUE: Shows technical breadth and modern tool usage
                                             * ENTERPRISE FOCUS: EF Core and JWT highlight enterprise-grade development
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
                                             * USER FOCUS: Features written from user benefit perspective
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
                                                             * ACCESSIBILITY: Clear visual separation of list items
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
                                             * TRUST BUILDING: Direct links show transparency and confidence
                                             */}
                                            <div className="flex gap-3">
                                                {/* 
                                                 * LIVE DEMO BUTTON - Primary call-to-action for project validation
                                                 * SECURITY: target="_blank" and rel="noopener noreferrer" prevent vulnerabilities
                                                 * VISUAL PROMINENCE: Gradient styling makes primary action clear
                                                 * MICRO-INTERACTION: Icon scaling provides engaging feedback
                                                 * CONVERSION FOCUS: Primary styling encourages clicks
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
                                                 * DEVELOPER APPEAL: Shows openness to code review and collaboration
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
                 * TIMELINE CONCLUSION - Future development indication and call-to-action
                 * GROWTH MINDSET: "More projects coming soon" shows ongoing development commitment
                 * VISUAL COMPLETION: Provides natural ending to timeline narrative
                 * ENGAGEMENT: Pulsing animation maintains dynamic feel and suggests activity
                 * EMPLOYER APPEAL: Indicates continuous learning and project development
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
                                 * PSYCHOLOGY: Suggests ongoing work and future opportunities
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
 * PORTFOLIO IMPACT MEASUREMENT OPPORTUNITIES:
 * - Click-through rates on Live Demo vs Code buttons across different project types
 * - Time spent viewing each project card (dwell time analytics)
 * - Image engagement metrics (hover time, click patterns on project previews)
 * - Social sharing patterns for specific projects and their correlation to hiring interest
 * - Contact form submissions following project viewing sessions
 * - A/B testing different project ordering or presentation styles
 * - Category-based engagement analysis (business vs technical vs full-stack interest)
 * 
 * TECHNICAL DEBT AND ENHANCEMENT ROADMAP:
 * - Modal overlays for detailed project case studies and development stories
 * - Image galleries showcasing project screenshots and mobile responsiveness
 * - Video demonstrations embedded directly in cards for complex interactions
 * - Integration with GitHub API for live commit data and contribution graphs
 * - Performance monitoring for animation impacts on page load times
 * - Analytics integration for detailed user engagement tracking
 * - SEO optimization for individual project deep-linking
 * - Accessibility improvements for screen readers and keyboard navigation
 * - Lazy loading for project images to improve initial page load performance
 * - Progressive web app features for offline viewing of portfolio
 * 
 * BUSINESS INTELLIGENCE INTEGRATION POSSIBILITIES:
 * - Employer engagement tracking (which projects generate most interest)
 * - Technical recruiter click patterns (API vs Business vs eCommerce vs Full-Stack focus)
 * - Geographic analysis of project viewing patterns
 * - Device/browser analytics for optimal experience optimization
 * - Conversion funnel analysis from project viewing to contact initiation
 * - Time-of-day analytics for optimal content updates and social media posting
 * 
 * FUTURE PROJECT EXPANSION STRATEGY:
 * - Mobile app development projects (React Native progression)
 * - AI/ML integration projects (showing cutting-edge interests)
 * - Open source contributions (demonstrating community involvement)
 * - Team collaboration projects (showing teamwork and leadership skills)
 * - Enterprise-level applications (demonstrating scalability awareness)
 * - DevOps and CI/CD pipeline projects (showing deployment expertise)
 * - Microservices architecture demonstrations (enterprise backend patterns)
 * 
 * PROFESSIONAL DEVELOPMENT TRACKING:
 * - Technology adoption timeline (showing learning curve and adaptation speed)
 * - Project complexity progression (demonstrating skill advancement over time)
 * - Business impact quantification (ROI and value creation measurement)
 * - Industry trend alignment (showing awareness of market demands)
 * - Problem-solving evolution (from simple solutions to complex architectures)
 * - Leadership and mentoring capabilities (as projects grow in scope)
 * 
 * ACCESSIBILITY AND PERFORMANCE CONSIDERATIONS:
 * - Alt text for all project images for screen reader compatibility
 * - Keyboard navigation support for all interactive elements
 * - Color contrast compliance for visually impaired users
 * - Image optimization and lazy loading for faster page loads
 * - Responsive design testing across multiple device types
 * - Performance budgets for animation and interaction effects
 * 
 * ENTERPRISE DEVELOPMENT SHOWCASE (EF CORE & JWT FOCUS):
 * - Database schema design and optimization with Entity Framework Core
 * - RESTful API design and documentation examples
 * - JWT-based authentication and authorization implementation
 * - Enterprise security patterns and best practices
 * - Cloud infrastructure and deployment automation with Azure
 * - Real-time features using SignalR or WebSockets
 * - Performance optimization and caching strategies
 * - Code-first database migrations with EF Core
 * - Unit testing and integration testing patterns
 * - Enterprise logging and monitoring implementations
 * 
 * EF CORE ADVANTAGES HIGHLIGHTED:
 * - Microsoft's flagship ORM demonstrating enterprise standards
 * - Seamless integration with .NET ecosystem and Azure services
 * - Strong typing and compile-time checking with C#
 * - Advanced querying capabilities with LINQ
 * - Robust migration system for database versioning
 * - Enterprise-grade performance optimization features
 * - Native support for complex relationships and inheritance
 * - Comprehensive logging and debugging capabilities
 * 
 * JWT AUTHENTICATION BENEFITS:
 * - Stateless authentication ideal for distributed systems
 * - Cross-platform compatibility and standards compliance
 * - Secure token-based authentication with expiration handling
 * - Role-based authorization and claims management
 * - Scalable authentication suitable for microservices
 * - Industry-standard security implementation
 */
export default ProjectsTimeline