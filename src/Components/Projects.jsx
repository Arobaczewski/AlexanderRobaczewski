import { ExternalLink, Github, Calendar, Award, Code, Users } from "lucide-react"

const ProjectsTimeline = () => {
    const projects = [
        {
            id: 1,
            title: "Tip Calculator",
            subtitle: "Business Solution",
            date: "March 2025",
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
            title: "WeatherBeats",
            subtitle: "API Integration Project",
            date: "April 2025",
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
            subtitle: "Full-Stack Showcase",
            date: "May 2025",
            type: "Eccommerce Site",
            description: "A comprehensive eccommerce website built from scratch showcasing advanced React concepts, modern design principles, and professional development practices.",
            impact: "Complete React Mastery",
            techStack: ["React", "Tailwind CSS", "Context API", "EmailJS"],
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
            category: "eccomerce"
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
        <section id="projects" className="py-16 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        My Development Journey
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        From solving real business problems to mastering complex APIs and modern React development
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600"></div>

                    {/* Projects */}
                    {projects.map((project, index) => (
                        <div key={project.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Timeline Node */}
                            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full border-4 border-black shadow-lg z-10">
                                <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-20"></div>
                            </div>

                            {/* Project Card */}
                            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <div className="bg-gray-900 rounded-2xl border border-gray-700 hover:border-teal-400 transition-all duration-300 overflow-hidden group hover:shadow-xl hover:shadow-teal-400/10 hover:-translate-y-1">
                                    {/* Card Header */}
                                    <div className="p-6 pb-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                                                    {getCategoryIcon(project.category)}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm text-teal-400 font-medium">{project.subtitle}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-400 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                {project.date}
                                            </div>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-4">
                                            {project.status}
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* Impact */}
                                        <div className="bg-teal-900/20 rounded-lg p-3 mb-4 border border-teal-500/20">
                                            <p className="text-teal-300 font-semibold text-sm">💡 Key Impact:</p>
                                            <p className="text-white font-medium">{project.impact}</p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="mb-4">
                                            <p className="text-gray-400 text-sm font-medium mb-2">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-600 hover:border-teal-400 hover:text-teal-300 transition-colors duration-200">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-6">
                                            <p className="text-gray-400 text-sm font-medium mb-2">Key Features:</p>
                                            <div className="grid grid-cols-2 gap-1">
                                                {project.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-teal-400/25 group/btn"
                                            >
                                                <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-teal-400 text-gray-300 hover:text-teal-300 rounded-lg font-medium transition-all duration-200 group/btn"
                                            >
                                                <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                                                Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline End */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-600/20 to-teal-500/20 rounded-xl border border-teal-500/30">
                        <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                        <span className="text-teal-200 font-medium">More projects coming soon...</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsTimeline