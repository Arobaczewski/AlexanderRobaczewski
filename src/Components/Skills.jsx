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
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Express.js", icon: "🚀" },
        { name: "Three.js", icon: "🎮" },
        { name: "Next.js", icon: "▲" },
        { name: "RESTful APIs", icon: "🔗" }
    ];

    return (
        <section id="skills" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-teal-400 mb-4">
                        My Tech Stack
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Technologies I work with and love
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative overflow-hidden">
                    <Marquee
                        gradient={false}
                        speed={50}
                        pauseOnHover={true}
                        className="py-8"
                    >
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="mx-6 px-6 py-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-teal-400 hover:bg-gray-800 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-3 whitespace-nowrap">
                                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                                        {skill.icon}
                                    </span>
                                    <span className="text-white font-semibold text-lg group-hover:text-teal-300 transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Optional: Second row going in reverse direction */}
                <div className="relative overflow-hidden mt-8">
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
                                className="mx-6 px-6 py-4 bg-gradient-to-r from-teal-900/20 to-teal-800/20 rounded-xl border border-teal-500/30 hover:border-teal-400 hover:from-teal-800/30 hover:to-teal-700/30 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/30 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-3 whitespace-nowrap">
                                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                                        {skill.icon}
                                    </span>
                                    <span className="text-teal-300 font-semibold text-lg group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Skills