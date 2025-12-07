import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-blue-400">TSHERING</span> ZANGMO
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>
          
          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-gray-300 mb-4">Connect with me</h4>
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/tshering-zangmo101/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/tsheringzangmo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          
          {/* Quick Contact */}
          <div className="text-center md:text-right">
            <a 
              href="mailto:tsheringdevelopergmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              tsheringdeveloper@gmail.com
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Available for opportunities
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Tshering Zangmo. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2 flex items-center justify-center gap-1">
            Built with <FaHeart className="text-red-500" /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;