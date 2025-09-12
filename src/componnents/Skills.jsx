import React from 'react';
import Bgone from "../assets/bg_one.png";
import Bgtwo from "../assets/bg_two.png";
import Bgthree from "../assets/bg_three.png";

function Skills() {
  // Your skills with icons
  const skills = [
    { name: "HTML", icon: "🛠️" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Bootstrap", icon: "💎" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Shopify", icon: "🛒" },
    { name: "React", icon: "⚛️" },
    { name: "jQuery", icon: "🔗" },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating background images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Floating image 1 */}
        <img 
                 src={Bgone} 
                 alt="Space background" 
                 className="absolute opacity-20 animate-float-slow"
                 style={{
                   top: '10%',
                   left: '5%',
                   width: '150px',
                   transform: 'rotate(15deg)',
                 }}
               />
               
               {/* Floating image 2 */}
               <img 
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
               
               {/* Floating image 3 */}
               <img 
                 src={Bgthree} 
                 alt="Space background" 
                 className="absolute opacity-25 animate-float-slow"
                 style={{
                   top: '30%',
                   right: '5%',
                   width: '180px',
                   transform: 'rotate(5deg)',
                 }}
               />
       
               <img 
                 src={Bgtwo} 
                 alt="Space background" 
                 className="absolute opacity-20 animate-float-slow"
                 style={{
                   top: '40%',
                   left: '5%',
                   width: '150px',
                   transform: 'rotate(15deg)',
                 }}
               />
       
                <img 
                 src={Bgone} 
                 alt="Space background" 
                 className="absolute opacity-20 animate-float-slow"
                 style={{
                   top: '40%',
                   left: '50%',
                   width: '150px',
                   transform: 'rotate(15deg)',
                 }}
               />
       
               {/* Floating image 3 */}
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
               />
        
        {/* Additional floating stars */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-xl text-gray-300">Technologies I use to create amazing web experiences</p>
         
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-opacity-20  cursor-pointer border border-white rounded-xl p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mb-4 text-3xl">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
        
        {/* Skills summary */}
        <div className="mt-16 bg-opacity-20  border border-white rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white text-center mb-6">Skills Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg border border-white cursor-pointer bg-opacity-50">
              <div className="text-3xl mb-2">🛠️</div>
              <h4 className="text-white font-medium">Frontend</h4>
              <p className="text-gray-400 text-sm">HTML, CSS, JS</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-white   cursor-pointer bg-opacity-50">
              <div className="text-3xl mb-2">⚛️</div>
              <h4 className="text-white font-medium">Frameworks</h4>
              <p className="text-gray-400 text-sm">React, jQuery</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-white   cursor-pointer bg-opacity-50">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="text-white font-medium">CSS Frameworks</h4>
              <p className="text-gray-400 text-sm">Bootstrap, Tailwind</p>
            </div>
            <div className="text-center p-4 rounded-lg border border-white   cursor-pointer bg-opacity-50">
              <div className="text-3xl mb-2">🛒</div>
              <h4 className="text-white font-medium">E-commerce</h4>
              <p className="text-gray-400 text-sm">Shopify</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations for floating images */}
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
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Skills;