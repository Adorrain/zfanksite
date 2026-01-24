import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, BookOpen, Menu, X, Grid, FolderGit2 } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { path: '/', label: '首页', icon: Terminal },
  { path: '/projects', label: '项目', icon: FolderGit2 },
  { path: '/categories', label: '分类', icon: Grid },
  { path: '/blog', label: '博客', icon: BookOpen },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 py-3 shadow-3d" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
              <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[10px] flex items-center justify-center">
                <img src="/logo.svg" alt="ZfankSite Logo" className="w-6 h-6 object-contain" />
              </div>
            </div>
            <span className="hidden sm:block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 group-hover:opacity-80 transition-opacity">
              ZfankSite
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center bg-white/60 dark:bg-zinc-800/60 p-1.5 rounded-full border border-zinc-200 dark:border-white/10 backdrop-blur-sm shadow-3d hover:shadow-2xl transition-shadow duration-300">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                  isActive 
                    ? "text-zinc-900 dark:text-white" 
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-full shadow-3d border border-zinc-100 dark:border-zinc-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <item.icon size={16} />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex-1 flex justify-end">
          <div className="md:hidden">
            <button 
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden absolute w-full top-full left-0 shadow-3d"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "flex items-center gap-3 p-4 rounded-xl transition-all font-medium",
                    location.pathname === item.path
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  )}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
