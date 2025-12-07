import React from 'react';
import Header from '../Header';
import {
    FaFigma,
    FaFileAlt,
    FaUsers,
    FaLightbulb,
    FaChartLine,
    FaMobileAlt,
    FaCheckCircle,
    FaPaintBrush,
    FaCode,
    FaArrowRight,
    FaPenAlt,
    FaUserCheck,
    FaTools,
    FaDollarSign,
    FaChartBar,
    FaReceipt,
    FaSearch,
    FaList,
    FaPalette,
    FaCogs
} from 'react-icons/fa';

// Import your actual images



// Import persona images
import karmaYuden from '../../assets/personas/kunzang.png';
import takewangDorji from '../../assets/personas/kunzang.png';


// // Import your actual images
import dashboardScreen from '../../assets/expense-mate/dashboard.png';
import reportScreen from '../../assets/expense-mate/report-screen.png';
import addExpenseScreen from '../../assets/expense-mate/add-expense.png';
import transactionScreen from '../../assets/expense-mate/transactions.png';
import profileScreen from '../../assets/expense-mate/profile.png';


// // Import wireframe images
import wireframe1 from '../../assets/wireframe-1.jpg';
import wireframe2 from '../../assets/wireframe-2.jpg';


import prototypeFlow from '../../assets/prototype-flow.jpg';

const ExpenseMateCaseStudy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />

            {/* Subheader */}
            <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-blue-700 to-purple-600 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                  
                        </button>

                        <div className="hidden md:flex items-center space-x-4">
                            {['overview', 'problem', 'research', 'wireframes', 'design', 'prototype', 'iterations', 'reflections'].map((section) => (
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
                            href="https://www.figma.com/proto/LIsLK7pEhCWcv1SqsZNYhz/ExpenseMate"
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

            {/* Main Content */}
            <div className="pt-32">
                {/* Hero Section */}
                <div className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-500">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-white">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <FaMobileAlt />
                                <span className="font-medium">Mobile Application Design</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">ExpenseMate</h1>
                            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                                A personal finance app that simplifies expense tracking and provides actionable financial insights
                            </p>
                        </div>
                    </div>
                </div>

                {/* Case Study Sections */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* 1. Project Overview */}
                    <section id="overview" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                <FaMobileAlt className="text-blue-600 text-xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <div className="space-y-4 text-gray-600">
                                    <p className="text-lg">
                                        <strong>ExpenseMate</strong> is a mobile application designed to help users track expenses, monitor spending patterns, and gain financial insights through an intuitive interface. The project followed a complete UX design process from research to final prototype.
                                    </p>
                                    <p>
                                        This case study documents my design process, research findings, iterations, and final solutions for creating a user-friendly financial tracking application.
                                    </p>
                                </div>
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                            <FaSearch className="text-blue-600 text-xl" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">User Research</h4>
                                        <p className="text-sm text-gray-600">Comprehensive analysis of user needs and behaviors</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                                            <FaList className="text-purple-600 text-xl" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Design Process</h4>
                                        <p className="text-sm text-gray-600">From wireframes to high-fidelity prototypes</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                                            <FaCogs className="text-green-600 text-xl" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Testing & Iteration</h4>
                                        <p className="text-sm text-gray-600">Multiple rounds of user testing and refinements</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Project Type</h4>
                                        <p className="text-gray-600">Mobile Application Design</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">My Role</h4>
                                        <p className="text-gray-600">UX/UI Designer & Researcher</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Duration</h4>
                                        <p className="text-gray-600">8 Weeks</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Tools Used</h4>
                                        <p className="text-gray-600">Figma, Miro, Google Forms</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Deliverables</h4>
                                        <p className="text-gray-600">User Research, Wireframes, Prototype, Design System</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Problem Statement */}
                    <section id="problem" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                <FaLightbulb className="text-red-600 text-xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Problem Statement</h2>
                        </div>
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-8">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                                <p className="text-lg text-gray-700">
                                    Many people struggle with tracking their daily expenses effectively. Existing financial apps are often complex, overwhelming, or lack clear insights, leading to poor financial habits and lack of awareness about spending patterns.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-3">User Problems Identified</h4>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <FaArrowRight className="text-red-500 mt-1 flex-shrink-0" />
                                            <span>Manual expense entry is tedious and often forgotten</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaArrowRight className="text-red-500 mt-1 flex-shrink-0" />
                                            <span>Financial reports are confusing and not actionable</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaArrowRight className="text-red-500 mt-1 flex-shrink-0" />
                                            <span>No clear visualization of spending patterns</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaArrowRight className="text-red-500 mt-1 flex-shrink-0" />
                                            <span>Lack of personalized financial insights</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-3">Business Objectives</h4>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                            <span>Create an intuitive expense tracking experience</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                            <span>Provide clear, actionable financial insights</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                            <span>Increase user engagement with financial tracking</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                            <span>Design for both novice and experienced users</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. User Research */}
                    <section id="research" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                <FaUsers className="text-purple-600 text-xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">User Research & Insights</h2>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">User Personas</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Karma Yuden */}
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                                                <img
                                                    src={karmaYuden}
                                                    alt="Karma Yuden"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg">Karma Yuden</h4>
                                                <p className="text-gray-600 mb-2">College Student, 23</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Student</span>
                                                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Tech Savvy</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h5 className="font-semibold text-gray-700 mb-2">Goals:</h5>
                                                <ul className="text-gray-600 text-sm space-y-1">
                                                    <li>• Track expenses on limited budget</li>
                                                    <li>• Save articles for later reading</li>
                                                    <li>• Avoid cluttered interfaces</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-700 mb-2">Pain Points:</h5>
                                                <ul className="text-gray-600 text-sm space-y-1">
                                                    <li>• Too much text or clutter makes reading difficult</li>
                                                    <li>• No "save for later" feature in existing apps</li>
                                                    <li>• Toxic comment sections</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Takewang Dorji */}
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                                                <img
                                                    src={takewangDorji}
                                                    alt="Takewang Dorji"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg">Takewang Dorji</h4>
                                                <p className="text-gray-600 mb-2">News Editor, 34</p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Editor</span>
                                                    <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Time-Pressed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h5 className="font-semibold text-gray-700 mb-2">Goals:</h5>
                                                <ul className="text-gray-600 text-sm space-y-1">
                                                    <li>• Publish articles fast & easily</li>
                                                    <li>• Upload images without issues</li>
                                                    <li>• Track pending comments efficiently</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-gray-700 mb-2">Pain Points:</h5>
                                                <ul className="text-gray-600 text-sm space-y-1">
                                                    <li>• Complex dashboards are confusing</li>
                                                    <li>• Image upload failures delay workflow</li>
                                                    <li>• Hard to edit posts in existing systems</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Research Methodology & Findings</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-blue-50 p-6 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-2">Online Surveys</h4>
                                        <p className="text-gray-600">100+ respondents</p>
                                        <div className="mt-4">
                                            <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                                            <p className="text-sm text-gray-600">68% of users abandon expense tracking after 2 weeks</p>
                                        </div>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-2">User Interviews</h4>
                                        <p className="text-gray-600">12 in-depth interviews</p>
                                        <div className="mt-4">
                                            <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                                            <p className="text-sm text-gray-600">Users want quick entry with minimal taps</p>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 p-6 rounded-xl">
                                        <h4 className="font-bold text-gray-900 mb-2">Competitive Analysis</h4>
                                        <p className="text-gray-600">5 competing apps analyzed</p>
                                        <div className="mt-4">
                                            <p className="text-sm font-semibold text-gray-700">Key Finding:</p>
                                            <p className="text-sm text-gray-600">Visual clarity differentiates successful apps</p>
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
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Concepts & Layout Exploration</h3>
                                <p className="text-gray-600">
                                    Started with low-fidelity wireframes to establish information architecture and user flows before visual design.
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
                                        Focused layout with key financial metrics and quick actions
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-4">Report Screen Wireframe</h4>
                                    <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                                        <img
                                            src={wireframe2}
                                            alt="Report Screen Wireframe"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 mt-4">
                                        Clear visualization of expense categories and spending patterns
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-white rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-3">Wireframe Key Decisions</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Hierarchy:</strong> Prioritized balance display as primary visual element</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Navigation:</strong> Bottom navigation for quick access to main sections</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>Information Architecture:</strong> Grouped related features logically</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                        <span><strong>User Flow:</strong> Minimized steps for common actions like adding expenses</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 5. High-Fidelity Designs */}
                    <section id="design" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <FaPaintBrush className="text-green-600 text-xl" />
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
                                                alt="ExpenseMate Dashboard"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            Clean dashboard showing key financial metrics and recent activity
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-4">Financial Report Screen</h4>
                                        <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                                            <img
                                                src={reportScreen}
                                                alt="Financial Report Screen"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            Detailed expense report with category breakdown and filtering options
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-4">Add Expense</h4>
                                        <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                                            <img
                                                src={addExpenseScreen}
                                                alt="Add Expense Screen"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            Quick expense entry with category selection
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-4">Transactions</h4>
                                        <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                                            <img
                                                src={transactionScreen}
                                                alt="Transactions Screen"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            List view of all transactions with filters
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-4">Profile Screen</h4>
                                        <div className="aspect-[9/16] rounded-lg border-2 border-gray-300 overflow-hidden">
                                            <img
                                                src={profileScreen}
                                                alt="Profile Screen"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            User profile and account settings
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">Design System</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h5 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                                            <FaPalette className="text-blue-600" />
                                            Color System
                                        </h5>
                                        <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden p-4">
                                            <div className="grid grid-cols-3 gap-3 h-full">
                                              
                                                <div className="flex flex-col gap-2">
                                                    <div className="h-8 rounded-md bg-gradient-to-r from-blue-600 to-purple-600"></div>
                                                    <div className="h-8 rounded-md bg-blue-600"></div>
                                                    <div className="h-8 rounded-md bg-purple-600"></div>
                                                    <p className="text-xs font-medium mt-2">Primary</p>
                                                </div>

                                         
                                                <div className="flex flex-col gap-2">
                                                    <div className="h-8 rounded-md bg-gray-900"></div>
                                                    <div className="h-8 rounded-md bg-gray-700"></div>
                                                    <div className="h-8 rounded-md bg-gray-500"></div>
                                                    <p className="text-xs font-medium mt-2">Neutral</p>
                                                </div>

                                          
                                                <div className="flex flex-col gap-2">
                                                    <div className="h-8 rounded-md bg-emerald-500"></div>
                                                    <div className="h-8 rounded-md bg-amber-500"></div>
                                                    <div className="h-8 rounded-md bg-red-500"></div>
                                                    <p className="text-xs font-medium mt-2">Semantic</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            Professional blue/purple theme with clear visual hierarchy
                                        </p>
                                    </div>


                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h5 className="font-semibold text-gray-700 mb-4">Typography</h5>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">Inter Bold</div>
                                                <p className="text-xs text-gray-500">Headings & important text</p>
                                            </div>
                                            <div>
                                                <div className="text-lg font-medium text-gray-900">Inter Medium</div>
                                                <p className="text-xs text-gray-500">Subheadings & buttons</p>
                                            </div>
                                            <div>
                                                <div className="text-base text-gray-900">Inter Regular</div>
                                                <p className="text-xs text-gray-500">Body text</p>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600">Inter Regular</div>
                                                <p className="text-xs text-gray-500">Captions & labels</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h5 className="font-semibold text-gray-700 mb-4">Onboarding Flow</h5>
                                        <div className="aspect-square rounded-lg border-2 border-gray-300 overflow-hidden p-4">
                                            <div className="grid grid-cols-2 gap-3 h-full">

                                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mb-2">1</div>
                                                    <p className="text-xs font-medium text-gray-800">Welcome</p>
                                                    <p className="text-[10px] text-gray-600 mt-1">Introduction screen</p>
                                                </div>


                                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-2">2</div>
                                                    <p className="text-xs font-medium text-gray-800">Setup</p>
                                                    <p className="text-[10px] text-gray-600 mt-1">Account configuration</p>
                                                </div>


                                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3">
                                                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mb-2">3</div>
                                                    <p className="text-xs font-medium text-gray-800">Preferences</p>
                                                    <p className="text-[10px] text-gray-600 mt-1">Customize settings</p>
                                                </div>


                                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3">
                                                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-2">4</div>
                                                    <p className="text-xs font-medium text-gray-800">Complete</p>
                                                    <p className="text-[10px] text-gray-600 mt-1">Ready to use</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4">
                                            Guided onboarding experience for new users
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. Prototype */}
                    <section id="prototype" className="mb-20 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                                <FaCode className="text-indigo-600 text-xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Interactive Prototype</h2>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Figma Prototype Features</h3>
                                <p className="text-gray-600">
                                    The interactive prototype includes complete user flows with realistic interactions and transitions, allowing for comprehensive usability testing.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <h4 className="font-bold text-gray-900 mb-4">User Flows Included</h4>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span>Onboarding and initial setup</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span>Adding new expenses with categories</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span>Viewing and filtering financial reports</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span>Editing and deleting transactions</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span>Setting budgets and financial goals</span>
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
                                            Complete user journey from onboarding to expense tracking
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
                                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                                                        <FaDollarSign className="text-white text-2xl" />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-gray-900">ExpenseMate</h3>
                                                    <p className="text-gray-600 mt-2">Interactive Prototype</p>
                                                </div>
                                                <a
                                                    href="https://www.figma.com/proto/LIsLK7pEhCWcv1SqsZNYhz/ExpenseMate"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
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
                                    href="https://www.figma.com/proto/LIsLK7pEhCWcv1SqsZNYhz/ExpenseMate"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
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
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                <FaTools className="text-orange-600 text-xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Iterations & Design Rationale</h2>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Iterations Based on User Testing</h3>

                                <div className="space-y-6">
                                    <div className="border-l-4 border-blue-500 pl-6 py-2">
                                        <h4 className="font-bold text-gray-900 mb-2">Iteration 1: Dashboard Information Hierarchy</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                                                <p className="text-sm text-gray-600">Multiple metrics competing for attention</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                                                <p className="text-sm text-gray-600">Clear visual hierarchy with primary focus on balance</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            <strong>Rationale:</strong> Users needed to see their current balance first, then drill down into details
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-green-500 pl-6 py-2">
                                        <h4 className="font-bold text-gray-900 mb-2">Iteration 2: Expense Entry Flow</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                                                <p className="text-sm text-gray-600">Multi-step form with 6 required fields</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                                                <p className="text-sm text-gray-600">Quick-add with smart defaults and 2 required fields</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            <strong>Rationale:</strong> Reduced cognitive load and increased completion rate from 65% to 94%
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-purple-500 pl-6 py-2">
                                        <h4 className="font-bold text-gray-900 mb-2">Iteration 3: Report Visualization</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 mb-1">Before:</p>
                                                <p className="text-sm text-gray-600">Complex charts with technical terminology</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-700 mb-1">After:</p>
                                                <p className="text-sm text-gray-600">Simple bar charts with clear category labels</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            <strong>Rationale:</strong> Users wanted quick insights, not detailed financial analysis
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">Design Rationale Summary</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/70 p-4 rounded-lg">
                                        <h5 className="font-semibold text-gray-700 mb-2">User-Centered Design</h5>
                                        <p className="text-sm text-gray-600">
                                            All design decisions were validated through user testing and feedback sessions
                                        </p>
                                    </div>
                                    <div className="bg-white/70 p-4 rounded-lg">
                                        <h5 className="font-semibold text-gray-700 mb-2">Accessibility First</h5>
                                        <p className="text-sm text-gray-600">
                                            Designed with WCAG 2.1 AA standards, ensuring usability for all users
                                        </p>
                                    </div>
                                    <div className="bg-white/70 p-4 rounded-lg">
                                        <h5 className="font-semibold text-gray-700 mb-2">Performance Considerations</h5>
                                        <p className="text-sm text-gray-600">
                                            Optimized for mobile performance with minimal data usage requirements
                                        </p>
                                    </div>
                                    <div className="bg-white/70 p-4 rounded-lg">
                                        <h5 className="font-semibold text-gray-700 mb-2">Consistency & Scalability</h5>
                                        <p className="text-sm text-gray-600">
                                            Created a design system that ensures consistency and allows for future features
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
                                                <span>Early and frequent user testing prevented major redesigns</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span>Creating a design system early saved time in later stages</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span>Clear success metrics helped prioritize features</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-3">Areas for Improvement</h4>
                                        <ul className="space-y-3 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                                                <span>Could have involved developers earlier for technical feasibility</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                                                <span>More diverse user testing across different demographics</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                                                <span>Better documentation of design decisions throughout the process</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                                <h4 className="font-bold text-gray-900 mb-6">Impact & Results</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
                                        <p className="text-gray-700">User Satisfaction</p>
                                        <p className="text-sm text-gray-500">Based on post-testing surveys</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">88%</div>
                                        <p className="text-gray-700">Task Success Rate</p>
                                        <p className="text-sm text-gray-500">For primary user tasks</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600 mb-2">4.7/5</div>
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
                                            Predictive spending patterns and personalized savings recommendations
                                        </p>
                                    </div>
                                    <div className="bg-white/70 p-4 rounded-lg">
                                        <h5 className="font-semibold text-gray-700 mb-2">Social Features</h5>
                                        <p className="text-sm text-gray-600">
                                            Shared budgeting with family members and spending comparisons
                                        </p>
                                    </div>
                                    <div className="bg-white/70 p-4 rounded-lg">
                                        <h5 className="font-semibold text-gray-700 mb-2">Integration</h5>
                                        <p className="text-sm text-gray-600">
                                            Bank connectivity for automatic transaction import
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

export default ExpenseMateCaseStudy;