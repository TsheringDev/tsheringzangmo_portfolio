import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import UXPortfolio from './components/UXPortfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Import case study components
import ExpenseMateCaseStudy from './components/CaseStudies/ExpenseMateCaseStudy';
import FitBoostCaseStudy from './components/CaseStudies/FitBoostCaseStudy';
import VetConnectCaseStudy from './components/CaseStudies/VetConnectCaseStudy';
import './App.css';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white">
        <div className="pt-16">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Individual Case Study Routes */}
            <Route path="/case-study/expensemate" element={<ExpenseMateCaseStudy />} />
            <Route path="/case-study/fitboost" element={<FitBoostCaseStudy />} />
            <Route path="/case-study/vetconnect" element={<VetConnectCaseStudy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;