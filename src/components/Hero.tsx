import { Link } from 'react-router-dom';
import profileImage from '../assets/Boobalan.jpg';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left animate-slide-up">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            Hi, I'm{' '}
                            <span className="text-gradient">Boobalan Selvaraj</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                            Software Developer
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                            With 1.5+ years of experience building responsive and scalable web applications.
                            Passionate about creating clean, performant, and user-friendly interfaces.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-effect"
                            >
                                Get In Touch
                            </Link>
                            <Link
                                to="/projects"
                                className="px-8 py-4 glass rounded-lg font-semibold hover:glow-effect transition-all duration-300"
                            >
                                View My Work
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-8 justify-center lg:justify-start">
                            <a
                                href="https://github.com/Boobalanselvaraj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass rounded-full hover:glow-effect transition-all hover:scale-110"
                                aria-label="GitHub"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:smartboobalan77@gmail.com"
                                className="p-3 glass rounded-full hover:glow-effect transition-all hover:scale-110"
                                aria-label="Email"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            <a
                                href="tel:6380601667"
                                className="p-3 glass rounded-full hover:glow-effect transition-all hover:scale-110"
                                aria-label="Phone"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Profile Image - Enhanced with Multiple Animations */}
                    {/* Profile Image - Clean & Modern */}
                    <div className="flex-1 flex justify-center lg:justify-end animate-fade-in relative z-10">
                        <div className="relative group">
                            {/* Simplified Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                            {/* Image Container */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border-2 border-white/10 glass">
                                <img
                                    src={profileImage}
                                    alt="Boobalan Selvaraj - Software Developer"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <Link to="/about" aria-label="Scroll to about section">
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
