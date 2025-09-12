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
import Skills from './componnents/Skills'
import Footer from './componnents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StarsBackground/>
    <Header/>
    <HeroSection/>
    <About/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Footer/>
    </>
  )
}

export default App
