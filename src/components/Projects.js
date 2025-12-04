import React from 'react';
import vetConnectImage from '../assets/vetconnect.jpg';
import turfTrekImage from '../assets/gcit-turftrek.png';
import casImage from '../assets/cas.png';
import { FaExternalLinkAlt, FaGithub, FaUniversity, FaAward, FaCalendar } from 'react-icons/fa';

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
      image: casImage, // (you can add an image variable)
      github: '#',
      live: '#',
      highlights: [
       'Attendance tracking'
        ,'Leave management',
        'Overtime'
      ],
      type: 'Full Stack'


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
      </div>
    </section>
  );
};

export default Projects;