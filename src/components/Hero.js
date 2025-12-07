import React from 'react';
import cvPDF from '../assets/cv.pdf';
import profileImage from '../assets/profilePic.png';
import heroBanner from '../assets/hero-banner.jpg'; // Make sure this path is correct

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPDF;
    link.download = 'Tshering-Zangmo-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen text-white pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-blue-200 text-sm">Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Tshering Zangmo</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              I create digital experiences that combine <span className="text-blue-300 font-medium">beautiful design</span> with 
              <span className="text-purple-300 font-medium"> powerful functionality</span>. Specializing in full-stack development 
              and user-centered design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                View My Work
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                Download CV
              </button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full p-1 backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Tshering Zangmo" 
                  className="w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg shadow-xl backdrop-blur-sm">
                <span className="font-bold text-sm">UI/UX + Development</span>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30"></div>
              <div className="absolute -bottom-6 left-8 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-400/30"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;