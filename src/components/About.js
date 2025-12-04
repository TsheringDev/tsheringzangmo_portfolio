import React from 'react';
import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Combining technical expertise with creative vision to build exceptional digital products
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src={profilePic} 
                alt="Tshering Zangmo" 
                className="relative w-full max-w-md rounded-2xl shadow-2xl border-8 border-white transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* About Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              A Journey in Digital Creation
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                My journey in technology began with a curiosity about how things work behind the screen. 
                Over time, this evolved into a passion for creating digital experiences that are not only 
                functional but also intuitive and engaging.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                What sets me apart is my ability to bridge the gap between design and development. 
                I understand both the aesthetic principles that make interfaces beautiful and the 
                technical requirements that make them work seamlessly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="text-3xl text-blue-600 mb-3">🎨</div>
                  <h4 className="font-bold text-gray-800 mb-2">Design First</h4>
                  <p className="text-gray-600 text-sm">
                    Every project begins with understanding user needs and designing intuitive interfaces.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="text-3xl text-purple-600 mb-3">⚙️</div>
                  <h4 className="font-bold text-gray-800 mb-2">Code with Purpose</h4>
                  <p className="text-gray-600 text-sm">
                    Writing clean, efficient code that brings designs to life with optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;