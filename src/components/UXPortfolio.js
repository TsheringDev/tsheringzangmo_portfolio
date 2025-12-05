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
        "Sustainability tips",
        "Spending analytics"
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
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaUniversity />
            <span>UX Design Portfolio - GCIT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">UX Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            User-centered design projects following complete UX research and design process
          </p>
        </div>

        {/* Projects Grid - 3 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {uxProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    {project.icon}
                    {project.type}
                  </span>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
              </div>

              {/* Project Content */}
              <div className="p-5">
                {/* Title and Description */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {project.description}
                  </p>
                </div>

                {/* Brief Summary */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 line-clamp-3">
                    {project.brief}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={project.links.wireframe}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-gray-100 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <FaFileAlt className="text-gray-500" />
                      Wireframe
                    </a>
                    <a
                      href={project.links.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium py-2 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <FaFigma className="text-blue-600" />
                      Prototype
                    </a>
                    <a
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-purple-50 text-purple-700 text-xs font-medium py-2 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                      <FaFileAlt className="text-purple-600" />
                      Case Study
                    </a>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-medium py-2.5 rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 group">
                    <span>View Project Details</span>
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Academic Context
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <FaUniversity className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Institution</p>
                    <p className="font-medium">Gyalpozhing College of Information Technology</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <FaAward className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Certificate</p>
                    <p className="font-medium">Professional Certificate II in UX Design</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <FaCalendar className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Submission Deadline</p>
                    <p className="font-medium">28 November 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Assessment Criteria
              </h3>
              <ul className="space-y-2">
                {[
                  "Quality and clarity of case studies",
                  "Cohesiveness of visual presentation",
                  "Content relevance and accuracy",
                  "Ease of navigation and organization",
                  "Layout, aesthetics, and professionalism"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in collaborating or seeing more projects?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Get in Touch</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;