import Marquee from "react-fast-marquee"

const Skills = () => {
    const skills = [
        { name: "React", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Node.js", icon: "🟢" },
        { name: "Git & GitHub", icon: "🐙" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎭" },
        { name: "Three.js", icon: "🎮" },
        { name: "RESTful APIs", icon: "🔗" }
    ];

    return (
        <section id="skills" className="py-16 lg:py-24 relative">
            {/* Modern gradient overlay */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg">
                                    My Tech Stack
                                </span>
                            </h2>
                            <p className="text-gray-200 text-lg drop-shadow-md">
                                Technologies I work with and love
                            </p>
                        </div>
                    </div>
                </div>

                {/* Enhanced Marquee Container */}
                <div className="relative overflow-hidden">
                    {/* Glass container for first marquee */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 rounded-2xl pointer-events-none"></div>
                        <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                            className="py-8"
                        >
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    {/* Glass skill card */}
                                    <div className="relative backdrop-blur-md bg-white/10 px-6 py-4 rounded-xl border border-white/20 hover:border-teal-400/50 hover:bg-white/15 hover:scale-110 hover:shadow-xl hover:shadow-teal-400/20 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
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

                {/* Second row with enhanced styling */}
                <div className="relative overflow-hidden mt-8">
                    {/* Glass container for second marquee */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black/30 rounded-2xl pointer-events-none"></div>
                        <Marquee
                            gradient={false}
                            speed={40}
                            direction="right"
                            pauseOnHover={true}
                            className="py-8"
                        >
                            {skills.slice().reverse().map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6"
                                >
                                    {/* Enhanced glow effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    {/* Glass skill card with teal theme */}
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-teal-900/20 to-teal-800/20 px-6 py-4 rounded-xl border border-teal-500/30 hover:border-teal-400/70 hover:from-teal-800/30 hover:to-teal-700/30 hover:scale-110 hover:shadow-xl hover:shadow-teal-400/30 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
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

                {/* Additional visual enhancement */}
                <div className="text-center mt-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-white/5 px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
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

export default Skills