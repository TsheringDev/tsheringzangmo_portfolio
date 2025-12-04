import React from 'react';
import vetConnectImage from '../assets/vetconnect.jpg';
import turfTrekImage from '../assets/gcit-turftrek.png';
import casImage from '../assets/cas.png';
import expensemateImage from '../assets/expensemate.jpg'; // Add this import
import healthtrackImage from '../assets/expensemate.jpg'; // Add this import
import communityconnectImage from '../assets/expensemate.jpg'; // Add this import
import { FaExternalLinkAlt, FaGithub, FaUniversity, FaAward, FaCalendar, FaSearch, FaLightbulb, FaFigma, FaUsers, FaRocket, FaCheckCircle, FaPalette } from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';

const Projects = () => {
  const professionalProjects = [
    {
      id: 1,
      title: 'VetConnect',
      description: 'A veterinary service platform connecting pet owners with healthcare providers. Features real-time appointment scheduling and medical record management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: vetConnectImage,
      github: '#',
      live: '#',
      highlights: ['Real-time chat', 'Secure records', 'Appointment system'],
      type: 'Full Stack'
    },
    {
      id: 2,
      title: 'TurfTrek',
      description: 'Campus sports facility management system with booking capabilities, availability tracking, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'React Calendar'],
      image: turfTrekImage,
      github: '#',
      live: '#',
      highlights: ['Booking system', 'Payment integration', 'Admin panel'],
      type: 'Full Stack'
    },
    {
      id: 3,
      title: 'Facility Management System',
      description: 'A comprehensive platform for managing employee attendance, leave requests, and performance evaluations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'PDF Generation', 'JWT Auth'],
      image: casImage,
      github: '#',
      live: '#',
      highlights: ['Attendance tracking', 'Leave management', 'Overtime'],
      type: 'Full Stack'
    }
  ];

  // Three UX Projects
  const uxProjects = [
    {
      id: 'project1',
      title: "ExpenseMate - Mobile App for Sustainable Living",
      type: "Mobile Application Design",
      description: "A mobile application designed to help users track their environmental impact and adopt sustainable living habits through intuitive expense tracking and carbon footprint analysis.",
      problem: "Lack of accessible tools for individuals to track and improve their environmental impact",
      process: [
        { phase: "Research", icon: <FaSearch />, color: "bg-blue-100 text-blue-600" },
        { phase: "Ideation", icon: <FaLightbulb />, color: "bg-yellow-100 text-yellow-600" },
        { phase: "Prototyping", icon: <FaFigma />, color: "bg-purple-100 text-purple-600" },
        { phase: "Testing", icon: <FaUsers />, color: "bg-green-100 text-green-600" },
        { phase: "Iteration", icon: <FaRocket />, color: "bg-pink-100 text-pink-600" }
      ],
      image: expensemateImage, // Added image reference
      deliverables: {
        research: ["User Personas (3)", "Competitive Analysis", "User Journey Maps", "Survey Results (n=50)"],
        wireframes: ["Low-fidelity sketches", "Information Architecture", "User Flow Diagrams"],
        design: ["High-fidelity mockups (15 screens)", "Design System", "Interactive Prototype"],
        testing: ["Usability Testing Report", "A/B Testing Results", "User Feedback Analysis"]
      },
      links: {
        figma: "https://www.figma.com/proto/LIsLK7pEhCWcv1SqsZNYhz/ExpenseMate?node-id=927-55&p=f&t=8XTC0MYReyWjpda0-0&scaling=scale-down&content-scaling=fixed&page-id=223%3A1&starting-point-node-id=927%3A55",
        research: "https://drive.google.com/your-research-doc",
        caseStudy: "https://drive.google.com/your-case-study"
      },
      reflection: "This project taught me the importance of balancing user needs with business goals. The iterative design process revealed unexpected user behaviors that significantly improved the final solution."
    },
    {
      id: 'project2',
      title: "HealthTrack - Responsive Health Dashboard",
      type: "Responsive Webpage Design",
      description: "A comprehensive healthcare dashboard designed for seamless patient monitoring across all devices, featuring real-time data visualization and intuitive navigation.",
      problem: "Healthcare providers need a unified dashboard to monitor patient metrics across devices",
      process: [
        { phase: "User Interviews", icon: <FaUsers />, color: "bg-blue-100 text-blue-600" },
        { phase: "Wireframing", icon: <SiAdobexd />, color: "bg-orange-100 text-orange-600" },
        { phase: "Visual Design", icon: <FaPalette />, color: "bg-purple-100 text-purple-600" },
        { phase: "Responsive Testing", icon: <FaRocket />, color: "bg-green-100 text-green-600" },
        { phase: "Implementation", icon: <FaCheckCircle />, color: "bg-teal-100 text-teal-600" }
      ],
      image: healthtrackImage, // Added image reference
      deliverables: {
        research: ["Stakeholder Interviews", "User Needs Assessment", "Market Analysis"],
        wireframes: ["Desktop Wireframes", "Tablet Wireframes", "Mobile Wireframes"],
        design: ["Responsive Design System", "Component Library", "Style Guide"],
        testing: ["Cross-device Testing", "Performance Testing", "Accessibility Audit"]
      },
      links: {
        figma: "https://www.figma.com/proto/your-healthtrack-link",
        prototype: "https://your-prototype-link.netlify.app",
        documentation: "https://drive.google.com/your-documentation"
      },
      reflection: "Designing for multiple screen sizes challenged me to think about content hierarchy and interaction patterns differently across devices."
    },
    {
      id: 'project3',
      title: "CommunityConnect - UX for Social Good",
      type: "UX for Social Good Project",
      description: "A community-focused platform designed to reduce digital isolation among elderly members by providing accessible resources and fostering meaningful connections.",
      problem: "Elderly community members struggle with digital isolation and lack of accessible community resources",
      process: [
        { phase: "Empathy Research", icon: <FaUsers />, color: "bg-indigo-100 text-indigo-600" },
        { phase: "Problem Definition", icon: <FaSearch />, color: "bg-red-100 text-red-600" },
        { phase: "Solution Ideation", icon: <FaLightbulb />, color: "bg-yellow-100 text-yellow-600" },
        { phase: "Prototype Development", icon: <FaFigma />, color: "bg-purple-100 text-purple-600" },
        { phase: "Community Testing", icon: <FaCheckCircle />, color: "bg-green-100 text-green-600" }
      ],
      image: communityconnectImage, // Added image reference
      deliverables: {
        research: ["Community Interviews", "Accessibility Audit", "Stakeholder Workshops"],
        wireframes: ["Simplified Navigation Flow", "Accessibility-focused Layouts"],
        design: ["High-contrast Interfaces", "Voice Navigation Prototypes", "Large Text Options"],
        impact: ["User Satisfaction Survey", "Accessibility Improvement Metrics", "Community Feedback"]
      },
      links: {
        figma: "https://www.figma.com/proto/your-communityconnect-link",
        research: "https://drive.google.com/your-research-paper",
        impact: "https://drive.google.com/your-impact-report"
      },
      reflection: "This project emphasized the importance of inclusive design and taught me valuable lessons about designing for diverse abilities and age groups."
    }
  ];

  const academicProjects = {
    institution: "Gyalpozhing College of Information Technology",
    certificate: "Professional Certificate II in UX Design",
    module: "CSC401 - UX Portfolio Development",
    year: "Year 4 Semester 1, Autumn 2025",
    weightage: "15% of Module Assessment",
    deadline: "28 November 2025",
    projects: [
      {
        id: 1,
        title: "Mobile Application Design",
        description: "User-centered mobile app focusing on accessibility and intuitive navigation",
        focus: "UI/UX Design, User Research, Prototyping"
      },
      {
        id: 2,
        title: "Responsive Webpage Design",
        description: "Fully responsive website with modern design principles and adaptive layouts",
        focus: "Responsive Design, Visual Hierarchy, Interaction Design"
      },
      {
        id: 3,
        title: "UX for Social Good",
        description: "Design solution addressing community needs through user-centered approach",
        focus: "User Research, Problem Solving, Impact Design"
      }
    ],
    assessmentCriteria: [
      "Quality and clarity of case studies",
      "Cohesiveness of visual presentation",
      "Content relevance and accuracy",
      "Ease of navigation and organization",
      "Layout, aesthetics, and professionalism"
    ]
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Professional Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Real-world applications showcasing end-to-end development capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {professionalProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition-colors text-sm"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UX Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              UX Design <span className="text-purple-600">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              User-centered design projects following complete UX research and design process
            </p>
          </div>

          <div className="space-y-16">
            {uxProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Problem Statement:</h4>
                      <p className="text-gray-700 italic">{project.problem}</p>
                    </div>
                  </div>

                  {/* Design Process */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Design Process:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.process.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${step.color}`}
                        >
                          {step.icon}
                          <span className="font-medium text-sm">{step.phase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Grid */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(project.deliverables).map(([category, items]) => (
                        <div key={category}>
                          <h5 className="font-medium text-gray-800 mb-2 capitalize">
                            {category}:
                          </h5>
                          <ul className="space-y-1">
                            {items.map((item, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reflection */}
                  <div className="mb-8 bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Reflection:</h4>
                    <p className="text-gray-700 italic">{project.reflection}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.links.figma}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                    >
                      <FaFigma />
                      View Prototype
                    </a>
                    {project.links.caseStudy && (
                      <a
                        href={project.links.caseStudy}
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors text-sm"
                      >
                        <FaExternalLinkAlt />
                        Case Study
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;