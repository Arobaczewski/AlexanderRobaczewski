import { ExternalLink, Github, Calendar, Award, Code, Users } from "lucide-react"

const ProjectsTimeline = () => {
    const projects = [
        {
            id: 1,
            title: "Tip Calculator",
            subtitle: "Business Solution",
            date: "May 2025 (2 Weeks)",
            type: "Utility App",
            description: "A React-based tip calculator that revolutionized daily operations at my workplace, reducing calculation time from over an hour to just 15 minutes. Used daily by management team.",
            impact: "45+ minutes saved daily",
            techStack: ["React", "JavaScript", "CSS", "State Management"],
            features: [
                "Real-time calculations",
                "Multiple split options", 
                "Save/load presets",
                "Mobile responsive"
            ],
            liveUrl: "https://ayrtips.netlify.app/",
            githubUrl: "https://github.com/Arobaczewski",
            status: "Production",
            category: "business"
        },
        {
            id: 2,
            title: "WeatherBeatz",
            subtitle: "API Integration Project",
            date: "June 2025 (3 Weeks)",
            type: "Web Application",
            description: "An innovative app that recommends Spotify playlists based on current weather conditions using geolocation and real-time weather data.",
            impact: "Complex API Integration",
            techStack: ["JavaScript", "Spotify API", "OpenWeather API", "CSS", "HTML"],
            features: [
                "Geolocation detection",
                "Real-time weather data",
                "Spotify playlist recommendations",
                "Dynamic UI based on weather"
            ],
            liveUrl: "https://weatherbeatz.netlify.app/",
            githubUrl: "https://github.com/Arobaczewski",
            status: "Live",
            category: "api"
        },
        {
            id: 3,
            title: "Robo's Wishlist",
            subtitle: "Ecommerce Showcase",
            date: "July 2025 (4 Weeks)",
            type: "Ecommerce Site",
            description: "A comprehensive portfolio website built from scratch showcasing advanced React concepts, modern design principles, and professional development practices.",
            impact: "Complete React Mastery",
            techStack: ["React", "Tailwind CSS", "Context API", "EmailJS", "Three.js"],
            features: [
                "Dynamic routing",
                "Global state management",
                "Email integration",
                "Responsive design",
                "Interactive animations"
            ],
            liveUrl: "https://roboswishlist.netlify.app/", 
            githubUrl: "https://github.com/Arobaczewski",
            status: "Current",
            category: "portfolio"
        }
    ];

    const getCategoryIcon = (category) => {
        switch(category) {
            case 'business': return <Award className="w-5 h-5" />;
            case 'api': return <Code className="w-5 h-5" />;
            case 'portfolio': return <Users className="w-5 h-5" />;
            default: return <Code className="w-5 h-5" />;
        }
    };

    const getCategoryColor = (category) => {
        switch(category) {
            case 'business': return 'from-green-500 to-emerald-600';
            case 'api': return 'from-blue-500 to-indigo-600';  
            case 'portfolio': return 'from-teal-400 to-teal-600';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    return (
        <section id="projects" className="py-16 lg:py-24 relative">
            {/* Modern gradient overlay */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                    My Development Journey
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                                From solving real business problems to mastering complex APIs and modern React development
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Enhanced Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 shadow-lg shadow-teal-400/50"></div>

                    {/* Projects */}
                    {projects.map((project, index) => (
                        <div key={project.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Enhanced Timeline Node */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                                {/* Glass Date Badge */}
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-full blur-md opacity-75"></div>
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-teal-400 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 shadow-xl border border-white/20">
                                        {project.date}
                                    </div>
                                </div>
                                
                                {/* Enhanced Timeline Node */}
                                <div className="relative">
                                    <div className="w-4 h-4 bg-teal-400 rounded-full border-4 border-black shadow-xl">
                                        <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-20"></div>
                                    </div>
                                    <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-sm"></div>
                                </div>
                            </div>

                            {/* Enhanced Project Card */}
                            <div className={`w-full md:w-5/12 ml-16 md:ml-0 mt-16 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <div className="relative group">
                                    {/* Card glow effect */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    
                                    {/* Glass project card */}
                                    <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-teal-400/50 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-teal-400/10 hover:-translate-y-1">
                                        {/* Card Header */}
                                        <div className="p-6 pb-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg`}>
                                                        {getCategoryIcon(project.category)}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition-colors duration-300 drop-shadow-lg">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-sm text-teal-300 font-medium drop-shadow-md">{project.subtitle}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-300 text-sm drop-shadow-md">
                                                    <Calendar className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* Enhanced Status Badge */}
                                            <div className="relative inline-block">
                                                <div className="absolute -inset-1 bg-teal-400/30 rounded-full blur-sm"></div>
                                                <div className="relative inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-teal-500/20 text-teal-200 border border-teal-500/30 mb-4 shadow-lg">
                                                    {project.status}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-200 leading-relaxed mb-4 drop-shadow-md">
                                                {project.description}
                                            </p>

                                            {/* Enhanced Impact */}
                                            <div className="relative">
                                                <div className="absolute -inset-1 bg-teal-400/20 rounded-lg blur-sm opacity-50"></div>
                                                <div className="relative backdrop-blur-md bg-teal-900/20 rounded-lg p-3 mb-4 border border-teal-500/20 shadow-lg">
                                                    <p className="text-teal-200 font-semibold text-sm drop-shadow-md">💡 Key Impact:</p>
                                                    <p className="text-white font-medium drop-shadow-md">{project.impact}</p>
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
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

                                            {/* Features */}
                                            <div className="mb-6">
                                                <p className="text-gray-300 text-sm font-medium mb-2 drop-shadow-md">Key Features:</p>
                                                <div className="grid grid-cols-2 gap-1">
                                                    {project.features.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-200 drop-shadow-md">
                                                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"></div>
                                                            {feature}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Enhanced Links */}
                                            <div className="flex gap-3">
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-xl hover:shadow-teal-400/40 group/btn shadow-lg"
                                                >
                                                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                                                    Live Demo
                                                </a>
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

                {/* Enhanced Timeline End */}
                <div className="text-center mt-16">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-r from-teal-600/20 to-teal-500/20 rounded-xl border border-teal-500/30 px-6 py-3 shadow-xl">
                            <div className="inline-flex items-center gap-3">
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

export default ProjectsTimeline