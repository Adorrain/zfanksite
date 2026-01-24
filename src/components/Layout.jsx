import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <footer className="py-12 text-center text-zinc-500 text-sm border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <p className="mb-2 font-medium">© {new Date().getFullYear()} ZfankSite. Crafted with passion.</p>
          <a 
            href="http://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
          >
            陕ICP备2025078223号
          </a>
        </div>
      </footer>
    </div>
  );
}
