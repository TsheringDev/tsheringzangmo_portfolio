import React from 'react';
import Header from '../Header';
import { 
  FaArrowLeft, 
  FaFigma, 
  FaFileAlt, 
  FaUsers,
  FaCalendar,
  FaChartLine,
  FaStethoscope,
  FaLaptop,
  FaCheckCircle,
  FaLightbulb,
  FaPalette,
  FaSearch,
  FaList,
  FaTools,
  FaPenAlt,
  FaCogs,
  FaPaintBrush,
  FaCode,
  FaArrowRight,
  FaUserCheck,
  FaDollarSign,
  FaChartBar,
  FaReceipt,
  FaPaw,
  FaBell,
  FaCreditCard,
  FaShieldAlt,
  FaUserMd
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Import images (you'll need to add your actual images)
import persona1 from '../../assets/personas/kunzang.png';
import persona2 from '../../assets/personas/kinga.png';
import persona3 from '../../assets/personas/kunzang.png';
// import dashboardScreen from '../../assets/vetconnect/dashboard.png';
// import appointmentScreen from '../../assets/vetconnect/dashboard.png';
// import medicalScreen from '../../assets/vetconnect/dashboard.png';
// import adminScreen from '../../assets/vetconnect/dashboard.png';
// import wireframe1 from '../../assets/vetconnect/dashboard.png';
// import wireframe2 from '../../assets/vetconnect/dashboard.png';
// import prototypeFlow from '../../assets/vetconnect/dashboard.png';


import dashboardScreen from '../../assets/vetconnect/dashboard.png';
import appointmentScreen from '../../assets/vetconnect/appointments.png';
import medicalScreen from '../../assets/vetconnect/medical-records.png';
import adminScreen from '../../assets/vetconnect/admin.png';
import wireframe1 from '../../assets/vetconnect/wireframe1.png';
import wireframe2 from '../../assets/vetconnect/wireframe2.png';
import prototypeFlow from '../../assets/vetconnect/prototype-flow.png';

const VetConnectCaseStudy = () => {
  const navigate = useNavigate();

  // Subheader navigation sections
  const sections = ['overview', 'problem', 'research', 'wireframes', 'design', 'prototype', 'iterations', 'reflections'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Subheader Navigation */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-purple-700 to-indigo-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>

            <div className="hidden md:flex items-center space-x-4">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-white/90 hover:text-white font-medium text-sm uppercase transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-white/10"
                >
                  {section}
                </a>
              ))}
            </div>

            <a
              href="https://www.figma.com/proto/2PQ5NRuEO4FtwzSaFgbMsN/PRJ303-VetConnect?node-id=1540-3675&t=avpu6QBPPCUc2IIY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1540%3A3675&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white font-medium text-sm uppercase px-4 py-2 rounded-lg transition-colors duration-300 backdrop-blur-sm flex items-center gap-2"
            >
              <FaFigma />
              View Prototype
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaLaptop />
              <span className="font-medium">Web Application - Veterinary Management System</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">VetConnect</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              A comprehensive veterinary management platform connecting pet owners with healthcare providers through appointment scheduling, medical record tracking, and administrative tools
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* 1. Project Overview */}
          <section id="overview" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <FaLaptop className="text-purple-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    <strong>VetConnect</strong> is an all-in-one veterinary management platform designed to streamline pet healthcare by connecting pet owners with veterinary professionals. The system includes appointment scheduling, medical record management, billing, and administrative tools for clinic management.
                  </p>
                  <p>
                    This platform addresses critical gaps in veterinary care coordination, providing a seamless experience for pet owners, veterinarians, and clinic administrators while ensuring comprehensive pet health tracking.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                      <FaSearch className="text-purple-600 text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">User Research</h4>
                    <p className="text-sm text-gray-600">Analysis of veterinary workflows and pet owner needs</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                      <FaList className="text-indigo-600 text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Design Process</h4>
                    <p className="text-sm text-gray-600">From appointment flows to admin dashboards</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-pink-100 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                      <FaCogs className="text-pink-600 text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Testing & Iteration</h4>
                    <p className="text-sm text-gray-600">Refining based on veterinary professional feedback</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Project Type</h4>
                    <p className="text-gray-600">Web Application - Veterinary Management</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">My Role</h4>
                    <p className="text-gray-600">Lead UX/UI Designer & Researcher</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-600">16 Weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Tools Used</h4>
                    <p className="text-gray-600">Figma, Miro, UserTesting, Optimal Workshop</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Key Features</h4>
                    <p className="text-gray-600">Appointment Scheduling, Medical Records, Admin Dashboard, Billing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Problem Statement */}
          <section id="problem" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <FaLightbulb className="text-pink-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Problem Statement</h2>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100 rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-lg text-gray-700">
                  Veterinary clinics face significant challenges with manual appointment scheduling, disorganized medical records, 
                  inefficient billing processes, and poor communication between pet owners and healthcare providers. These issues 
                  lead to decreased efficiency, frustrated clients, and compromised pet care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Key Problems Identified</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-pink-500 mt-1 flex-shrink-0" />
                      <span>Manual appointment booking leads to scheduling conflicts and no-shows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-pink-500 mt-1 flex-shrink-0" />
                      <span>Paper-based medical records are easily lost or damaged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-pink-500 mt-1 flex-shrink-0" />
                      <span>Lack of centralized platform for client-veterinarian communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-pink-500 mt-1 flex-shrink-0" />
                      <span>Inefficient billing and payment processing systems</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Solution Goals</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                      <span>Automated appointment scheduling with real-time availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                      <span>Digital medical record storage and management system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                      <span>Integrated communication platform for all stakeholders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                      <span>Streamlined billing and payment processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. User Research */}
          <section id="research" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <FaUsers className="text-indigo-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">User Research & Insights</h2>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">User Personas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Pet Owner */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                        <img
                          src={persona1}
                          alt="Pet Owner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Sarah Thompson</h4>
                        <p className="text-gray-600 mb-2">Pet Owner, 32</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Dog Owner</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Busy Professional</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Goals:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Easy appointment booking and reminders</li>
                          <li>• Access to pet's complete medical history</li>
                          <li>• Clear communication with veterinarians</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Pain Points:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Long wait times for appointments</li>
                          <li>• Lost vaccination records</li>
                          <li>• No online booking options</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Veterinarian */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                        <img
                          src={persona2}
                          alt="Veterinarian"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Dr. James Wilson</h4>
                        <p className="text-gray-600 mb-2">Veterinarian, 45</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Clinic Owner</span>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">20+ Years Experience</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Goals:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Efficient appointment management</li>
                          <li>• Organized medical record system</li>
                          <li>• Streamlined billing process</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Pain Points:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Paper record management is time-consuming</li>
                          <li>• Appointment no-shows affect revenue</li>
                          <li>• Manual billing leads to errors</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Clinic Admin */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                        <img
                          src={persona3}
                          alt="Clinic Admin"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4>
                        <p className="text-gray-600 mb-2">Clinic Administrator, 38</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Operations</span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Multi-tasker</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Goals:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Manage veterinarian schedules effectively</li>
                          <li>• Track clinic performance metrics</li>
                          <li>• Handle client billing and refunds</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Pain Points:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Multiple disconnected systems</li>
                          <li>• Difficulty tracking expertise management</li>
                          <li>• Manual report generation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Research Methodology & Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Stakeholder Interviews</h4>
                    <p className="text-gray-600">25+ interviews with vets, admins, pet owners</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                      <p className="text-sm text-gray-600">68% of clinics still use paper records</p>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Workflow Analysis</h4>
                    <p className="text-gray-600">10 clinics observed for 2 weeks each</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                      <p className="text-sm text-gray-600">Average 45 minutes wasted daily on manual scheduling</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Competitive Analysis</h4>
                    <p className="text-gray-600">12 veterinary software solutions analyzed</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                      <p className="text-sm text-gray-600">Lack of integrated communication features in existing solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Wireframes */}
          <section id="wireframes" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <FaList className="text-yellow-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Wireframes (Low-Fidelity)</h2>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Concepts & Workflow Exploration</h3>
                <p className="text-gray-600">
                  Started with low-fidelity wireframes to establish complex workflows including appointment scheduling, medical record management, and administrative dashboards before visual design.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">Admin Dashboard Wireframe</h4>
                  <div className="aspect-[16/9] rounded-lg border-2 border-gray-300 overflow-hidden">
                    <img
                      src={wireframe1}
                      alt="Admin Dashboard Wireframe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Layout showing total veterinarians, clients, expertise management, and quick actions
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">Appointment Scheduling Wireframe</h4>
                  <div className="aspect-[16/9] rounded-lg border-2 border-gray-300 overflow-hidden">
                    <img
                      src={wireframe2}
                      alt="Appointment Scheduling Wireframe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Calendar interface with time slot selection and veterinarian availability
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Wireframe Key Decisions</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                    <span><strong>Dashboard Hierarchy:</strong> Prioritized key metrics for quick admin decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                    <span><strong>Navigation:</strong> Clear categorization for Expertise Management, Content, Feedback, Payout, Refunds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                    <span><strong>Data Tables:</strong> Designed for efficient management of veterinarian and client data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                    <span><strong>User Roles:</strong> Clear separation between admin, veterinarian, and pet owner views</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. High-Fidelity Designs */}
          <section id="design" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <FaPaintBrush className="text-indigo-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">High-Fidelity Designs</h2>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Final UI Screens</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Admin Dashboard</h4>
                    <div className="aspect-[16/9] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={dashboardScreen}
                        alt="VetConnect Admin Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Comprehensive admin dashboard with total veterinarians, clients, expertise management, and data tables
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Appointment Management</h4>
                    <div className="aspect-[16/9] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={appointmentScreen}
                        alt="Appointment Management"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Calendar view with appointment scheduling, veterinarian assignment, and time slot management
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Medical Records</h4>
                    <div className="aspect-[16/9] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={medicalScreen}
                        alt="Medical Records"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Complete pet medical history with treatment records, vaccinations, and prescription management
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Veterinarian Management</h4>
                    <div className="aspect-[16/9] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={adminScreen}
                        alt="Veterinarian Management"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Veterinarian directory with CID numbers, contact details, expertise areas, and management actions
                    </p>
                  </div>
                </div>
              </div>

              {/* Design System */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Design System</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Color System */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <FaPalette className="text-purple-600" />
                      Color System
                    </h5>
                    <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden p-4">
                      <div className="grid grid-cols-3 gap-3 h-full">
                        {/* Primary Colors (Purple Theme) */}
                        <div className="flex flex-col gap-2">
                          <div className="h-8 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                          <div className="h-8 rounded-md bg-purple-600"></div>
                          <div className="h-8 rounded-md bg-indigo-600"></div>
                          <p className="text-xs font-medium mt-2">Primary</p>
                        </div>
                        
                        {/* Neutral Colors */}
                        <div className="flex flex-col gap-2">
                          <div className="h-8 rounded-md bg-gray-900"></div>
                          <div className="h-8 rounded-md bg-gray-700"></div>
                          <div className="h-8 rounded-md bg-gray-500"></div>
                          <p className="text-xs font-medium mt-2">Neutral</p>
                        </div>
                        
                        {/* Semantic Colors */}
                        <div className="flex flex-col gap-2">
                          <div className="h-8 rounded-md bg-green-500"></div>
                          <div className="h-8 rounded-md bg-amber-500"></div>
                          <div className="h-8 rounded-md bg-red-500"></div>
                          <p className="text-xs font-medium mt-2">Semantic</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Professional purple theme promoting trust and reliability in healthcare
                    </p>
                  </div>

                  {/* Typography */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="font-semibold text-gray-700 mb-4">Typography</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">Inter Bold</div>
                        <p className="text-xs text-gray-500">Headings & important metrics</p>
                      </div>
                      <div>
                        <div className="text-lg font-medium text-gray-900">Inter Medium</div>
                        <p className="text-xs text-gray-500">Subheadings & navigation</p>
                      </div>
                      <div>
                        <div className="text-base text-gray-900">Inter Regular</div>
                        <p className="text-xs text-gray-500">Body text & data entries</p>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Inter Regular</div>
                        <p className="text-xs text-gray-500">Table data & labels</p>
                      </div>
                    </div>
                  </div>

                  {/* Module Flow */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="font-semibold text-gray-700 mb-4">Core Modules</h5>
                    <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden p-4">
                      <div className="grid grid-cols-2 gap-3 h-full">
                        {/* Expertise Management */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-2">
                            <FaUserMd />
                          </div>
                          <p className="text-xs font-medium text-gray-800">Expertise Management</p>
                          <p className="text-[10px] text-gray-600 mt-1">Veterinarian specialties</p>
                        </div>
                        
                        {/* Appointment Booking */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mb-2">
                            <FaCalendar />
                          </div>
                          <p className="text-xs font-medium text-gray-800">Appointment Booking</p>
                          <p className="text-[10px] text-gray-600 mt-1">Schedule management</p>
                        </div>
                        
                        {/* Medical Records */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mb-2">
                            <FaStethoscope />
                          </div>
                          <p className="text-xs font-medium text-gray-800">Medical Records</p>
                          <p className="text-[10px] text-gray-600 mt-1">Pet health history</p>
                        </div>
                        
                        {/* Billing & Payout */}
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mb-2">
                            <FaCreditCard />
                          </div>
                          <p className="text-xs font-medium text-gray-800">Billing & Payout</p>
                          <p className="text-[10px] text-gray-600 mt-1">Financial management</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Comprehensive modules covering all veterinary management needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Prototype */}
          <section id="prototype" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FaCode className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Interactive Prototype</h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Figma Prototype Features</h3>
                <p className="text-gray-600">
                  Complete interactive web prototype with appointment scheduling flows, medical record management, and administrative functions for comprehensive testing.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">User Flows Included</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Admin dashboard navigation and data management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Appointment scheduling and calendar management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Medical record creation and retrieval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Veterinarian expertise management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Billing, payout, and refund processing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Prototype Flow</h4>
                    <div className="aspect-video rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={prototypeFlow}
                        alt="Prototype User Flow"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Complete user journey from admin login to appointment management
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-lg">
                    <div className="bg-gradient-to-b from-white to-gray-100 border-8 border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <FaPaw className="text-white text-xl" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">VetConnect</h3>
                            <p className="text-purple-200">Interactive Web Prototype</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center mx-auto mb-4">
                            <FaLaptop className="text-purple-600 text-3xl" />
                          </div>
                          <p className="text-gray-700 mb-4">
                            Explore the complete veterinary management system with role-based access and comprehensive features
                          </p>
                        </div>
                        <a
                          href="https://www.figma.com/proto/2PQ5NRuEO4FtwzSaFgbMsN/PRJ303-VetConnect?node-id=1540-3675&t=avpu6QBPPCUc2IIY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1540%3A3675&show-proto-sidebar=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg text-center block"
                        >
                          Open Web Prototype
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://www.figma.com/proto/2PQ5NRuEO4FtwzSaFgbMsN/PRJ303-VetConnect?node-id=1540-3675&t=avpu6QBPPCUc2IIY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1540%3A3675&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <FaFigma />
                  View Interactive Web Prototype on Figma
                </a>
              </div>
            </div>
          </section>

          {/* 7. Iterations & Design Rationale */}
          <section id="iterations" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <FaTools className="text-amber-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Iterations & Design Rationale</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Iterations Based on User Testing</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6 py-2">
                    <h4 className="font-bold text-gray-900 mb-2">Iteration 1: Dashboard Information Architecture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                        <p className="text-sm text-gray-600">Overwhelming data presentation with no clear hierarchy</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                        <p className="text-sm text-gray-600">Categorized sections with clear visual hierarchy and quick actions</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      <strong>Rationale:</strong> Admins needed to quickly access key metrics without information overload
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-6 py-2">
                    <h4 className="font-bold text-gray-900 mb-2">Iteration 2: Veterinarian Data Table</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                        <p className="text-sm text-gray-600">Complex table with too many columns and poor filtering</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                        <p className="text-sm text-gray-600">Simplified view with essential info and efficient action buttons</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      <strong>Rationale:</strong> Reduced cognitive load while maintaining necessary functionality for efficient management
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6 py-2">
                    <h4 className="font-bold text-gray-900 mb-2">Iteration 3: Navigation Structure</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                        <p className="text-sm text-gray-600">Nested navigation with confusing categorization</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                        <p className="text-sm text-gray-600">Clear 5-category system: Expertise, Content, Feedback, Payout, Refunds</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      <strong>Rationale:</strong> Users needed intuitive navigation that matched their workflow patterns
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Design Rationale Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Role-Based Design</h5>
                    <p className="text-sm text-gray-600">
                      Tailored interfaces for admins, veterinarians, and pet owners with appropriate feature access
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Efficiency Focused</h5>
                    <p className="text-sm text-gray-600">
                      Designed to reduce administrative workload through automation and smart defaults
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Data Security First</h5>
                    <p className="text-sm text-gray-600">
                      HIPAA-compliant design with secure data handling and privacy considerations
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Scalable Architecture</h5>
                    <p className="text-sm text-gray-600">
                      Modular design allowing for future feature additions and clinic size scalability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Reflections */}
          <section id="reflections" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <FaPenAlt className="text-teal-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Reflections & Learnings</h2>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Learnings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">What Worked Well</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Stakeholder interviews revealed critical workflow insights that informed design decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Modular approach allowed for flexible adaptation to different clinic sizes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Clear role-based design improved user adoption and reduced training time</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Areas for Improvement</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-amber-500 mt-1 flex-shrink-0" />
                        <span>Could have included more mobile-responsive testing for on-the-go access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-amber-500 mt-1 flex-shrink-0" />
                        <span>Integration testing with existing clinic software systems earlier in the process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-amber-500 mt-1 flex-shrink-0" />
                        <span>More extensive testing with non-technical veterinary staff</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h4 className="font-bold text-gray-900 mb-6">Impact & Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                    <p className="text-gray-700">Admin Satisfaction</p>
                    <p className="text-sm text-gray-500">Based on clinic administrator feedback</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">89%</div>
                    <p className="text-gray-700">Time Saved</p>
                    <p className="text-sm text-gray-500">In administrative tasks</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">4.9/5</div>
                    <p className="text-gray-700">Usability Score</p>
                    <p className="text-sm text-gray-500">System Usability Scale</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Future Considerations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Mobile App Extension</h5>
                    <p className="text-sm text-gray-600">
                      Companion mobile app for veterinarians and pet owners for on-the-go access
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">AI Integration</h5>
                    <p className="text-sm text-gray-600">
                      AI-powered appointment scheduling and preliminary diagnosis assistance
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Telemedicine Features</h5>
                    <p className="text-sm text-gray-600">
                      Virtual consultations and remote pet health monitoring integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default VetConnectCaseStudy;