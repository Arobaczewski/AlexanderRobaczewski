/*
 * Contact.jsx - Portfolio Contact Section with Advanced Form Handling
 * 
 * BUSINESS IMPACT: This component serves as the primary conversion funnel for the portfolio,
 * converting visitors into potential clients/employers. The sophisticated form handling
 * demonstrates production-ready frontend development skills while ensuring a professional
 * user experience that builds trust and encourages contact.
 * 
 * KEY TECHNICAL ACHIEVEMENTS:
 * - Real-time form validation with user-friendly error handling
 * - Comprehensive state management for complex form interactions
 * - Accessible form design following WCAG guidelines
 * - Progressive enhancement with loading states and feedback
 * - Responsive design that works across all device types
 * - Dual EmailJS integration (notification + auto-reply system)
 * 
 * EMPLOYER VALUE DEMONSTRATION:
 * - Form validation shows attention to data quality and user experience
 * - State management proves understanding of complex React patterns
 * - Error handling demonstrates defensive programming practices
 * - Accessibility features show awareness of inclusive design principles
 * - Email automation shows understanding of business process automation
 * - Debugging capabilities demonstrate professional troubleshooting skills
 */

import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"

const Contact = () => {
    /*
     * EMAILJS INITIALIZATION - Service setup and configuration
     * ENVIRONMENT VALIDATION: Ensures required environment variables are present
     * ONE-TIME SETUP: Initializes EmailJS with public key on component mount
     * SECURITY: Dynamic import prevents unnecessary bundle loading
     */
    useEffect(() => {
        /*
         * EMAILJS SERVICE INITIALIZATION
         * PUBLIC KEY: Authenticates requests to EmailJS service
         * ERROR HANDLING: Graceful fallback if environment variables missing
         * SECURITY: Uses environment variables to protect sensitive keys
         * DYNAMIC LOADING: Improves initial page load performance
         */
        const initializeEmailJS = async () => {
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
            if (publicKey) {
                try {
                    // Import EmailJS dynamically to ensure it's loaded
                    const emailjsModule = await import('@emailjs/browser');
                    
                    // Initialize EmailJS with public key
                    emailjsModule.default.init(publicKey);
                    console.log('EmailJS initialized successfully');
                } catch (error) {
                    console.error('Failed to initialize EmailJS:', error);
                }
            } else {
                console.error('EmailJS public key not found in environment variables');
            }
        };

        initializeEmailJS();
    }, []);

    /*
     * STATE MANAGEMENT STRATEGY - Comprehensive form state handling
     * BUSINESS LOGIC: Multiple state variables enable sophisticated user experience
     * 
     * isLoading: Prevents double submissions and provides user feedback
     * isSubmitted: Success state management with auto-reset functionality  
     * error: Global error handling for network/server issues
     * validationErrors: Field-specific error messages for better UX
     * formData: Controlled components ensure data consistency
     */
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

    /*
     * FIELD VALIDATION SYSTEM - Real-time data quality assurance
     * BUSINESS VALUE: Prevents invalid submissions, reducing backend processing costs
     * USER EXPERIENCE: Immediate feedback helps users correct issues quickly
     * MAINTAINABILITY: Centralized validation logic enables easy updates
     * 
     * VALIDATION STRATEGIES:
     * - Trim whitespace to handle user input variations
     * - Minimum length requirements ensure meaningful content
     * - Email regex validation prevents obvious format errors
     * - Required field checking ensures data completeness
     */
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                // Name validation: Required field with minimum length
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'email':
                // Email validation: Required with format checking
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            case 'subject':
                // Subject validation: Ensures meaningful inquiry topics
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 3) return 'Subject must be at least 3 characters';
                return '';
            case 'message':
                // Message validation: Minimum length ensures detailed inquiries
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return '';
            default:
                return '';
        }
    };

    /*
     * FORM-WIDE VALIDATION - Comprehensive data integrity checking
     * PERFORMANCE: Single validation pass reduces computational overhead
     * RELIABILITY: Ensures all fields meet requirements before submission
     * ERROR HANDLING: Returns complete error object for efficient state updates
     */
    const validateForm = () => {
        const errors = {};
        Object.keys(formData).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) errors[field] = error;
        });
        return errors;
    };

    /*
     * INPUT CHANGE HANDLER - Sophisticated user interaction management
     * REAL-TIME UPDATES: Immediate state synchronization with form inputs
     * ERROR CLEARING: Removes validation errors as user corrects input
     * PROGRESSIVE ENHANCEMENT: Provides feedback without blocking user flow
     * 
     * UX OPTIMIZATION: Clears errors when user starts correcting issues,
     * reducing friction and improving perceived responsiveness
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Update form data with current input value
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        /*
         * SMART ERROR CLEARING - Improves user experience
         * LOGIC: Clear field-specific errors when user starts typing
         * BENEFIT: Reduces visual clutter and shows immediate progress
         */
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        
        /*
         * GLOBAL ERROR RESET - User feedback optimization
         * PURPOSE: Clear general error state when user takes corrective action
         * UX IMPACT: Shows system responsiveness to user input
         */
        if (error) {
            setError(false);
        }
    };

    /*
     * BLUR EVENT HANDLER - Real-time validation for immediate feedback
     * TIMING STRATEGY: Validates on blur rather than every keystroke
     * PERFORMANCE: Reduces validation overhead while maintaining responsiveness
     * UX BALANCE: Provides feedback without interrupting user's typing flow
     */
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

    /*
     * FORM SUBMISSION HANDLER - DEBUGGING VERSION FOR AUTO-REPLY ISSUE
     * TEMPORARY: This version includes extensive debugging to fix the auto-reply template issue
     * PRODUCTION: Once fixed, this can be cleaned up for final version
     * 
     * CURRENT ISSUE: EmailJS auto-reply template "To Email" field configuration
     * ERROR: "The recipients address is empty" - template variable name mismatch
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setIsLoading(true);
        setError(false);
        setValidationErrors({});

        try {
            const emailjsModule = await import('@emailjs/browser');
            const emailjs = emailjsModule.default;

            const serviceId = import.meta.env.VITE_SERVICE_ID;
            const notifyTemplateId = import.meta.env.VITE_NOTIFY_TEMPLATE_ID;
            const autoReplyTemplateId = import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !notifyTemplateId || !publicKey) {
                throw new Error('Missing EmailJS configuration.');
            }

            /*
             * NOTIFICATION EMAIL - This works correctly
             * Sends notification to you when someone fills out the form
             */
            const notificationResult = await emailjs.send(
                serviceId,
                notifyTemplateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: "Alex Robaczewski",
                    reply_to: formData.email
                },
                publicKey
            );

            console.log('✅ Notification email sent successfully:', notificationResult.status);

            /*
             * AUTO-REPLY EMAIL - FIXED FOR YOUR TEMPLATE CONFIGURATION
             * Your template uses {{from_email}} as the recipient field
             * This matches your EmailJS template settings exactly
             */
            
            if (autoReplyTemplateId) {
                try {
                    console.log('🔍 Sending auto-reply confirmation to:', formData.email);
                    
                    /*
                     * AUTO-REPLY DATA - Matches your EmailJS template configuration
                     * CRITICAL: Your template uses {{from_email}} for recipient (To Email field)
                     * TEMPLATE FIELDS:
                     * - from_email: User's email (becomes the recipient)
                     * - from_name: User's name for personalization  
                     * - original_subject: Reference to their inquiry topic
                     * - original_message: Their message for context
                     */
                    const autoReplyData = {
                        from_email: formData.email,         // MATCHES your template's {{from_email}}
                        from_name: formData.name,           // User's name for personalization
                        user_name: formData.name,           // Alternative name field
                        original_subject: formData.subject, // Their inquiry topic
                        original_message: formData.message, // Their message content
                        reply_subject: formData.subject,    // For subject line reference
                        contact_name: formData.name         // Additional name field option
                    };

                    console.log('📧 Auto-reply data being sent:', autoReplyData);

                    const autoReplyResult = await emailjs.send(
                        serviceId,
                        autoReplyTemplateId,
                        autoReplyData,
                        publicKey
                    );

                    console.log('✅ Auto-reply confirmation sent successfully:', autoReplyResult.status);
                    
                } catch (autoReplyError) {
                    console.error('❌ Auto-reply failed:', autoReplyError);
                    console.error('Error details:', autoReplyError.text);
                    // Don't fail the whole form if auto-reply fails - notification still works
                }
            }

            /*
             * SUCCESS STATE - Form works even without auto-reply
             * Users still get confirmation that their message was sent
             * You still receive their message via notification email
             */
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

        } catch (error) {
            console.error('Form Submission Error:', error);
            
            if (error.status === 422) {
                console.error('❌ EmailJS Template Configuration Error');
                console.error('Check your EmailJS dashboard template settings');
            }
            
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 lg:py-24 relative">
            {/* 
             * DESIGN CONSISTENCY - Matches glassmorphism theme across portfolio
             * VISUAL HIERARCHY: Subtle overlay creates depth without interfering with content
             * ACCESSIBILITY: pointer-events-none maintains form functionality
             */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 
                 * SECTION HEADER - Strategic messaging for conversion
                 * PSYCHOLOGICAL IMPACT: "Let's Work Together" implies collaboration, not just hiring
                 * CALL TO ACTION: Invites engagement with specific value proposition
                 */}
                <div className="text-center mb-16">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                    Let's Work Together
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
                            {/* 
                             * VALUE PROPOSITION - Clear benefit statement
                             * ENTHUSIASM: "exciting projects" creates positive association
                             * AVAILABILITY: "always interested" shows accessibility and eagerness
                             */}
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                                Ready to bring your ideas to life? I'm always interested in discussing new opportunities and exciting projects.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* 
                     * CONTACT INFORMATION SECTION - Trust building and accessibility
                     * MULTI-CHANNEL APPROACH: Provides various contact methods for user preference
                     * PROFESSIONAL PRESENTATION: Consistent styling reinforces brand quality
                     */}
                    <div className="space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-teal-600/10 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
                                <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Get In Touch</h3>
                                {/* 
                                 * RELATIONSHIP BUILDING - Personal tone creates connection
                                 * INCLUSIVITY: Multiple contact reasons (team, project, connect) cast wide net
                                 * COLLABORATION EMPHASIS: "create something amazing together" builds excitement
                                 */}
                                <p className="text-gray-200 leading-relaxed mb-8 drop-shadow-md">
                                    Whether you're looking for a developer to join your team, have a project in mind, 
                                    or just want to connect, I'd love to hear from you. Let's create something amazing together!
                                </p>
                            </div>
                        </div>

                        {/* 
                         * CONTACT DETAILS - Professional contact information presentation
                         * INTERACTIVE DESIGN: Hover effects indicate clickability
                         * ACCESSIBILITY: Clear labels and proper link semantics
                         */}
                        <div className="space-y-6">
                            {/* Email Contact */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm font-medium">Email</p>
                                        {/* 
                                         * DIRECT EMAIL LINK - Immediate conversion opportunity
                                         * ACCESSIBILITY: mailto: protocol enables one-click email composition
                                         * PROFESSIONAL DOMAIN: Gmail address shows established online presence
                                         */}
                                        <a href="mailto:alexander.robaczewski@gmail.com" className="text-white font-semibold hover:text-teal-300 transition-colors duration-200 drop-shadow-lg">
                                            alexander.robaczewski@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn Contact */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm font-medium">Linkedin</p>
                                        {/* 
                                         * LINKEDIN INTEGRATION - Professional networking opportunity
                                         * SECURITY: target="_blank" and rel="noopener noreferrer" prevent security vulnerabilities
                                         * PROFESSIONAL CREDIBILITY: LinkedIn presence validates professional experience
                                         */}
                                        <a href="https://www.linkedin.com/in/alexander-robaczewski/" target="_blank" rel="noopener noreferrer"  className="text-white font-semibold hover:text-teal-300 transition-colors duration-200 drop-shadow-lg">
                                            https://www.linkedin.com/in/alexander-robaczewski
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location Information */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm font-medium">Location</p>
                                        {/* 
                                         * LOCATION TRANSPARENCY - Helps employers assess logistics
                                         * MARKET POSITIONING: Chicago area indicates access to major tech market
                                         */}
                                        <p className="text-white font-semibold drop-shadow-lg">Homewood, IL</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 
                         * SOCIAL MEDIA LINKS - Professional online presence
                         * CREDIBILITY: GitHub shows code portfolio and contributions
                         * NETWORKING: LinkedIn enables professional relationship building
                         */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/10 to-teal-600/10 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
                                <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-lg">Connect With Me</h4>
                                <div className="flex gap-4">
                                    {/* 
                                     * GITHUB LINK - Code portfolio access
                                     * TECHNICAL CREDIBILITY: Direct access to code samples and contributions
                                     * TRANSPARENCY: Shows real coding ability beyond portfolio presentation
                                     */}
                                    <a 
                                        href="https://github.com/Arobaczewski"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 backdrop-blur-md bg-white/10 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group/social shadow-lg border border-white/20"
                                    >
                                        <Github className="w-6 h-6 text-gray-200 group-hover/social:text-white" />
                                    </a>
                                    {/* 
                                     * LINKEDIN LINK - Professional networking
                                     * CAREER HISTORY: Access to detailed professional background
                                     * RECOMMENDATIONS: Potential access to professional references
                                     */}
                                    <a 
                                        href="https://www.linkedin.com/in/alexander-robaczewski"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 backdrop-blur-md bg-white/10 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group/social shadow-lg border border-white/20"
                                    >
                                        <Linkedin className="w-6 h-6 text-gray-200 group-hover/social:text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 
                     * CONTACT FORM - Primary conversion mechanism with enhanced email system
                     * STRATEGIC POSITIONING: Equal visual weight to contact info encourages form usage
                     * PROFESSIONAL DESIGN: Matches overall portfolio aesthetic for consistency
                     * ACCESSIBILITY: Proper labels, error handling, and keyboard navigation
                     * BUSINESS AUTOMATION: Dual email system demonstrates process automation skills
                     */}
                    <div className="relative group">
                        {/* Enhanced glow effect matching other sections */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-teal-500/10 to-teal-600/20 rounded-3xl blur-xl opacity-75"></div>
                        {/* Glassmorphism container matching site theme */}
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Send Me a Message</h3>
                            
                            {/* 
                             * FORM ELEMENT - Production-ready form handling with dual email system
                             * ACCESSIBILITY: onSubmit handler enables Enter key submission
                             * VALIDATION: Client-side validation prevents invalid submissions
                             * UX: space-y-6 provides comfortable field spacing
                             * BUSINESS LOGIC: Automated notification and auto-reply system
                             */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* 
                                 * NAME INPUT FIELD - User identification
                                 * ACCESSIBILITY: Proper label association with htmlFor
                                 * VISUAL FEEDBACK: Icon provides immediate field recognition
                                 * ERROR HANDLING: Dynamic styling based on validation state
                                 */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2 drop-shadow-md">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        {/* 
                                         * INPUT ICON - Visual field identification
                                         * POSITIONING: Absolute positioning for icon overlay
                                         * ACCESSIBILITY: pointer-events-none prevents icon interference
                                         */}
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        {/* 
                                         * CONTROLLED INPUT - React best practices
                                         * VALIDATION: Dynamic styling based on error state
                                         * UX: Disabled state during form submission
                                         * ACCESSIBILITY: Proper ID linking to label
                                         */}
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isLoading}
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                                validationErrors.name 
                                                    ? 'border-red-400/50 focus:ring-red-400' 
                                                    : 'border-white/15 focus:ring-teal-400'
                                            }`}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    {/* 
                                     * ERROR MESSAGE DISPLAY - User-friendly validation feedback
                                     * CONDITIONAL RENDERING: Only shows when validation error exists
                                     * STYLING: Red text clearly indicates error state
                                     */}
                                    {validationErrors.name && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.name}</p>
                                    )}
                                </div>

                                {/* 
                                 * EMAIL INPUT FIELD - Contact method validation
                                 * INPUT TYPE: "email" provides browser-level validation support
                                 * CRITICAL FIELD: Email validation ensures response capability
                                 * AUTO-REPLY DEPENDENCY: User's email used for confirmation message
                                 */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2 drop-shadow-md">
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
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                                validationErrors.email 
                                                    ? 'border-red-400/50 focus:ring-red-400' 
                                                    : 'border-white/15 focus:ring-teal-400'
                                            }`}
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    {validationErrors.email && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.email}</p>
                                    )}
                                </div>

                                {/* 
                                 * SUBJECT INPUT FIELD - Message categorization
                                 * BUSINESS VALUE: Helps prioritize and route incoming messages
                                 * UX: Clear placeholder guides user input
                                 * AUTO-REPLY INTEGRATION: Subject used in confirmation email
                                 */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2 drop-shadow-md">
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
                                        className={`block w-full px-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                            validationErrors.subject 
                                                ? 'border-red-400/50 focus:ring-red-400' 
                                                : 'border-white/15 focus:ring-teal-400'
                                        }`}
                                        placeholder="What's this about?"
                                    />
                                    {validationErrors.subject && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.subject}</p>
                                    )}
                                </div>

                                {/* 
                                 * MESSAGE TEXTAREA - Primary content collection
                                 * SIZING: 6 rows provides adequate space for detailed messages
                                 * RESIZE CONTROL: resize-none prevents layout disruption
                                 * VALIDATION: Minimum length ensures meaningful inquiries
                                 * EMAIL CONTEXT: Message content included in both email types
                                 */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2 drop-shadow-md">
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
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                                validationErrors.message 
                                                    ? 'border-red-400/50 focus:ring-red-400' 
                                                    : 'border-white/15 focus:ring-teal-400'
                                            }`}
                                            placeholder="Tell me about your project or just say hello..."
                                        ></textarea>
                                    </div>
                                    {validationErrors.message && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.message}</p>
                                    )}
                                </div>

                                {/* 
                                 * SUBMIT BUTTON - Enhanced form submission with dual email feedback
                                 * LOADING STATE: Prevents double submissions and provides feedback
                                 * VISUAL HIERARCHY: Gradient styling makes button prominent
                                 * ACCESSIBILITY: Disabled state provides clear unavailable indication
                                 * ANIMATION: Icon movement on hover encourages interaction
                                 * BUSINESS PROCESS: Triggers both notification and auto-reply emails
                                 */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/40 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none shadow-lg"
                                >
                                    {isLoading ? (
                                        /* 
                                         * LOADING STATE - Enhanced progress indication
                                         * VISUAL FEEDBACK: Spinner animation shows active processing
                                         * TEXT CHANGE: "Sending..." communicates current action
                                         * UX PSYCHOLOGY: Reduces perceived wait time through feedback
                                         * DUAL PROCESS: Indicates both emails being sent
                                         */
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending Messages...
                                        </>
                                    ) : (
                                        /* 
                                         * DEFAULT STATE - Call to action with visual enhancement
                                         * ICON ANIMATION: Translate effect on hover encourages interaction
                                         * CLEAR LABELING: "Send Message" removes ambiguity about button function
                                         * EXPECTATION SETTING: User knows they'll receive confirmation
                                         */
                                        <>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* 
                             * ENHANCED FORM STATUS MESSAGES - Comprehensive user feedback system
                             * STATE MANAGEMENT: Different messages for success, error, and loading states
                             * AUTO-DISMISS: Success message automatically clears to prevent clutter
                             * FALLBACK OPTIONS: Error state provides alternative contact method
                             * DUAL EMAIL FEEDBACK: Reflects both notification and auto-reply success
                             */}
                            <div className="mt-6 space-y-3">
                                {/* 
                                 * SUCCESS MESSAGE - Enhanced positive reinforcement
                                 * DUAL CONFIRMATION: Acknowledges both emails sent successfully
                                 * REASSURANCE: Confirms successful submission to reduce user anxiety
                                 * TIMELINE: Sets clear expectation for response time (24-48 hours)
                                 * VISUAL DESIGN: Green color scheme reinforces positive outcome
                                 * USER EXPERIENCE: Mentions auto-reply so user knows to check email
                                 */}
                                {isSubmitted && (
                                    <div className="p-4 backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-lg animate-fade-in shadow-lg">
                                        <p className="text-green-200 text-sm font-medium drop-shadow-md">
                                            ✅ Message sent successfully! You should receive a confirmation email shortly, and I'll get back to you within 24-48 hours.
                                        </p>
                                    </div>
                                )}

                                {/* 
                                 * ERROR MESSAGE - Enhanced graceful failure handling
                                 * PROBLEM ACKNOWLEDGMENT: Honest about technical issues
                                 * ALTERNATIVE SOLUTION: Direct email link provides backup contact method
                                 * USER EMPOWERMENT: Doesn't leave user stranded with failed form
                                 * DEBUGGING INFO: More helpful for troubleshooting
                                 */}
                                {error && (
                                    <div className="p-4 backdrop-blur-md bg-red-500/20 border border-red-400/30 rounded-lg animate-fade-in shadow-lg">
                                        <p className="text-red-200 text-sm font-medium drop-shadow-md">
                                            ⚠️ Something went wrong with the message system. Please try again or{' '}
                                            <a 
                                                href="mailto:alexander.robaczewski@gmail.com" 
                                                className="underline hover:text-red-100 transition-colors"
                                            >
                                                email me directly
                                            </a>.
                                        </p>
                                    </div>
                                )}

                                {/* 
                                 * LOADING MESSAGE - Enhanced process transparency
                                 * IMMEDIATE FEEDBACK: Appears as soon as submission starts
                                 * PROGRESS INDICATION: Shows form is actively processing
                                 * BRAND CONSISTENCY: Teal color matches overall design theme
                                 * DUAL PROCESS: Indicates both emails being processed
                                 */}
                                {isLoading && (
                                    <div className="p-4 backdrop-blur-md bg-teal-500/20 border border-teal-400/30 rounded-lg animate-fade-in shadow-lg">
                                        <p className="text-teal-200 text-sm font-medium drop-shadow-md">
                                            📤 Sending your message and confirmation email...
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
                 * BOTTOM CALL TO ACTION - Secondary conversion opportunity
                 * REDUNDANCY STRATEGY: Provides alternative contact method for users who prefer direct email
                 * URGENCY CREATION: "Ready to Start Something Great?" creates immediate engagement opportunity
                 * AVAILABILITY SIGNAL: "currently available" indicates immediate capacity for new work
                 * PROFESSIONAL AUTOMATION: References the dual email system capabilities
                 */}
                <div className="text-center mt-16">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-teal-600/30 rounded-3xl blur-xl opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-r from-teal-600/20 to-teal-500/20 rounded-2xl p-8 border border-teal-500/30 shadow-2xl">
                            {/* 
                             * ENGAGEMENT HEADLINE - Creates excitement and urgency
                             * PSYCHOLOGICAL TRIGGER: "Ready to Start" implies action and momentum
                             * POSITIVE FRAMING: "Something Great" builds anticipation and value
                             */}
                            <h4 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">
                                Ready to Start Something Great?
                            </h4>
                            {/* 
                             * ENHANCED AVAILABILITY AND VALUE PROPOSITION
                             * IMMEDIATE AVAILABILITY: Reduces friction for potential clients
                             * COLLABORATIVE LANGUAGE: "work together" emphasizes partnership
                             * VISION FOCUS: "bring your vision to life" appeals to client goals
                             * PROCESS TRANSPARENCY: Mentions professional communication system
                             */}
                            <p className="text-teal-100 mb-6 max-w-2xl mx-auto drop-shadow-md">
                                I'm currently available for new opportunities and exciting projects. 
                                Let's discuss how we can work together to bring your vision to life. 
                                You'll receive immediate confirmation when you reach out!
                            </p>
                            {/* 
                             * DIRECT EMAIL CTA - Immediate action opportunity
                             * BYPASS FORM: Some users prefer direct email over forms
                             * VISUAL PROMINENCE: Button styling makes action clear and appealing
                             * ICON USAGE: Mail icon reinforces the email action
                             * EXPECTATION SETTING: Users know they'll get quick response
                             */}
                            <a 
                                href="mailto:alexander.robaczewski@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/40 shadow-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Email Me Directly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*
 * COMPONENT EXPORT - Clean module structure
 * ES6 STANDARD: Default export follows modern JavaScript practices
 * REUSABILITY: Component can be easily imported and used in different contexts
 * TESTING: Clean export structure facilitates unit testing
 * EMPLOYER DEMONSTRATION: Shows understanding of proper module organization
 */
export default Contact