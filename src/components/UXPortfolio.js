import React from 'react';
import vetConnectImage from '../assets/vetconnect.jpg';
import turfTrekImage from '../assets/gcit-turftrek.png';
import casImage from '../assets/cas.png';
import expensemateImage from '../assets/expensemate.jpg';
import healthtrackImage from '../assets/vet.png';
import communityconnectImage from '../assets/fit.png';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaUniversity, 
  FaAward, 
  FaCalendar, 
  FaSearch, 
  FaLightbulb, 
  FaFigma, 
  FaUsers, 
  FaRocket, 
  FaCheckCircle, 
  FaPalette,
  FaFileAlt,
  FaMobileAlt,
  FaLaptop,
  FaHandsHelping
} from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';

const Projects = () => {
  const uxProjects = [
    {
      id: 'project1',
      title: "ExpenseMate",
      subtitle: "Sustainable Expense Tracker",
      type: "Mobile Application",
      icon: <FaMobileAlt className="text-blue-500" />,
      description: "A mobile app designed to help users track expenses while promoting sustainable living habits through carbon footprint analysis.",
      brief: "Track your daily expenditures and understand their environmental impact. Set budgets, categorize expenses, and receive insights on how to reduce your carbon footprint through smarter spending.",
      image: expensemateImage,
      features: [
        "Expense tracking with categories",
        "Budget management",
        "Carbon footprint calculator",
        "Sustainability tips"
      ],
      links: {
        wireframe: "https://www.figma.com/file/your-wireframe",
        prototype: "https://www.figma.com/proto/LIsLK7pEhCWcv1SqsZNYhz/ExpenseMate",
        caseStudy: "https://drive.google.com/your-case-study"
      },
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 'project2',
      title: "FitBoost",
      subtitle: "Personal Fitness Companion",
      type: "Mobile Application",
      icon: <FaHandsHelping className="text-green-500" />,
      description: "A fitness app that helps users track weight, calculate BMI, and access workout tutorials for a healthier lifestyle.",
      brief: "Monitor your fitness journey with weight tracking, BMI calculations, and personalized workout tutorials. Stay motivated with progress tracking and community features.",
      image: communityconnectImage,
      features: [
        "Weight tracking",
        "BMI calculator",
        "Workout tutorials",
        "Progress analytics",
        "Fitness challenges"
      ],
      links: {
        wireframe: "https://www.figma.com/file/your-wireframe2",
        prototype: "https://www.figma.com/proto/Nw1osLy9rLpOMmlZaLXfC6/Untitled",
        caseStudy: "https://drive.google.com/your-case-study2"
      },
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 'project3',
      title: "VetConnect",
      subtitle: "Veterinary Appointment System",
      type: "Web Application",
      icon: <FaLaptop className="text-purple-500" />,
      description: "A web platform for pet owners to schedule veterinary appointments and manage pet healthcare.",
      brief: "Book veterinary appointments seamlessly with real-time scheduling. Manage pet medical records, receive reminders, and connect with trusted veterinary professionals.",
      image: vetConnectImage,
      features: [
        "Online appointment booking",
        "Real-time scheduling",
        "Pet medical records",
        "Vet directory",
        "Reminder system"
      ],
      links: {
        wireframe: "https://www.figma.com/file/your-wireframe3",
        prototype: "https://www.figma.com/proto/2PQ5NRuEO4FtwzSaFgbMsN/PRJ303-VetConnect?node-id=1540-3675&t=MEOwPi6x4AtQajzt-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1540%3A3675&show-proto-sidebar=1",
        caseStudy: "https://drive.google.com/your-case-study3"
      },
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">UX Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            User-centered design projects following complete UX research and design process
          </p>
        </div>

        {/* Projects Grid - 3 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uxProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image with overlay */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
                
                {/* Three Buttons Overlay - Center of image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-4 py-3 rounded-xl border border-white/30 hover:scale-105 transition-all duration-200 group/case"
                    >
                      <FaFileAlt className="text-gray-700 text-xl" />
                      <span className="text-xs font-semibold">Case Study</span>
                    </a>
                    
                    <a
                      href={project.links.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-blue-700 px-4 py-3 rounded-xl border border-white/30 hover:scale-105 transition-all duration-200 group/prototype"
                    >
                      <FaFigma className="text-blue-600 text-xl" />
                      <span className="text-xs font-semibold">View Design</span>
                    </a>
                    
                    <a
                      href={project.links.wireframe}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-purple-700 px-4 py-3 rounded-xl border border-white/30 hover:scale-105 transition-all duration-200 group/wireframe"
                    >
                      <FaExternalLinkAlt className="text-purple-600 text-xl" />
                      <span className="text-xs font-semibold">Wireframe</span>
                    </a>
                  </div>
                </div>
                
                {/* Project type badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    {project.icon}
                    {project.type}
                  </span>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-0">
                  <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;