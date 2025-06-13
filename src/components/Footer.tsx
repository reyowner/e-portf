import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-8 bg-gray-100 dark:bg-gray-900 text-center text-gray-600 dark:text-gray-400 mt-16">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Renato Reoner Jr. All rights reserved.</p>
        <p className="mt-2">
          Built with Next.js, React, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 