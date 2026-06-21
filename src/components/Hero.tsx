import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/Boobalan.jpg';
import { calculateExperience } from '../utils/experience';

const ROLES = ['Software Developer', 'React Engineer', 'Full-Stack Builder', 'Problem Solver'];

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const expText = calculateExperience();

    const heroRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [cursor, setCursor] = useState({ x: 50, y: 50 });
    const [isHoveringCard, setIsHoveringCard] = useState(false);

    // Typewriter cycling through multiple roles
    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        let charIndex = 0;
        let typingInterval: ReturnType<typeof setInterval> | undefined;
        let pauseTimeout: ReturnType<typeof setTimeout> | undefined;
        let deletingInterval: ReturnType<typeof setInterval> | undefined;

        typingInterval = setInterval(() => {
            if (charIndex <= currentRole.length) {
                setDisplayedText(currentRole.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                pauseTimeout = setTimeout(() => {
                    let deleteIndex = currentRole.length;
                    deletingInterval = setInterval(() => {
                        if (deleteIndex >= 0) {
                            setDisplayedText(currentRole.slice(0, deleteIndex));
                            deleteIndex--;
                        } else {
                            clearInterval(deletingInterval);
                            setRoleIndex((prev) => (prev + 1) % ROLES.length);
                        }
                    }, 40);
                }, 1800);
            }
        }, 90);

        return () => {
            clearInterval(typingInterval);
            clearInterval(deletingInterval);
            clearTimeout(pauseTimeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roleIndex]);

    // Cursor-reactive background glow (tracked across whole hero)
    const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setCursor({ x, y });
    };

    // 3D tilt on the profile card
    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 24;
        const rotateX = (0.5 - py) * 24;
        setTilt({ x: rotateX, y: rotateY });
    };

    const resetCardTilt = () => {
        setTilt({ x: 0, y: 0 });
        setIsHoveringCard(false);
    };

    return (
        <section
            id="home"
            ref={heroRef}
            onMouseMove={handleHeroMouseMove}
            className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-950"
        >
            {/* Cursor-reactive glow */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${cursor.x}% ${cursor.y}%, rgba(124, 58, 237, 0.18), transparent 60%)`,
                }}
            ></div>

            {/* Base ambient gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/40 to-gray-950"></div>

            {/* Dot grid */}
            <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>

            {/* Floating blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-fuchsia-600/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/15 to-pink-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                {/* Drifting particles */}
                {[...Array(16)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full opacity-40 animate-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${6 + Math.random() * 8}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        {/* Playful eyebrow badge */}
                        <div className="animate-slide-in-left opacity-0 inline-flex" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 hover:bg-cyan-400/20 hover:scale-105 transition-all duration-300 cursor-default">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-dot"></span>
                                Available for new projects
                            </span>
                        </div>

                        {/* Name */}
                        <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-white">
                                Hi, I'm{' '}
                                <span className="relative inline-block group cursor-default">
                                    <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] inline-block group-hover:scale-105 transition-transform duration-300">
                                        Boobalan Selvaraj
                                    </span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                                        <path d="M0,5 Q75,0 150,5 T300,5" stroke="url(#underline-gradient)" strokeWidth="3" fill="none" className="animate-draw-underline" />
                                        <defs>
                                            <linearGradient id="underline-gradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#e879f9" />
                                                <stop offset="50%" stopColor="#67e8f9" />
                                                <stop offset="100%" stopColor="#fcd34d" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </h1>
                        </div>

                        {/* Typewriter role */}
                        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-4 min-h-[3rem]">
                                <span className="inline-block">{displayedText}</span>
                                <span className="inline-block w-0.5 h-8 bg-cyan-400 ml-1 animate-blink"></span>
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                With{' '}
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                                    {expText} years
                                </span>{' '}
                                of experience building responsive and scalable web applications.
                                Passionate about creating clean, performant, and user-friendly interfaces.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="animate-slide-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link
                                    to="/contact"
                                    className="group relative px-8 py-4 rounded-xl font-semibold text-gray-950 overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-300"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-[length:200%_100%] animate-gradient-shift-fast"></span>
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get In Touch
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                                <Link
                                    to="/projects"
                                    className="group px-8 py-4 rounded-xl font-semibold text-gray-200 border border-gray-700 hover:border-cyan-400/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View My Work
                                        <span className="group-hover:rotate-12 transition-transform duration-300">✦</span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                                <a
                                    href="https://github.com/Boobalanselvaraj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-4 rounded-xl bg-white/5 border border-gray-800 backdrop-blur-sm hover:bg-white/10 hover:border-fuchsia-400/40 transition-all hover:scale-110 hover:-translate-y-1 hover:rotate-6"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-fuchsia-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:smartboobalan77@gmail.com"
                                    className="group p-4 rounded-xl bg-white/5 border border-gray-800 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/40 transition-all hover:scale-110 hover:-translate-y-1 hover:-rotate-6"
                                    aria-label="Email"
                                >
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                                <a
                                    href="tel:6380601667"
                                    className="group p-4 rounded-xl bg-white/5 border border-gray-800 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400/40 transition-all hover:scale-110 hover:-translate-y-1 hover:rotate-6"
                                    aria-label="Phone"
                                >
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-amber-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image — 3D tilt card */}
                    <div className="flex-1 flex justify-center lg:justify-end lg:pr-12 animate-scale-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                        <div
                            ref={cardRef}
                            onMouseMove={handleCardMouseMove}
                            onMouseEnter={() => setIsHoveringCard(true)}
                            onMouseLeave={resetCardTilt}
                            className="relative"
                            style={{ perspective: '1000px' }}
                        >
                            <div
                                className="relative group transition-transform duration-150 ease-out"
                                style={{
                                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHoveringCard ? 1.04 : 1})`,
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                {/* Orbiting ring */}
                                <div className="absolute -inset-6 rounded-full border border-dashed border-fuchsia-400/30 animate-spin-slow"></div>
                                <div className="absolute -inset-10 rounded-full border border-dashed border-cyan-400/20 animate-spin-slower"></div>

                                {/* Glow */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-600 via-cyan-500 to-amber-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                                {/* Image */}
                                <div
                                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-900"
                                    style={{ transform: 'translateZ(40px)' }}
                                >
                                    <img
                                        src={profileImage}
                                        alt="Boobalan Selvaraj - Software Developer"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating tech badges, popping with depth */}
                                <div
                                    className="absolute -top-4 -right-4 p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-lg animate-float-slow hover:scale-125 transition-transform duration-300 cursor-default"
                                    style={{ transform: 'translateZ(60px)' }}
                                >
                                    <span className="text-2xl">⚛️</span>
                                </div>
                                <div
                                    className="absolute -bottom-4 -left-4 p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-lg animate-float-slow hover:scale-125 transition-transform duration-300 cursor-default"
                                    style={{ animationDelay: '1s', transform: 'translateZ(60px)' }}
                                >
                                    <span className="text-2xl">💻</span>
                                </div>
                                <div
                                    className="absolute top-1/4 -left-10 p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-lg animate-float-slow hover:scale-125 transition-transform duration-300 cursor-default"
                                    style={{ animationDelay: '2s', transform: 'translateZ(60px)' }}
                                >
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <div
                                    className="absolute bottom-1/4 -right-8 p-3 bg-gray-900 border border-gray-700 rounded-xl shadow-lg animate-float-slow hover:scale-125 transition-transform duration-300 cursor-default"
                                    style={{ animationDelay: '3s', transform: 'translateZ(60px)' }}
                                >
                                    <span className="text-2xl">✨</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                    <Link to="/about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 group">
                        <span className="text-sm text-gray-400 font-medium group-hover:text-cyan-300 transition-colors">Scroll Down</span>
                        <div className="p-2 rounded-full border border-gray-700 bg-white/5 backdrop-blur-sm animate-bounce-gentle group-hover:border-cyan-400/50 transition-all">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    10% { opacity: 0.4; }
                    50% {
                        transform: translateY(-120px) translateX(60px) scale(1.5);
                        opacity: 0.6;
                    }
                    90% { opacity: 0.4; }
                }

                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.3); }
                }

                @keyframes draw-underline {
                    from { stroke-dasharray: 300; stroke-dashoffset: 300; }
                    to { stroke-dasharray: 300; stroke-dashoffset: 0; }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateZ(60px) translateY(0px) rotate(0deg); }
                    50% { transform: translateZ(60px) translateY(-16px) rotate(6deg); }
                }

                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes spin-slower {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }

                @keyframes bounce-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(6px); }
                }

                .animate-blink { animation: blink 1s step-end infinite; }
                .animate-particle { animation: particle linear infinite; }
                .animate-gradient-shift { animation: gradient-shift 4s ease infinite; }
                .animate-gradient-shift-fast { animation: gradient-shift 3s ease infinite; }
                .animate-pulse-dot { animation: pulse-dot 1.6s ease-in-out infinite; }
                .animate-draw-underline { animation: draw-underline 1.2s ease-out 1.1s forwards; }
                .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
                .animate-scale-in { animation: scale-in 0.8s ease-out; }
                .animate-spin-slow { animation: spin-slow 18s linear infinite; }
                .animate-spin-slower { animation: spin-slower 26s linear infinite; }
                .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }

                .bg-dot-pattern {
                    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
                    background-size: 28px 28px;
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-blink, .animate-particle, .animate-gradient-shift, .animate-gradient-shift-fast,
                    .animate-pulse-dot, .animate-float-slow, .animate-spin-slow, .animate-spin-slower,
                    .animate-bounce-gentle, .animate-float {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
