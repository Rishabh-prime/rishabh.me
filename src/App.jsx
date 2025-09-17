import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componnents/Header'
import HeroSection from './componnents/HeroSection'
import About from './componnents/About'
import StarsBackground from './componnents/StarsBackground'
import Experience from './componnents/Experience'
import Projects from './componnents/Projects'
import OthersProject from './componnents/OthersProject'
import Skills from './componnents/Skills'
import Footer from './componnents/Footer'


function App() {
  return (
    <>
      <StarsBackground />
      <Header />
      
      <section id="home">
 <HeroSection />
      </section>
     

      {/* Section IDs must match your href="#id" */}
      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
        <OthersProject/>
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
   <Footer />
      </section>
   
    </>
  );
}


export default App
