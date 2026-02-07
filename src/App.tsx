import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
