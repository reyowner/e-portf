import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-white dark:bg-gray-800 shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Ren
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            About Me
          </Link>
          <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
        {/* Mobile menu button and dropdown will go here */}
      </div>
    </nav>
  );
};

export default Navbar; 