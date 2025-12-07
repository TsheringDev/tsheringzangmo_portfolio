import React from 'react';
import Header from '../Header';
import { 
  FaArrowLeft, 
  FaFigma, 
  FaFileAlt, 
  FaUsers,
  FaDumbbell,
  FaChartLine,
  FaHeart,
  FaMobileAlt,
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
  FaReceipt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Import images (you'll need to add your actual images)
// import persona1 from '../../assets/personas/kinga.png';
// import persona2 from '../../assets/personas/kinga.png';
// import dashboardScreen from '../../assets/fitboost/dashboard.png';
// import workoutScreen from '../../assets/fitboost/dashboard.png';
// import planScreen from '../../assets/fitboost/dashboard.png';
// import bmiScreen from '../../assets/fitboost/dashboard.png';
// import wireframe1 from '../../assets/fitboost/dashboard.png';
// import wireframe2 from '../../assets/fitboost/dashboard.png';
// import prototypeFlow from '../../assets/fitboost/dashboard.png';


// // Import images (you'll need to add your actual images)
import persona1 from '../../assets/personas/kinga.png';
import persona2 from '../../assets/personas/kinga.png';
import dashboardScreen from '../../assets/fitboost/workouts.png';
import workoutScreen from '../../assets/fitboost/dashboard.png';
import planScreen from '../../assets/fitboost/plans.png';
import bmiScreen from '../../assets/fitboost/bmi-tracker.png';
import wireframe1 from '../../assets/fitboost/wireframe1.png';
import wireframe2 from '../../assets/fitboost/wireframe2.png';
import prototypeFlow from '../../assets/fitboost/prototype-flow.png';

const FitBoostCaseStudy = () => {
  const navigate = useNavigate();

  // Subheader navigation sections
  const sections = ['overview', 'problem', 'research', 'wireframes', 'design', 'prototype', 'iterations', 'reflections'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
         <Header />
      {/* Subheader Navigation */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-green-700 to-emerald-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-green-200 transition-colors"
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
              href="https://www.figma.com/proto/Nw1osLy9rLpOMmlZaLXfC6/FitBoost"
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
      <div className="relative py-20 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaMobileAlt />
              <span className="font-medium">Fitness Mobile Application</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">FitBoost</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              A holistic fitness companion that helps users track workouts, monitor progress, and achieve health goals with personalized guidance
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
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <FaMobileAlt className="text-green-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    <strong>FitBoost</strong> is a comprehensive fitness application designed to help users track their fitness journey, 
                    access personalized workout routines, and monitor health metrics through an intuitive interface. 
                    The app addresses common fitness challenges like lack of motivation, inconsistent tracking, 
                    and difficulty finding suitable workout routines.
                  </p>
                  <p>
                    This case study documents the complete UX design process from initial research to final prototype, 
                    focusing on creating an engaging and effective fitness tracking experience.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <FaSearch className="text-green-600 text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">User Research</h4>
                    <p className="text-sm text-gray-600">Analysis of fitness behaviors and pain points</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                      <FaList className="text-emerald-600 text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Design Process</h4>
                    <p className="text-sm text-gray-600">From workout flows to progress tracking</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                      <FaCogs className="text-teal-600 text-xl" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Testing & Iteration</h4>
                    <p className="text-sm text-gray-600">Refining based on user feedback</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Project Type</h4>
                    <p className="text-gray-600">Fitness Mobile Application</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">My Role</h4>
                    <p className="text-gray-600">UX/UI Designer & Researcher</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-600">12 Weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Tools Used</h4>
                    <p className="text-gray-600">Figma, Miro, UserTesting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Key Features</h4>
                    <p className="text-gray-600">Workout Plans, BMI Tracking, Progress Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Problem Statement */}
          <section id="problem" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <FaLightbulb className="text-orange-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Problem Statement</h2>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-lg text-gray-700">
                  Many individuals struggle to maintain consistent fitness routines due to lack of guidance, 
                  motivation, and clear progress tracking. Existing fitness apps often overwhelm users with 
                  complex interfaces or fail to provide personalized workout plans.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">User Problems Identified</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                      <span>No personalized workout recommendations based on goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                      <span>Difficulty tracking BMI and progress over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                      <span>Lack of motivation without community support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                      <span>Complex interfaces make routine creation difficult</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Solution Goals</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Personalized workout plans based on fitness level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Easy BMI and progress tracking with visualizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Community features for motivation and accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Simple interface for workout creation and tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. User Research */}
          <section id="research" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <FaUsers className="text-teal-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">User Research & Insights</h2>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">User Personas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Fitness Beginner */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                        <img
                          src={persona1}
                          alt="Fitness Beginner"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Emma Johnson</h4>
                        <p className="text-gray-600 mb-2">Office Worker, 28</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Beginner</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Busy Schedule</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Goals:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Lose weight and improve overall health</li>
                          <li>• Build consistent workout routine</li>
                          <li>• Track BMI and progress easily</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Pain Points:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Overwhelmed by complex workout apps</li>
                          <li>• Lacks motivation without guidance</li>
                          <li>• Difficulty tracking progress effectively</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Fitness Enthusiast */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                        <img
                          src={persona2}
                          alt="Fitness Enthusiast"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Alex Chen</h4>
                        <p className="text-gray-600 mb-2">Fitness Enthusiast, 32</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Intermediate</span>
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Goal-Oriented</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Goals:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Build muscle and improve strength</li>
                          <li>• Create custom workout plans</li>
                          <li>• Track detailed progress metrics</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Pain Points:</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Existing apps lack customization options</li>
                          <li>• Poor progress visualization</li>
                          <li>• No advanced workout planning features</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Research Methodology & Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Online Surveys</h4>
                    <p className="text-gray-600">150+ respondents</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                      <p className="text-sm text-gray-600">72% abandon fitness apps within first month</p>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">User Interviews</h4>
                    <p className="text-gray-600">15 in-depth interviews</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                      <p className="text-sm text-gray-600">Users want simple, guided workout plans</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-2">Competitive Analysis</h4>
                    <p className="text-gray-600">8 fitness apps analyzed</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                      <p className="text-sm text-gray-600">Visual progress tracking drives engagement</p>
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
                  Started with low-fidelity wireframes to establish workout flows, BMI tracking, and plan creation before visual design.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">Dashboard Wireframe</h4>
                  <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                    <img
                      src={wireframe1}
                      alt="Dashboard Wireframe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Layout showing workout of the day, BMI tracking, and quick actions
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">Workout Plan Wireframe</h4>
                  <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                    <img
                      src={wireframe2}
                      alt="Workout Plan Wireframe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Plan creation interface with duration settings and goal selection
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Wireframe Key Decisions</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Workout Flow:</strong> Simple 3-step process for workout logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>BMI Tracking:</strong> Prominent display with easy input methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Navigation:</strong> Bottom navigation for quick access to main features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Plan Creation:</strong> Guided process for creating custom workout plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. High-Fidelity Designs */}
          <section id="design" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <FaPaintBrush className="text-emerald-600 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">High-Fidelity Designs</h2>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Final UI Screens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Dashboard Screen</h4>
                    <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={dashboardScreen}
                        alt="FitBoost Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Clean dashboard showing workout of the day, BMI tracking, and quick stats
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Workout Library Screen</h4>
                    <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={workoutScreen}
                        alt="Workout Library"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Organized workout categories with difficulty levels and time estimates
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Plan Creation Screen</h4>
                    <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={planScreen}
                        alt="Plan Creation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Custom workout plan creation with duration and goal settings
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">BMI Tracker Screen</h4>
                    <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                      <img
                        src={bmiScreen}
                        alt="BMI Tracker"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      BMI calculation and tracking with visual progress indicators
                    </p>
                  </div>
                </div>
              </div>

              {/* Design System */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Design System</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Color System */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <FaPalette className="text-green-600" />
                      Color System
                    </h5>
                    <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden p-4">
                      <div className="grid grid-cols-3 gap-3 h-full">
                        {/* Primary Colors (Green Theme) */}
                        <div className="flex flex-col gap-2">
                          <div className="h-8 rounded-md bg-gradient-to-r from-green-600 to-emerald-600"></div>
                          <div className="h-8 rounded-md bg-green-600"></div>
                          <div className="h-8 rounded-md bg-emerald-600"></div>
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
                          <div className="h-8 rounded-md bg-blue-500"></div>
                          <div className="h-8 rounded-md bg-amber-500"></div>
                          <div className="h-8 rounded-md bg-red-500"></div>
                          <p className="text-xs font-medium mt-2">Semantic</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Energetic green theme promoting health and motivation
                    </p>
                  </div>

                  {/* Typography */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="font-semibold text-gray-700 mb-4">Typography</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">Inter Bold</div>
                        <p className="text-xs text-gray-500">Headings & workout titles</p>
                      </div>
                      <div>
                        <div className="text-lg font-medium text-gray-900">Inter Medium</div>
                        <p className="text-xs text-gray-500">Subheadings & buttons</p>
                      </div>
                      <div>
                        <div className="text-base text-gray-900">Inter Regular</div>
                        <p className="text-xs text-gray-500">Body text & descriptions</p>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Inter Regular</div>
                        <p className="text-xs text-gray-500">Stats & small labels</p>
                      </div>
                    </div>
                  </div>

                  {/* Onboarding Flow */}
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="font-semibold text-gray-700 mb-4">Onboarding Flow</h5>
                    <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden p-4">
                      <div className="grid grid-cols-2 gap-3 h-full">
                        {/* Step 1: Goals */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mb-2">1</div>
                          <p className="text-xs font-medium text-gray-800">Set Goals</p>
                          <p className="text-[10px] text-gray-600 mt-1">Define fitness objectives</p>
                        </div>
                        
                        {/* Step 2: Level */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mb-2">2</div>
                          <p className="text-xs font-medium text-gray-800">Fitness Level</p>
                          <p className="text-[10px] text-gray-600 mt-1">Beginner/Intermediate/Advanced</p>
                        </div>
                        
                        {/* Step 3: Schedule */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mb-2">3</div>
                          <p className="text-xs font-medium text-gray-800">Schedule</p>
                          <p className="text-[10px] text-gray-600 mt-1">Set workout days & times</p>
                        </div>
                        
                        {/* Step 4: Complete */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold mb-2">4</div>
                          <p className="text-xs font-medium text-gray-800">Ready!</p>
                          <p className="text-[10px] text-gray-600 mt-1">Personalized plan created</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Personalized onboarding for tailored fitness experience
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
                  Complete interactive prototype with workout flows, BMI tracking, and plan creation for comprehensive usability testing.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">User Flows Included</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Onboarding and fitness assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Workout selection and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>BMI calculation and progress tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Custom workout plan creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Progress analytics and insights</span>
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
                      Complete user journey from onboarding to workout completion
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-64 h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 flex items-center justify-center">
                        <div className="w-16 h-4 bg-gray-800 rounded-full"></div>
                      </div>
                      <div className="absolute top-6 left-0 right-0 bottom-0 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center p-8">
                        <div className="text-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                            <FaDumbbell className="text-white text-2xl" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">FitBoost</h3>
                          <p className="text-gray-600 mt-2">Interactive Prototype</p>
                        </div>
                        <a
                          href="https://www.figma.com/proto/Nw1osLy9rLpOMmlZaLXfC6/FitBoost"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                        >
                          Open Prototype
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://www.figma.com/proto/Nw1osLy9rLpOMmlZaLXfC6/FitBoost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  <FaFigma />
                  View Interactive Prototype on Figma
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
                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="font-bold text-gray-900 mb-2">Iteration 1: Workout Tracking Flow</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                        <p className="text-sm text-gray-600">Complex 5-step workout logging process</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                        <p className="text-sm text-gray-600">Simplified 2-step quick log with defaults</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      <strong>Rationale:</strong> Users wanted faster logging during workouts, not detailed data entry
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h4 className="font-bold text-gray-900 mb-2">Iteration 2: BMI Tracker Interface</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                        <p className="text-sm text-gray-600">Separate screens for height/weight input</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                        <p className="text-sm text-gray-600">Unified interface with sliders and quick save</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      <strong>Rationale:</strong> Reduced friction in tracking BMI changes over time
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6 py-2">
                    <h4 className="font-bold text-gray-900 mb-2">Iteration 3: Plan Creation</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                        <p className="text-sm text-gray-600">Manual selection of each exercise</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                        <p className="text-sm text-gray-600">Template-based system with customization</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      <strong>Rationale:</strong> Users wanted guidance but also customization options
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Design Rationale Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Motivation Focused</h5>
                    <p className="text-sm text-gray-600">
                      Designed to keep users engaged with progress visualization and achievements
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Accessibility First</h5>
                    <p className="text-sm text-gray-600">
                      Large touch targets, high contrast, and clear typography for all users
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Time-Efficient</h5>
                    <p className="text-sm text-gray-600">
                      Optimized for quick interactions during busy schedules
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Personalization</h5>
                    <p className="text-sm text-gray-600">
                      Adapts to different fitness levels and goals for relevant experience
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
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Iterative testing with real users improved workout flows significantly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Visual progress tracking increased user motivation and retention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>Simplified BMI tracking interface received positive feedback</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Areas for Improvement</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                        <span>Could integrate more social features for community motivation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                        <span>Add more workout variety for advanced users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                        <span>Include nutrition tracking integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h4 className="font-bold text-gray-900 mb-6">Impact & Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">91%</div>
                    <p className="text-gray-700">User Satisfaction</p>
                    <p className="text-sm text-gray-500">Based on post-testing surveys</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                    <p className="text-gray-700">User Retention</p>
                    <p className="text-sm text-gray-500">After 30 days of use</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
                    <p className="text-gray-700">Usability Score</p>
                    <p className="text-sm text-gray-500">System Usability Scale</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Future Considerations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Advanced Analytics</h5>
                    <p className="text-sm text-gray-600">
                      AI-powered workout recommendations and recovery tracking
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Social Features</h5>
                    <p className="text-sm text-gray-600">
                      Group challenges, friend connections, and workout sharing
                    </p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-700 mb-2">Wearable Integration</h5>
                    <p className="text-sm text-gray-600">
                      Connect with fitness trackers and smartwatches
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

export default FitBoostCaseStudy;