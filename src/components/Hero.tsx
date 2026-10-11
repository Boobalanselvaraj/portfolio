import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  ArrowRight,
  Briefcase,
  Copy,
  Mail,
  Phone,
  Check,
  Code2,
  Sparkles,
} from 'lucide-react';
import profileImage from '../assets/Boobalan.jpg';
import { calculateExperience } from '../utils/experience';
import { useToast } from '../context/ToastContext';
import { GithubIcon } from './GithubIcon';
import { InteractiveTerminal } from './InteractiveTerminal';

const ROLES = [
  'Full Stack Developer @ S10 Health',
  'React & TypeScript Specialist',
  'Node.js & Backend API Architect',
  'Real-Time Systems Engineer',
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const expText = calculateExperience();
  const { showToast } = useToast();

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
          }, 35);
        }, 2000);
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
      clearTimeout(pauseTimeout);
    };
  }, [roleIndex]);

  // Cursor-reactive background glow
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursor({ x, y });
  };

  // 3D tilt on profile card
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 22;
    const rotateX = (0.5 - py) * 22;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetCardTilt = () => {
    setTilt({ x: 0, y: 0 });
    setIsHoveringCard(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('smartboobalan77@gmail.com');
    setCopiedEmail(true);
    showToast('Email smartboobalan77@gmail.com copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Cursor-reactive radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${cursor.x}% ${cursor.y}%, rgba(6, 182, 212, 0.12), rgba(99, 102, 241, 0.06) 40%, transparent 70%)`,
        }}
      />

      {/* Cyber Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ambient gradient meshes */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">

          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">

            {/* Professional Current Role Status Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/90 dark:bg-gray-900/90 border border-slate-200 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 shadow-md shadow-slate-900/5 dark:shadow-cyan-950/20 backdrop-blur-xl">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-slate-900 dark:text-white font-bold tracking-wide">
                  Full Stack Developer
                </span>
                <span className="text-slate-400 dark:text-gray-400">•</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                  S10 Health
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-slate-500 dark:text-gray-400 text-xs pl-1 border-l border-slate-200 dark:border-white/10">
                  <MapPin className="w-3 h-3 text-cyan-500" /> Chennai
                </span>
              </div>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block group cursor-default">
                  <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent group-hover:brightness-110 transition-all">
                    Boobalan Selvaraj
                  </span>
                  <span className="block h-1.5 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 rounded-full mt-1 opacity-80" />
                </span>
              </h1>
            </div>

            {/* Typewriter Role Title */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
              <h2 className="text-xl sm:text-3xl font-semibold text-slate-800 dark:text-gray-200 flex items-center">
                <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="inline-block w-0.5 h-7 sm:h-8 bg-cyan-500 ml-1.5 animate-pulse" />
              </h2>
            </div>

            {/* Summary Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Full Stack Developer with{' '}
              <span className="font-bold text-cyan-700 dark:text-cyan-300 px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/30">
                {expText} years
              </span>{' '}
              of experience engineering high-performance web applications and backend services. Currently building enterprise healthcare solutions at{' '}
              <span className="font-bold text-slate-900 dark:text-white">S10 Health (Chennai)</span>, with 2.5 years of proven delivery developing real-time IoT tracking platforms at{' '}
              <span className="font-semibold text-slate-700 dark:text-gray-300">Realtech GPS</span>.
            </p>

            {/* Interactive CTA Action Buttons */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-gray-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 hover:from-cyan-300 hover:to-emerald-200 shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Briefcase className="w-5 h-5 text-gray-950" />
                <span>Work Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/15 hover:border-cyan-500/50 hover:bg-slate-100 dark:hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md shadow-sm"
              >
                <span>Projects</span>
                <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
              </Link>

              <button
                type="button"
                onClick={() => setShowTerminal(!showTerminal)}
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${showTerminal
                    ? 'bg-cyan-50 dark:bg-cyan-500/20 border-cyan-400 text-cyan-700 dark:text-cyan-300 shadow-lg shadow-cyan-500/10'
                    : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/10 shadow-sm'
                  }`}
                title="Toggle Interactive Terminal Console"
              >
                <Code2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>{showTerminal ? 'Hide Terminal' : 'Open Terminal'}</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 dark:text-gray-300 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-emerald-600 dark:text-emerald-300 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 dark:text-gray-400" />
                    <span className="text-xs font-medium">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-3.5 justify-center lg:justify-start pt-3 text-slate-500 dark:text-gray-400">
              <a
                href="https://github.com/Boobalanselvaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-110 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href="mailto:smartboobalan77@gmail.com"
                className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-110 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="tel:6380601667"
                className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-300 hover:scale-110 transition-all shadow-sm"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>

              <div className="h-6 w-px bg-slate-300 dark:bg-gray-800 mx-2" />

              <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span>Chennai, Tamil Nadu</span>
              </span>
            </div>
          </div>

          {/* Right: 3D Tilt Profile Card & Interactive Terminal Toggle */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg flex flex-col items-center">
            {showTerminal ? (
              <div className="w-full animate-scale-in">
                <InteractiveTerminal />
              </div>
            ) : (
              <div
                ref={cardRef}
                onMouseMove={handleCardMouseMove}
                onMouseEnter={() => setIsHoveringCard(true)}
                onMouseLeave={resetCardTilt}
                className="relative select-none"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative group transition-transform duration-150 ease-out"
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHoveringCard ? 1.03 : 1})`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Orbiting dashed glowing rings */}
                  <div className="absolute -inset-8 rounded-full border border-dashed border-cyan-500/30 dark:border-cyan-500/25 animate-spin-slow pointer-events-none" />
                  <div className="absolute -inset-14 rounded-full border border-dashed border-indigo-500/25 dark:border-indigo-500/20 animate-spin-slower pointer-events-none" />

                  {/* Backlight Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-600 via-teal-600 to-indigo-600 rounded-full blur-2xl opacity-30 dark:opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Profile Photo Container */}
                  <div
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/80 dark:border-white/15 bg-white dark:bg-gray-900"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <img
                      src={profileImage}
                      alt="Boobalan Selvaraj - Full Stack Developer at S10 Health"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 dark:from-gray-950/70 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                  </div>

                  {/* Floating Orbit Tech Badge 1: S10 Health Full Stack */}
                  <div
                    className="absolute -top-3 -right-2 px-3.5 py-2 bg-white/95 dark:bg-gray-900/95 border border-slate-200 dark:border-cyan-400/50 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 transition-transform"
                    style={{ transform: 'translateZ(65px)' }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></span>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">S10 Health</div>
                      <div className="text-xs font-bold text-cyan-600 dark:text-cyan-300">Full Stack Dev</div>
                    </div>
                  </div>

                  {/* Floating Orbit Tech Badge 2: React & Node */}
                  <div
                    className="absolute -bottom-2 -left-2 px-3.5 py-2 bg-white/95 dark:bg-gray-900/95 border border-slate-200 dark:border-teal-400/40 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 transition-transform"
                    style={{ transform: 'translateZ(65px)' }}
                  >
                    <span className="text-xl">⚛️</span>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">Frontend & Backend</div>
                      <div className="text-xs font-bold text-teal-600 dark:text-teal-300">React • Node.js</div>
                    </div>
                  </div>

                  {/* Floating Orbit Tech Badge 3: Real-Time / MQTT */}
                  <div
                    className="absolute top-1/2 -left-12 px-3.5 py-1.5 bg-white/95 dark:bg-gray-900/95 border border-slate-200 dark:border-indigo-400/40 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2"
                    style={{ transform: 'translateZ(65px)' }}
                  >
                    <span className="text-lg">📡</span>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">Real-Time</div>
                      <div className="text-xs font-bold text-indigo-600 dark:text-indigo-300">MQTT & Maps</div>
                    </div>
                  </div>

                  {/* Floating Orbit Tech Badge 4: Experience */}
                  <div
                    className="absolute bottom-1/4 -right-10 px-3.5 py-1.5 bg-white/95 dark:bg-gray-900/95 border border-slate-200 dark:border-cyan-400/40 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2"
                    style={{ transform: 'translateZ(65px)' }}
                  >
                    <span className="text-lg">⚡</span>
                    <div className="text-left">
                      <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">Experience</div>
                      <div className="text-xs font-bold text-cyan-600 dark:text-cyan-300">{expText} Yrs</div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Quick Interactive Terminal launcher below photo */}
            {!showTerminal && (
              <button
                onClick={() => setShowTerminal(true)}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-900/90 border border-slate-200 dark:border-cyan-500/30 text-xs font-mono text-cyan-700 dark:text-cyan-300 hover:bg-slate-100 dark:hover:bg-cyan-500/10 hover:border-cyan-500 transition-all shadow-md group"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Launch Interactive Terminal Console ❯</span>
              </button>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 22s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 32s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
