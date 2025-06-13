import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  React.useEffect(() => {
    if (!sidebarOpen) return;
    const handleClick = (e: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar');
      if (sidebar && !sidebar.contains(e.target as Node)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [sidebarOpen]);

  return (
    <nav className="w-full p-4 bg-white dark:bg-gray-800 shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Ren
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7 text-gray-900 dark:text-white" />
        </button>
      </div>
      {/* Sidebar and blur overlay */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20 transition-all" />
          <aside
            id="mobile-sidebar"
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col p-6 animate-slide-in"
          >
            <button
              className="self-end mb-8 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
            <nav className="flex flex-col space-y-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
          <style jsx global>{`
            @keyframes slide-in {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </>
      )}
    </nav>
  );
};

export default Navbar; 