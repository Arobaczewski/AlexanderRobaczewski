import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from "lucide-react"
import { useState } from "react"

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        loaded: false
    });


    const handleChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }



    return (
        <section id="contact" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Let's Work Together
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to bring your ideas to life? I'm always interested in discussing new opportunities and exciting projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Whether you're looking for a developer to join your team, have a project in mind, 
                                or just want to connect, I'd love to hear from you. Let's create something amazing together!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-teal-400 transition-colors duration-300 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">Email</p>
                                    <a href="mailto:alexander.robaczewski@gmail.com" className="text-white font-semibold hover:text-teal-300 transition-colors duration-200">
                                        alexander.robaczewski@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-teal-400 transition-colors duration-300 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">Phone</p>
                                    <a href="tel:+13123304288" className="text-white font-semibold hover:text-teal-300 transition-colors duration-200">
                                        (312) 330-4288
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-700 hover:border-teal-400 transition-colors duration-300 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">Location</p>
                                    <p className="text-white font-semibold">Homewood, IL</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-gray-700">
                            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                            <div className="flex gap-4">
                                <a 
                                    href="https://github.com/Arobaczewski"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                >
                                    <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/alexander-robaczewski"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                >
                                    <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                        
                        <form className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="block w-full px-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200"
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-colors duration-200 resize-none"
                                        placeholder="Tell me about your project or just say hello..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25 group"
                            >
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                Send Message
                            </button>
                        </form>

                        {/* Optional: Form Status Messages */}
                        <div className="mt-6 space-y-3">
                            {/* Success Message - Hidden by default */}
                            <div className="hidden p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                                <p className="text-green-300 text-sm font-medium">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </p>
                            </div>

                            {/* Error Message - Hidden by default */}
                            <div className="hidden p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                <p className="text-red-300 text-sm font-medium">
                                    ❌ Something went wrong. Please try again or email me directly.
                                </p>
                            </div>

                            {/* Loading State - Hidden by default */}
                            <div className="hidden p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg">
                                <p className="text-teal-300 text-sm font-medium">
                                    📤 Sending your message...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-teal-600/20 to-teal-500/20 rounded-2xl p-8 border border-teal-500/30">
                        <h4 className="text-2xl font-semibold text-white mb-4">
                            Ready to Start Something Great?
                        </h4>
                        <p className="text-teal-200 mb-6 max-w-2xl mx-auto">
                            I'm currently available for new opportunities and exciting projects. 
                            Let's discuss how we can work together to bring your vision to life.
                        </p>
                        <a 
                            href="mailto:alexander.robaczewski@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25"
                        >
                            <Mail className="w-5 h-5" />
                            Email Me Directly
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact