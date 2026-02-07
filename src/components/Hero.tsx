import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import profileImage from '../assets/Boobalan.jpg';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Software Developer';
    
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"
        >
            {/* Animated Particle Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
                
                {/* Smaller Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-30 animate-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    ></div>
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        {/* Greeting - Slide in from left */}
                        <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            <p className="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                👋 Welcome to my portfolio
                            </p>
                        </div>

                        {/* Name - Slide in from left */}
                        <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                                Hi, I'm{' '}
                                <span className="text-gradient animate-gradient-shift inline-block hover:scale-105 transition-transform duration-300">
                                    Boobalan Selvaraj
                                </span>
                            </h1>
                        </div>

                        {/* Title with Typewriter Effect - Fade in */}
                        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4 min-h-[3rem]">
                                <span className="inline-block">{displayedText}</span>
                                <span className="inline-block w-0.5 h-8 bg-primary-600 ml-1 animate-blink"></span>
                            </h2>
                        </div>

                        {/* Description - Slide in from left */}
                        <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                With <span className="font-bold text-primary-600 dark:text-primary-400">1.5+ years</span> of experience building responsive and scalable web applications.
                                Passionate about creating clean, performant, and user-friendly interfaces.
                            </p>
                        </div>

                        {/* CTA Buttons - Slide up */}
                        <div className="animate-slide-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link
                                    to="/contact"
                                    className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-effect relative overflow-hidden"
                                >
                                    <span className="relative z-10">Get In Touch</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                                <Link
                                    to="/projects"
                                    className="group px-8 py-4 glass rounded-xl font-semibold hover:glow-effect transition-all duration-300 relative overflow-hidden border border-primary-200 dark:border-primary-800"
                                >
                                    <span className="relative z-10">View My Work</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            </div>
                        </div>

                        {/* Social Links - Fade in */}
                        <div className="animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                                <a
                                    href="https://github.com/Boobalanselvaraj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-4 glass rounded-xl hover:glow-effect transition-all hover:scale-110 hover:-translate-y-1"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-6 h-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:smartboobalan77@gmail.com"
                                    className="group p-4 glass rounded-xl hover:glow-effect transition-all hover:scale-110 hover:-translate-y-1"
                                    aria-label="Email"
                                >
                                    <svg className="w-6 h-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                                <a
                                    href="tel:6380601667"
                                    className="group p-4 glass rounded-xl hover:glow-effect transition-all hover:scale-110 hover:-translate-y-1"
                                    aria-label="Phone"
                                >
                                    <svg className="w-6 h-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image - Enhanced with Animations */}
                    <div className="flex-1 flex justify-center lg:justify-end animate-scale-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                        <div className="relative group">
                            {/* Animated Rings */}
                            <div className="absolute -inset-4 rounded-full border-2 border-primary-500/30 animate-ping-slow"></div>
                            <div className="absolute -inset-8 rounded-full border-2 border-accent-500/20 animate-ping-slower"></div>
                            
                            {/* Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-rotate"></div>

                            {/* Image Container */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 border-4 border-white/20 dark:border-white/10 glass">
                                <img
                                    src={profileImage}
                                    alt="Boobalan Selvaraj - Software Developer"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay with Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating Tech Icons */}
                            <div className="absolute -top-4 -right-4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg animate-float-slow">
                                <span className="text-2xl">⚛️</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg animate-float-slow" style={{ animationDelay: '1s' }}>
                                <span className="text-2xl">💻</span>
                            </div>
                            <div className="absolute top-1/4 -left-8 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg animate-float-slow" style={{ animationDelay: '2s' }}>
                                <span className="text-2xl">🚀</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Enhanced */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                    <Link to="/about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 group">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Scroll Down</span>
                        <div className="p-2 glass rounded-full group-hover:glow-effect transition-all">
                            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                }

                @keyframes particle {
                    0%, 100% {
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-100px) translateX(50px) scale(1.5);
                        opacity: 0.5;
                    }
                    90% {
                        opacity: 0.3;
                    }
                }

                @keyframes gradient-shift {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes gradient-rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes ping-slow {
                    0% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.3;
                    }
                    100% {
                        transform: scale(1.2);
                        opacity: 0;
                    }
                }

                @keyframes ping-slower {
                    0% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.15);
                        opacity: 0.2;
                    }
                    100% {
                        transform: scale(1.3);
                        opacity: 0;
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes slide-in-left {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-blink {
                    animation: blink 1s step-end infinite;
                }

                .animate-particle {
                    animation: particle linear infinite;
                }

                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 3s ease infinite;
                }

                .animate-gradient-rotate {
                    animation: gradient-rotate 8s linear infinite;
                }

                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-ping-slower {
                    animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-slide-in-left {
                    animation: slide-in-left 0.8s ease-out;
                }

                .animate-scale-in {
                    animation: scale-in 0.8s ease-out;
                }

                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
        </section>
    );
};

export default Hero;
