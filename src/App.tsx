import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ToastProvider } from './context/ToastContext';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-gray-100 transition-colors duration-300 flex flex-col relative selection:bg-cyan-500 selection:text-white">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          openCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        <main className="flex-grow pt-20">
          <Outlet />
        </main>

        <Footer />

        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </ToastProvider>
  );
}

export default App;
