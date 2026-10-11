import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Sun,
  Moon,
  Search,
  Menu,
  X,
  MapPin,
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openCommandPalette?: () => void;
}

const Header = ({ darkMode, toggleDarkMode, openCommandPalette }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-gray-950/85 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-cyan-950/20 border-b border-slate-200/80 dark:border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo & Current Office Status Pill */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-indigo-500 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white dark:bg-gray-950 rounded-[10px] flex items-center justify-center font-black text-cyan-600 dark:text-cyan-400 text-sm">
                  BS
                </div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white leading-tight">
                  Boobalan Selvaraj
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-gray-400 flex items-center gap-1">
                  Full Stack Developer • <span className="text-cyan-600 dark:text-cyan-400 font-semibold">S10 Health</span>
                </span>
              </div>
            </Link>

            {/* Chennai Badge */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
              <MapPin className="w-3 h-3" />
              <span>Chennai</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-3 py-1.5 backdrop-blur-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 shadow-sm border border-slate-200 dark:border-cyan-400/40 font-bold'
                      : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Controls: Search button & Theme toggle */}
          <div className="flex items-center space-x-2.5">
            {/* Quick Search Button (Command+K label removed!) */}
            {openCommandPalette && (
              <button
                type="button"
                onClick={openCommandPalette}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-slate-100/90 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 transition-colors shadow-sm"
                title="Search portfolio"
              >
                <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="hidden sm:inline">Search</span>
              </button>
            )}

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-yellow-400 transition-all shadow-sm"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle visual theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Mobile Drawer Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200"
              aria-label="Toggle navigation drawer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl space-y-2 animate-scale-in">
            {openCommandPalette && (
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCommandPalette();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-gray-300 mb-2"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-cyan-500" />
                  <span>Search pages & skills</span>
                </span>
              </button>
            )}

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl text-xs font-semibold text-center transition-colors ${
                      isActive
                        ? 'bg-cyan-500 text-white font-bold'
                        : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;