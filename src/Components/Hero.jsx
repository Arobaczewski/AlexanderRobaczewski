import { Github, Linkedin, Instagram, Facebook, Download, Contact } from "lucide-react"
import coding from '../Pictures/coding.jpg'

const Hero = () => {
    return (
        <section className="relative py-8 lg:py-16">
            {/* Modern gradient overlay with rounded borders */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/30 via-transparent to-black/20 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
                        {/* Modern glass card for main text */}
                        <div className="relative group">
                            {/* Glow effect behind the card */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            
                            {/* Main glass card */}
                            <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                                    <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                        My name is
                                    </span>
                                    <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg"> Alexander Robaczewski,</span>
                                    <span className="inline-block animate-wave drop-shadow-lg">👋</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                        and I'm a
                                    </span>
                                    <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-lg"> Web Developer</span>.
                                </h1>
                            </div>
                        </div>
                        
                        {/* Modern floating social links */}
                        <div className="relative group">
                            {/* Subtle glow for social container */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/10 to-teal-600/10 rounded-2xl blur-lg opacity-75"></div>
                            
                            <div className="relative flex items-center gap-6 backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl w-fit">
                                <a 
                                    href="https://github.com/Arobaczewski"
                                    className="text-teal-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg hover:drop-shadow-2xl"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/alexander-robaczewski"
                                    className="text-teal-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg hover:drop-shadow-2xl"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a 
                                    href="https://www.instagram.com/arobaczewski/"
                                    className="text-teal-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg hover:drop-shadow-2xl"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a 
                                    href="https://www.facebook.com/alex.robaczewski"
                                    className="text-teal-400 hover:text-white hover:scale-125 transition-all duration-300 drop-shadow-lg hover:drop-shadow-2xl"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        
                        {/* Enhanced action buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {/* Contact Me button - styled like projects "Code" button */}
                            <a 
                                href="/#contact" 
                                className="flex items-center gap-2 px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 hover:border-teal-400/50 text-gray-200 hover:text-teal-200 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 group shadow-lg"
                            >
                                <Contact className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                Contact Me
                            </a>
                            {/* Get Resume button - keeps the gradient style */}
                            <a 
                                href="/Alexander_Robaczewski_Resume.docx" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-600 hover:to-teal-400 hover:shadow-2xl hover:shadow-teal-400/40 rounded-full text-white font-semibold uppercase tracking-wider text-sm gap-2 hover:gap-3 transition-all duration-300 group shadow-lg"
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero