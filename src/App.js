import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UXPortfolio from './components/UXPortfolio'; // Replace AcademicProjects with this
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <div className="pt-16">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <UXPortfolio />
          <Projects />

          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;