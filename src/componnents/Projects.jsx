import React, { useState, useEffect } from 'react';
import Bgone from "../assets/bg_one.png";
import Bgtwo from "../assets/bg_two.png";
import Bgthree from "../assets/bg_three.png";

function Projects() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Array of project objects with links
  const projects = [
    {
      id: 1,
      name: "Stellar Explorer",
      description: "Interactive 3D visualization of our solar system with detailed planetary information.",
      techStack: ["React", "Three.js", "WebGL", "Node.js"],
      demoLink: "https://example.com/stellar-explorer",
      sourceLink: "https://github.com/example/stellar-explorer"
    },
    {
      id: 2,
      name: "Nebula Analytics",
      description: "Data visualization platform for astronomical research with real-time data processing.",
      techStack: ["Python", "D3.js", "MongoDB", "Flask"],
      demoLink: "https://example.com/nebula-analytics",
      sourceLink: "https://github.com/example/nebula-analytics"
    },
    {
      id: 3,
      name: "Cosmic Travel Planner",
      description: "Theoretical space travel itinerary planner using current astrophysics research.",
      techStack: ["JavaScript", "Vue", "Firebase", "CSS3"],
      demoLink: "", // Empty link for testing
      sourceLink: "https://github.com/example/cosmic-travel"
    },
    {
      id: 4,
      name: "Galaxy Classifier",
      description: "Machine learning application that classifies galaxy types from telescope imagery.",
      techStack: ["TensorFlow", "Python", "OpenCV", "FastAPI"],
      demoLink: "https://example.com/galaxy-classifier",
      sourceLink: "https://github.com/example/galaxy-classifier"
    },
    {
      id: 5,
      name: "Orbit Tracker",
      description: "Real-time satellite and space debris tracking system with collision prediction.",
      techStack: ["React", "WebSockets", "Python", "PostGIS"],
      demoLink: "https://example.com/orbit-tracker",
      sourceLink: "" // Empty link for testing
    },
    {
      id: 6,
      name: "Space Weather Dashboard",
      description: "Monitoring solar flares, radiation levels and other space weather phenomena.",
      techStack: ["React", "Chart.js", "NASA API", "Tailwind CSS"],
      demoLink: "https://example.com/space-weather",
      sourceLink: "https://github.com/example/space-weather"
    },
    {
      id: 7,
      name: "Exoplanet Database",
      description: "Searchable catalog of known exoplanets with detailed characteristics and discovery info.",
      techStack: ["Next.js", "GraphQL", "PostgreSQL", "Apollo"],
      demoLink: "https://example.com/exoplanet-db",
      sourceLink: "https://github.com/example/exoplanet-db"
    },
    {
      id: 8,
      name: "Lunar Habitat Simulator",
      description: "VR simulation of lunar living conditions with resource management systems.",
      techStack: ["Unity", "C#", "SteamVR", "Blender"],
      demoLink: "https://example.com/lunar-habitat",
      sourceLink: "https://github.com/example/lunar-habitat"
    },
    {
      id: 9,
      name: "Astro Photography Suite",
      description: "Image processing toolkit for enhancing and analyzing astronomical photographs.",
      techStack: ["Python", "OpenCV", "PyQT", "NumPy"],
      demoLink: "",
      sourceLink: "https://github.com/example/astro-photo"
    },
  ];

  const handleLinkClick = (link, type) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      setNotificationMessage(`No ${type} link available for this project`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 bg-gray-800 text-white border border-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
          {notificationMessage}
        </div>
      )}
      
      {/* Orbital Animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Large Outer Orbit */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-large">
            <div className="orbit-dot orbit-dot-1"></div>
          </div>
        </div>
        
        {/* Medium Orbit */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-medium">
            <div className="orbit-dot orbit-dot-2"></div>
            <div className="orbit-dot orbit-dot-3"></div>
          </div>
        </div>
        
        {/* Small Inner Orbit */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-small">
            <div className="orbit-dot orbit-dot-4"></div>
            <div className="orbit-dot orbit-dot-5"></div>
            <div className="orbit-dot orbit-dot-6"></div>
          </div>
        </div>
        
        {/* Additional offset orbits */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-mini">
            <div className="orbit-dot orbit-dot-7"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <div className="orbit-mini-reverse">
            <div className="orbit-dot orbit-dot-8"></div>
          </div>
        </div>
      </div>
      
      {/* Floating background images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Floating image 1 */}
        {/* <img 
          src={Bgone} 
          alt="Space background" 
          className="absolute opacity-20 animate-float-slow"
          style={{
            top: '10%',
            left: '5%',
            width: '150px',
            transform: 'rotate(15deg)',
          }}
        /> */}
        
        {/* Floating image 2 */}
        {/* <img 
          src={Bgtwo} 
          alt="Space background" 
          className="absolute opacity-30 animate-float-medium"
          style={{
            top: '70%',
            right: '10%',
            width: '120px',
            transform: 'rotate(-10deg)',
          }}
        />
         */}
        {/* Floating image 3 */}
        {/* <img 
          src={Bgthree} 
          alt="Space background" 
          className="absolute opacity-25 animate-float-slow"
          style={{
            top: '30%',
            right: '5%',
            width: '180px',
            transform: 'rotate(5deg)',
          }}
        /> */}

        {/* <img 
          src={Bgtwo} 
          alt="Space background" 
          className="absolute opacity-20 animate-float-slow"
          style={{
            top: '40%',
            left: '5%',
            width: '150px',
            transform: 'rotate(15deg)',
          }}
        /> */}

         {/* <img 
          src={Bgone} 
          alt="Space background" 
          className="absolute opacity-20 animate-float-slow"
          style={{
            top: '40%',
            left: '50%',
            width: '150px',
            transform: 'rotate(15deg)',
          }}
        /> */}

        {/* Floating image 3
        <img 
          src={Bgthree} 
          alt="Space background" 
          className="absolute opacity-25 animate-float-slow"
          style={{
            top: '70%',
            right: '50%',
            width: '180px',
            transform: 'rotate(5deg)',
          }}
        /> */}
        
        
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Space Projects</h2>
          <p className="text-xl text-gray-300">Exploring the universe through code and innovation</p>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-opacity-20  border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-800 bg-opacity-50 text-sm text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleLinkClick(project.demoLink, 'demo')}
                  className="px-4 py-2 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Demo
                </button>
                <button 
                  onClick={() => handleLinkClick(project.sourceLink, 'source code')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>

      {/* Add custom animations for floating images and orbits */}
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes float-medium {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes orbit {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes orbit-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 8s ease-in-out infinite;
          }
          
          /* Orbit containers */
          .orbit-large {
            width: 800px;
            height: 800px;
            border: 2px solid rgba(147, 197, 253, 0.1);
            border-radius: 50%;
            position: relative;
            animation: orbit 60s linear infinite;
          }
          
          .orbit-medium {
            width: 500px;
            height: 500px;
            border: 2px solid rgba(168, 85, 247, 0.1);
            border-radius: 50%;
            position: relative;
            animation: orbit-reverse 40s linear infinite;
          }
          
          .orbit-small {
            width: 300px;
            height: 300px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            position: relative;
            animation: orbit 30s linear infinite;
          }
          
         
          
         
          /* Orbital dots/particles */
          .orbit-dot {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            top: -3px;
          }
          
          .orbit-dot-1 {
            background: rgba(147, 197, 253, 0.8);
            left: 50%;
            box-shadow: 0 0 10px rgba(147, 197, 253, 0.5);
          }
          
          .orbit-dot-2 {
            background: rgba(168, 85, 247, 0.8);
            left: 50%;
            box-shadow: 0 0 8px rgba(168, 85, 247, 0.5);
          }
          
          .orbit-dot-3 {
            background: rgba(168, 85, 247, 0.6);
            left: 50%;
            top: calc(100% - 3px);
            box-shadow: 0 0 6px rgba(168, 85, 247, 0.4);
          }
          
          .orbit-dot-4 {
            background: rgba(244, 246, 244, 0.8);
            left: 50%;
            box-shadow: 0 0 8px rgba(248, 252, 249, 0.5);
          }
          
          .orbit-dot-5 {
              background: rgba(244, 246, 244, 0.8);
            left: -3px;
            top: 50%;
              background: rgba(244, 246, 244, 0.8);;
          }
          
          .orbit-dot-6 {
           background: rgba(244, 246, 244, 0.8);
            left: calc(100% - 3px);
            top: 50%;
              background: rgba(244, 246, 244, 0.8);
          }
          
         
          
          
        `}
      </style>
    </div>
  );
}

export default Projects;