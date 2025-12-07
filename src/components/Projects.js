import React from 'react';
import vetConnectImage from '../assets/vetconnect.jpg';
import expensemateImage from '../assets/expensemate.jpg';
import communityconnectImage from '../assets/fit.png';
import { 
  FaFigma, 
  FaFileAlt,
  FaMobileAlt,
  FaHandsHelping,
  FaGlobe,
  FaSearch,
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaUsers,
  FaCheckCircle  // Add this import
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  const uxProjects = [
    {
      id: 'project1',
      title: "ExpenseMate",
      subtitle: "Sustainable Expense Tracker",
      type: "Mobile Application Design",
      icon: <FaMobileAlt className="text-blue-500" />,
      description: "Mobile app for tracking expenses with carbon footprint analysis and sustainability insights.",
      image: expensemateImage,
      requirements: [
        { icon: <FaLightbulb />, text: "Problem Statement", color: "bg-red-50 text-red-700" },
        { icon: <FaSearch />, text: "User Research", color: "bg-purple-50 text-purple-700" },
        { icon: <FaPaintBrush />, text: "Wireframes", color: "bg-yellow-50 text-yellow-700" },
        { icon: <FaPaintBrush />, text: "High-Fidelity Designs", color: "bg-green-50 text-green-700" },
        { icon: <FaCode />, text: "Prototypes", color: "bg-blue-50 text-blue-700" },
        { icon: <FaUsers />, text: "Iterations & Testing", color: "bg-indigo-50 text-indigo-700" }
      ],
      features: [
        "Expense tracking with categories",
        "Budget management",
        "Carbon footprint calculator",
        "Sustainability tips"
      ],
      links: {
        caseStudy: "/case-study/expensemate",
        prototype: "https://www.figma.com/proto/LIsLK7pEhCWcv1SqsZNYhz/ExpenseMate",
        wireframe: "https://www.figma.com/design/owX7a41VnoF3MGxdBUtv4W/Untitled?node-id=0-1&t=q7fVZkLC4qE0KVEZ-1"
      },
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 'project2',
      title: "FitBoost",
      subtitle: "Personal Fitness Companion",
      type: "Social Good Project",
      icon: <FaHandsHelping className="text-green-500" />,
      description: "Fitness app promoting mental and physical wellness through guided workouts and community support.",
      image: communityconnectImage,
      requirements: [
        { icon: <FaLightbulb />, text: "Problem Statement", color: "bg-red-50 text-red-700" },
        { icon: <FaSearch />, text: "User Research", color: "bg-purple-50 text-purple-700" },
        { icon: <FaPaintBrush />, text: "Wireframes", color: "bg-yellow-50 text-yellow-700" },
        { icon: <FaPaintBrush />, text: "High-Fidelity Designs", color: "bg-green-50 text-green-700" },
        { icon: <FaCode />, text: "Prototypes", color: "bg-blue-50 text-blue-700" },
        { icon: <FaUsers />, text: "Iterations & Testing", color: "bg-indigo-50 text-indigo-700" }
      ],
      features: [
        "Weight tracking",
        "BMI calculator",
        "Workout tutorials",
        "Progress analytics",
        "Fitness challenges"
      ],
      links: {
        caseStudy: "/case-study/fitboost",
        prototype: "https://www.figma.com/proto/Nw1osLy9rLpOMmlZaLXfC6/Untitled",
        wireframe: "https://www.figma.com/design/tyQabumFUfc8TJQQeR4bIG/Untitled?node-id=0-1&p=f&t=TJbjjW4yFCsmlJ1r-0"
      },
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 'project3',
      title: "VetConnect",
      subtitle: "Veterinary Appointment System",
      type: "Website Design",
      icon: <FaGlobe className="text-purple-500" />,
      description: "Responsive web platform for pet owners to schedule veterinary appointments and manage healthcare.",
      image: vetConnectImage,
      requirements: [
        { icon: <FaLightbulb />, text: "Problem Statement", color: "bg-red-50 text-red-700" },
        { icon: <FaSearch />, text: "User Research", color: "bg-purple-50 text-purple-700" },
        { icon: <FaPaintBrush />, text: "Wireframes", color: "bg-yellow-50 text-yellow-700" },
        { icon: <FaPaintBrush />, text: "High-Fidelity Designs", color: "bg-green-50 text-green-700" },
        { icon: <FaCode />, text: "Prototypes", color: "bg-blue-50 text-blue-700" },
        { icon: <FaUsers />, text: "Iterations & Testing", color: "bg-indigo-50 text-indigo-700" }
      ],
      features: [
        "Online appointment booking",
        "Real-time scheduling",
        "Pet medical records",
        "Vet directory",
        "Reminder system"
      ],
      links: {
        caseStudy: "/case-study/vetconnect",
        prototype: "https://www.figma.com/proto/2PQ5NRuEO4FtwzSaFgbMsN/PRJ303-VetConnect?node-id=1540-3675&t=avpu6QBPPCUc2IIY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1540%3A3675&show-proto-sidebar=1",
        wireframe: "https://www.figma.com/design/3NcRHsXy5IWEceepg7iIHL/Untitled?t=8i4XFo4zWASGEUUf-0e"
      },
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
            <FaFileAlt />
            <span className="font-medium">UX Portfolio Assessment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">UX Projects</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive UX case studies demonstrating complete design thinking process—structured documentation covering problem statements, user research, wireframes, high-fidelity designs, prototypes, iterations, and reflections.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {uxProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`relative h-2 bg-gradient-to-r ${project.color}`} />
              
              {/* Project Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                    {project.icon}
                    <span>{project.type}</span>
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Requirements Checklist */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                    Included Documentation
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.requirements.map((req, index) => (
                      <div key={index} className={`flex items-center gap-2 ${req.color} px-3 py-2 rounded-lg`}>
                        <span className="text-sm">{req.icon}</span>
                        <span className="text-xs font-medium">{req.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to={project.links.caseStudy}
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white text-sm font-semibold py-3 rounded-lg transition-all duration-200"
                    >
                      <FaFileAlt />
                      View Case Study
                    </Link>
                    <a
                      href={project.links.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-lg transition-all duration-200"
                    >
                      <FaFigma />
                      Interactive Prototype
                    </a>
                  </div>
                  <a
                    href={project.links.wireframe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    <FaPaintBrush />
                    View Wireframes
                  </a>
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