import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = scrolled 
    ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-md' 
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg transform group-hover:rotate-12 transition-transform">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-heading font-bold text-dark-900 dark:text-white tracking-tighter">
            VOLT <span className="text-primary">FIT HUB</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-100 dark:bg-dark-800 text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-100 dark:bg-dark-800 text-neutral-600 dark:text-neutral-300"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark-900 dark:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-[72px] right-0 w-64 h-[calc(100vh-72px)] bg-white dark:bg-dark-800 shadow-xl p-8 flex flex-col gap-6 md:hidden border-l border-neutral-200 dark:border-dark-700"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold uppercase text-dark-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-auto">
               <p className="text-xs text-neutral-500 dark:text-neutral-400">© 2024 Volt Fit Hub</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;