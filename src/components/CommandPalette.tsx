import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Home,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  X,
  ExternalLink,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  toggleDarkMode,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : handleOpen();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleOpen = () => {
    setQuery('');
    setSelectedIndex(0);
  };

  const commands = [
    {
      id: 'nav-home',
      title: 'Home',
      description: 'Go to Hero and Overview',
      category: 'Navigation',
      icon: Home,
      action: () => {
        navigate('/');
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'About Me',
      description: 'Professional Bio & Career Journey',
      category: 'Navigation',
      icon: User,
      action: () => {
        navigate('/about');
        onClose();
      },
    },
    {
      id: 'nav-exp',
      title: 'Experience (S10 Health & Realtech GPS)',
      description: 'Full Stack Developer role & past engineering roles',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        navigate('/experience');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Projects',
      description: 'iChlorine, iTank IoT, and web applications',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        navigate('/projects');
        onClose();
      },
    },
    {
      id: 'nav-skills',
      title: 'Skills & Tech Stack',
      description: 'React, TypeScript, Node.js, Express, MySQL',
      category: 'Navigation',
      icon: Cpu,
      action: () => {
        navigate('/skills');
        onClose();
      },
    },
    {
      id: 'nav-education',
      title: 'Education',
      description: 'Academic background & certifications',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => {
        navigate('/education');
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Contact Me',
      description: 'Email, phone & Chennai location',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        navigate('/contact');
        onClose();
      },
    },
    {
      id: 'action-theme',
      title: 'Toggle Dark / Light Theme',
      description: 'Switch between light and dark visual mode',
      category: 'Settings',
      icon: Briefcase,
      action: () => {
        toggleDarkMode();
        onClose();
      },
    },
    {
      id: 'ext-github',
      title: 'Open GitHub Profile',
      description: 'github.com/Boobalanselvaraj',
      category: 'External',
      icon: ExternalLink,
      action: () => {
        window.open('https://github.com/Boobalanselvaraj', '_blank');
        onClose();
      },
    },
  ];

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 bg-slate-950/60 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar (NO Command+K text here!) */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-gray-950/50">
          <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search pages, projects, skills..."
            className="w-full bg-transparent text-sm sm:text-base outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded text-xs text-slate-400 dark:text-gray-400 hover:text-slate-700 dark:hover:text-white bg-slate-200/60 dark:bg-white/5 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500 dark:text-gray-400">
              No matching results found for "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-900 dark:text-cyan-200 border border-cyan-200 dark:border-cyan-500/30'
                      : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="text-xs text-slate-500 dark:text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-gray-500">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};