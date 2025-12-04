import React from 'react';
import cvPDF from '../assets/cv.pdf';
import profileImage from '../assets/profilePic.png';

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
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-600/20 rounded-full border border-blue-500/30">
              <span className="text-blue-300 text-sm">Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tshering Zangmo</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              I create digital experiences that combine <span className="text-blue-300">beautiful design</span> with 
              <span className="text-purple-300"> powerful functionality</span>. Specializing in full-stack development 
              and user-centered design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Download CV
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                <img 
                  src={profileImage} 
                  alt="Tshering Zangmo" 
                  className="w-full h-full rounded-full object-cover border-4 border-gray-900"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg shadow-xl">
                <span className="font-bold text-sm">UI/UX + Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;