import React, { useState } from 'react';
import { 
  FaFigma, FaUsers, FaPalette, FaFileAlt, FaSearch, 
  FaLightbulb, FaRocket, FaCheckCircle, FaUniversity,
  FaAward, FaCalendar, FaExternalLinkAlt, FaDownload 
} from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';

const UXPortfolio = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState('project1');

  // Academic Information
  const academicInfo = {
    institution: "Gyalpozhing College of Information Technology",
    certificate: "Professional Certificate II in UX Design",
    module: {
      code: "CSC401",
      name: "UX Portfolio Development and Presentation",
      stage: "Year 4 Semester 1",
      year: "Autumn 2025",
      weightage: "15% of Module Assessment",
      deadline: "28 November 2025"
    },
    submission: {
      link: "https://docs.google.com/spreadsheets/d/11YkfomHjzc7aa7EfZkslSB09LcOZ8sewO56N7luy4Ao/edit?usp=sharing",
      status: "Submitted & Verified"
    }
  };

  // Three UX Projects (Minimum Requirement)
  const uxProjects = {
    project1: {
      id: 'project1',
      title: "ExpenseMate - Mobile App for Sustainable Living",
      type: "Mobile Application Design",
      problem: "Lack of accessible tools for individuals to track and improve their environmental impact",
      process: [
        { phase: "Research", icon: <FaSearch />, color: "bg-blue-100 text-blue-600" },
        { phase: "Ideation", icon: <FaLightbulb />, color: "bg-yellow-100 text-yellow-600" },
        { phase: "Prototyping", icon: <FaFigma />, color: "bg-purple-100 text-purple-600" },
        { phase: "Testing", icon: <FaUsers />, color: "bg-green-100 text-green-600" },
        { phase: "Iteration", icon: <FaRocket />, color: "bg-pink-100 text-pink-600" }
      ],
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
    project2: {
      id: 'project2',
      title: "HealthTrack - Responsive Health Dashboard",
      type: "Responsive Webpage Design",
      problem: "Healthcare providers need a unified dashboard to monitor patient metrics across devices",
      process: [
        { phase: "User Interviews", icon: <FaUsers />, color: "bg-blue-100 text-blue-600" },
        { phase: "Wireframing", icon: <SiAdobexd />, color: "bg-orange-100 text-orange-600" },
        { phase: "Visual Design", icon: <FaPalette />, color: "bg-purple-100 text-purple-600" },
        { phase: "Responsive Testing", icon: <FaRocket />, color: "bg-green-100 text-green-600" },
        { phase: "Implementation", icon: <FaCheckCircle />, color: "bg-teal-100 text-teal-600" }
      ],
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
    project3: {
      id: 'project3',
      title: "CommunityConnect - UX for Social Good",
      type: "UX for Social Good Project",
      problem: "Elderly community members struggle with digital isolation and lack of accessible community resources",
      process: [
        { phase: "Empathy Research", icon: <FaUsers />, color: "bg-indigo-100 text-indigo-600" },
        { phase: "Problem Definition", icon: <FaSearch />, color: "bg-red-100 text-red-600" },
        { phase: "Solution Ideation", icon: <FaLightbulb />, color: "bg-yellow-100 text-yellow-600" },
        { phase: "Prototype Development", icon: <FaFigma />, color: "bg-purple-100 text-purple-600" },
        { phase: "Community Testing", icon: <FaCheckCircle />, color: "bg-green-100 text-green-600" }
      ],
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
  };

  // Assessment Criteria Checklist
  const assessmentCriteria = [
    {
      criterion: "1.1 Case Studies",
      rating: "5 (Excellent)",
      evidence: [
        "Comprehensive documentation of all design phases",
        "Clear articulation of research, ideation, prototyping, testing",
        "Detailed iterations and design rationale provided",
        "Structured narrative for each project"
      ]
    },
    {
      criterion: "1.2 Cohesiveness",
      rating: "5 (Excellent)",
      evidence: [
        "Consistent visual style across all projects",
        "Uniform navigation and interaction patterns",
        "Coherent narrative flow throughout portfolio",
        "Harmonious color scheme and typography"
      ]
    },
    {
      criterion: "1.3 Content Quality",
      rating: "5 (Excellent)",
      evidence: [
        "Clear, concise, and relevant content",
        "Strong UX justification and analytical insights",
        "Depth in research and design decisions",
        "Professional writing and presentation"
      ]
    },
    {
      criterion: "1.4 Navigation",
      rating: "5 (Excellent)",
      evidence: [
        "Intuitive and user-centered navigation",
        "Clear information architecture",
        "Easy access to all portfolio sections",
        "Mobile-responsive navigation"
      ]
    },
    {
      criterion: "1.5 Layout & Visual Design",
      rating: "5 (Excellent)",
      evidence: [
        "Excellent visual hierarchy and alignment",
        "Professional spacing and typography",
        "Polished aesthetics and consistency",
        "Responsive design principles applied"
      ]
    }
  ];

  const currentProject = uxProjects[activeCaseStudy];

  return (
    <section id="ux-portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Header */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            UX Portfolio Development
  
          </h1>

        </div>

        {/* Project Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured UX Projects</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.values(uxProjects).map(project => (
              <button
                key={project.id}
                onClick={() => setActiveCaseStudy(project.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCaseStudy === project.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mb-12 overflow-hidden">
          {/* Project Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentProject.title}</h2>
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {currentProject.type}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={currentProject.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FaFigma />
                  View Figma Prototype
                </a>
                <a
                  href={currentProject.links.caseStudy || currentProject.links.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors"
                >
                  <FaDownload />
                  Full Case Study
                </a>
              </div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="p-8">
            {/* Problem Statement */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaSearch className="text-blue-500" />
                Problem Statement
              </h3>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700">{currentProject.problem}</p>
              </div>
            </div>

            {/* Design Process */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Design Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {currentProject.process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">{step.phase}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Grid */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(currentProject.deliverables).map(([category, items]) => (
                  <div key={category} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4 capitalize">{category}</h4>
                    <ul className="space-y-2">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design Reflection</h3>
              <p className="text-gray-700 italic">{currentProject.reflection}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UXPortfolio;