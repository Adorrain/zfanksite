import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} ZfankSite. 用热爱诠释生活</p>
          <a 
            href="http://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            陕ICP备2025078223号
          </a>
        </div>
      </footer>
    </div>
  );
}
