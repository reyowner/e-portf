import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <TypeAnimation
          sequence={[
            'Full Stack Software Developer',
            1000,
            'React.js & Next.js Specialist',
            1000,
            'Open to Full-time Opportunities',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
        Passionate about creating user-centered solutions with modern web technologies
      </p>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12">
        Recent BS IT Graduate | 3 months professional experience at Oaktree Innovations
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
          View My Work
        </a>
        <a href="/resume.pdf" download className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
          Download Resume
        </a>
        <a href="#contact" className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full text-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero; 