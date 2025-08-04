import { Github, Linkedin, Instagram, Facebook, Download, Contact } from "lucide-react"
import coding from "../Pictures/coding.jpg"

const Hero = () => {
    return (
        <section className="relative py-8 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                            Hello There! <span className="inline-block animate-wave">👋</span>
                            <br />
                            My name is{" "}
                            <span className="text-teal-400">Alexander Robaczewski,</span>
                            <br />
                            and I'm a{" "}
                            <span className="text-teal-400">Web Developer</span>.
                        </h1>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <a 
                                href="https://github.com/Arobaczewski"
                                className="text-teal-400 hover:text-teal-300 hover:scale-110 transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/alexander-robaczewski"
                                className="text-teal-400 hover:text-teal-300 hover:scale-110 transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.instagram.com/arobaczewski/"
                                className="text-teal-400 hover:text-teal-300 hover:scale-110 transition-all duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.facebook.com/alex.robaczewski"
                                className="text-teal-400 hover:text-teal-300 hover:scale-110 transition-all duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a 
                                href="/#contact" 
                                className="inline-flex items-center p-[1px] bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-600 hover:to-teal-400 hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-300 rounded-full group"
                            >
                                <span className="px-6 py-3 bg-black rounded-full text-white font-semibold uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                                    Contact Me
                                    <Contact className="w-4 h-4" />
                                </span>
                            </a>
                            <a 
                                href="/Alexander_Robaczewski_Resume.docx" 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-600 hover:to-teal-400 hover:shadow-lg hover:shadow-teal-400/25 rounded-full text-white font-semibold uppercase tracking-wider text-sm gap-2 hover:gap-3 transition-all duration-200 group"
                            >
                                Get Resume 
                                <Download className="w-4 h-4" />    
                            </a>
                        </div>
                    </div>
                    
                    {/* Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full hover:shadow-teal-400/20 hover:shadow-2xl transition-shadow duration-300">
                            <img 
                                src={coding} 
                                alt="Alex coding" 
                                className="w-full h-auto object-cover"
                            />
                            {/* Optional: Add a subtle overlay for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero