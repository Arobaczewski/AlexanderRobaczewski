import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const notifyId = import.meta.env.VITE_NOTIFY_TEMPLATE_ID;
    const autoreplyId = import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate individual field
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            case 'subject':
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 3) return 'Subject must be at least 3 characters';
                return '';
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return '';
            default:
                return '';
        }
    };

    // Validate entire form
    const validateForm = () => {
        const errors = {};
        Object.keys(formData).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) errors[field] = error;
        });
        return errors;
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear validation error for this field
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        
        // Clear general error state when user starts typing
        if (error) {
            setError(false);
        }
    };

    // Handle field blur for real-time validation
    const handleBlur = (e) => {
        const { name, value } = e.target;
        const fieldError = validateField(name, value);
        if (fieldError) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: fieldError
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setIsLoading(true);
        setError(false);
        setValidationErrors({});

        try {
            // Initialize EmailJS with your public key
            emailjs.init(publicKey);

            // Prepare template parameters
            const templateParams = {
                from_name: formData.name.trim(),
                from_email: formData.email.trim(),
                subject: formData.subject.trim(),
                message: formData.message.trim(),
                to_name: 'Alex Robaczewski'
            };

            // Send notification email to you
            await emailjs.send(serviceId, notifyId, templateParams);

            // Send auto-reply to the user
            await emailjs.send(serviceId, autoreplyId, templateParams);

            // Success - reset form and show success message
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

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
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isLoading}
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                            validationErrors.name 
                                                ? 'border-red-500 focus:ring-red-400' 
                                                : 'border-gray-600 focus:ring-teal-400'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {validationErrors.name && (
                                    <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
                                )}
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
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isLoading}
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                            validationErrors.email 
                                                ? 'border-red-500 focus:ring-red-400' 
                                                : 'border-gray-600 focus:ring-teal-400'
                                        }`}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                {validationErrors.email && (
                                    <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
                                )}
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
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    disabled={isLoading}
                                    className={`block w-full px-3 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                        validationErrors.subject 
                                            ? 'border-red-500 focus:ring-red-400' 
                                            : 'border-gray-600 focus:ring-teal-400'
                                    }`}
                                    placeholder="What's this about?"
                                />
                                {validationErrors.subject && (
                                    <p className="mt-1 text-sm text-red-400">{validationErrors.subject}</p>
                                )}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isLoading}
                                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                            validationErrors.message 
                                                ? 'border-red-500 focus:ring-red-400' 
                                                : 'border-gray-600 focus:ring-teal-400'
                                        }`}
                                        placeholder="Tell me about your project or just say hello..."
                                    ></textarea>
                                </div>
                                {validationErrors.message && (
                                    <p className="mt-1 text-sm text-red-400">{validationErrors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/25 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Form Status Messages */}
                        <div className="mt-6 space-y-3">
                            {/* Success Message */}
                            {isSubmitted && (
                                <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg animate-fade-in">
                                    <p className="text-green-300 text-sm font-medium">
                                        ✅ Message sent successfully! I'll get back to you within 24-48 hours.
                                    </p>
                                </div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg animate-fade-in">
                                    <p className="text-red-300 text-sm font-medium">
                                        ❌ Something went wrong. Please try again or{' '}
                                        <a 
                                            href="mailto:alexander.robaczewski@gmail.com" 
                                            className="underline hover:text-red-200 transition-colors"
                                        >
                                            email me directly
                                        </a>.
                                    </p>
                                </div>
                            )}

                            {/* Loading State */}
                            {isLoading && (
                                <div className="p-4 bg-teal-900/20 border border-teal-500/30 rounded-lg animate-fade-in">
                                    <p className="text-teal-300 text-sm font-medium">
                                        📤 Sending your message...
                                    </p>
                                </div>
                            )}
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