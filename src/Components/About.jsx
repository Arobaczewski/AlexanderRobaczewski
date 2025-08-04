import { Code, Users, Target, Heart, CheckCircle, Award, Zap } from "lucide-react"

const About = () => {
    return (
        <section id="about" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        From tech sales to web development - turning 8+ years of customer-facing experience 
                        into code that makes a difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Story Section */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <Target className="mr-3 text-teal-500" size={24} />
                                My Journey
                            </h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    After years of selling technology at AT&T and Verizon, I realized I loved 
                                    the tech but wanted to build solutions instead of just selling them. In 
                                    November 2023, I made the leap - quitting my management role to pursue development.
                                </p>
                                <p>
                                    The path wasn't linear. I explored cybersecurity, networking, and IT before 
                                    finding my true calling in March 2025 when I discovered coding through 
                                    Codecademy's full-stack program.
                                </p>
                                <p className="font-semibold text-teal-400">
                                    That moment when my first React component rendered? I knew I was home.
                                </p>
                            </div>
                        </div>

                        {/* What Makes Me Different */}
                        <div>
                            <h4 className="text-xl font-semibold text-teal-400 mb-4">What Makes Me Different</h4>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <Users className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                                    <div className="text-gray-300">
                                        <span className="font-semibold text-white">Real-world experience:</span> 8+ years of customer service 
                                        and team leadership means I understand user needs and business requirements.
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Zap className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                                    <div className="text-gray-300">
                                        <span className="font-semibold text-white">Rapid learner:</span> Built production-quality React 
                                        applications within weeks of starting my coding journey.
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Heart className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                                    <div className="text-gray-300">
                                        <span className="font-semibold text-white">Genuine passion:</span> I actively sought out coding 
                                        after trying other tech paths - this is exactly where I want to be.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Element */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl shadow-2xl flex items-center justify-center">
                                <Code className="w-32 h-32 text-white" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-200 rounded-full opacity-60"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-300 rounded-full opacity-40"></div>
                        </div>
                    </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-teal-400 text-center mb-12">
                        Technical Expertise
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Frontend Skills */}
                        <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-400/20 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">Frontend Development</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    React (Hooks, Context, Router)
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    JavaScript (ES6+)
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    Tailwind CSS
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    Responsive Design
                                </li>
                            </ul>
                        </div>

                        {/* Tools & Integration */}
                        <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-400/20 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">Tools & Integration</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    Git & GitHub
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    RESTful APIs
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    EmailJS Integration
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    Three.js (Learning)
                                </li>
                            </ul>
                        </div>

                        {/* Currently Learning */}
                        <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-700 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-400/20 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">Currently Learning</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    Node.js & Express
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    PostgreSQL
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    Next.js
                                </li>
                                <li className="flex items-center hover:text-teal-300 transition-colors duration-200">
                                    <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                                    Full-Stack Architecture
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Why Employers Choose Me */}
                <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-700 mb-20">
                    <h3 className="text-3xl font-bold text-teal-400 text-center mb-12">
                        Why Employers Choose Me
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Problem Solver */}
                        <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 p-6 rounded-xl border border-teal-500/30 hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-teal-300 ml-4 group-hover:text-teal-200 transition-colors duration-300">Problem Solver</h4>
                            </div>
                            <p className="text-gray-200 mb-4 leading-relaxed">
                                I don't just code - I solve real business problems. My tip calculator saves my workplace 
                                <span className="text-teal-300 font-semibold"> 45+ minutes daily</span>, proving I understand 
                                how code impacts the bottom line.
                            </p>
                            <div className="text-sm font-semibold text-teal-400 opacity-80">
                                Business Impact • Real Solutions • Measurable Results
                            </div>
                        </div>

                        {/* Fast Learner */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-6 rounded-xl border border-gray-500/30 hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-300 ml-4 group-hover:text-teal-200 transition-colors duration-300">Rapid Learner</h4>
                            </div>
                            <p className="text-gray-200 mb-4 leading-relaxed">
                                <span className="text-teal-300 font-semibold">0 to production</span> in weeks, not months. 
                                While others study theory, I build working applications. This portfolio site? 
                                Built while learning React from scratch.
                            </p>
                            <div className="text-sm font-semibold text-gray-400 opacity-80">
                                Self-Directed • Results-Oriented • Ship Fast
                            </div>
                        </div>

                        {/* Team Player */}
                        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-800/20 p-6 rounded-xl border border-blue-500/30 hover:border-teal-400 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold text-blue-300 ml-4 group-hover:text-teal-200 transition-colors duration-300">Team Ready</h4>
                            </div>
                            <p className="text-gray-200 mb-4 leading-relaxed">
                                <span className="text-teal-300 font-semibold">8+ years</span> of customer service and team leadership 
                                means I communicate clearly, handle feedback well, and understand that great code serves users, not egos.
                            </p>
                            <div className="text-sm font-semibold text-blue-400 opacity-80">
                                Leadership • Communication • User-Focused
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <div className="bg-gradient-to-r from-teal-600/20 to-teal-500/20 rounded-xl p-6 border border-teal-500/30">
                            <p className="text-lg text-teal-200 mb-4">
                                <span className="font-semibold text-white">Ready to contribute from day one. </span> 
                                While others are still learning the basics, I'm already building solutions.
                            </p>
                            <p className="text-sm text-gray-300">
                                Looking for someone who combines technical skills with real-world experience? Let's talk.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Personal Touch */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl p-8 text-white">
                        <h4 className="text-2xl font-semibold mb-4">Beyond the Code</h4>
                        <p className="text-teal-100 leading-relaxed max-w-3xl mx-auto">
                            When I'm not coding, you'll find me watching the White Sox (over the Cubs), 
                            cheering for the Packers (over the bears), or supporting Chelsea FC (Champions of the World). The teal theme of this site 
                            holds special meaning - it's my way of carrying forward the memory of someone 
                            important who inspired me to keep pushing forward, no matter the challenge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About