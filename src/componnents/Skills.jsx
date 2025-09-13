import React, { useState } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaBootstrap, 
  FaReact, 
  FaShopify 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiJquery 
} from 'react-icons/si';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Skills with professional icons from react-icons
  const skills = [
    { 
      name: "HTML5", 
      icon: <FaHtml5 />, 
      category: "core",
      level: 90,
      color: "text-orange-500"
    },
    { 
      name: "CSS3", 
      icon: <FaCss3Alt />, 
      category: "core",
      level: 85,
      color: "text-blue-500"
    },
    { 
      name: "JavaScript", 
      icon: <FaJs />, 
      category: "core",
      level: 88,
      color: "text-yellow-500"
    },
    { 
      name: "React", 
      icon: <FaReact />, 
      category: "framework",
      level: 82,
      color: "text-cyan-500"
    },
    { 
      name: "Bootstrap", 
      icon: <FaBootstrap />, 
      category: "framework",
      level: 90,
      color: "text-purple-500"
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss />, 
      category: "framework",
      level: 85,
      color: "text-teal-500"
    },
    { 
      name: "jQuery", 
      icon: <SiJquery />, 
      category: "library",
      level: 80,
      color: "text-blue-600"
    },
    { 
      name: "Shopify", 
      icon: <FaShopify />, 
      category: "platform",
      level: 75,
      color: "text-green-500"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', count: skills.length },
    { id: 'core', name: 'Core Web', count: skills.filter(s => s.category === 'core').length },
    { id: 'framework', name: 'Frameworks', count: skills.filter(s => s.category === 'framework').length },
    { id: 'library', name: 'Libraries', count: skills.filter(s => s.category === 'library').length },
    { id: 'platform', name: 'Platforms', count: skills.filter(s => s.category === 'platform').length }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            My expertise across different technologies and frameworks
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full border transition-all duration-300 text-sm md:text-base font-medium ${
                activeCategory === category.id
                  ? 'bg-white text-black border-white'
                  : 'text-white border-white hover:bg-white hover:text-black'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs bg-gray-600 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-6 md:space-y-8">
          
          {/* Hexagon Grid Layout */}
          <div className="hidden lg:block">
            <div className="relative flex justify-center">
              <div className="grid grid-cols-4 gap-20 max-w-4xl">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="relative group">
                    <div className="w-32 h-32  border-2 border-white transform  rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-white hover:scale-110">
                      <div className="flex flex-col items-center">
                        <div className={`text-3xl mb-2 ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <span className="text-white text-xs font-medium text-center">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                    
                    
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card Layout for Tablet */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="border border-white rounded-2xl p-6 hover:border-current transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <p className="text-gray-400 capitalize">{skill.category}</p>
                  </div>
                </div>
                
               
              </div>
            ))}
          </div>

          {/* Mobile Stack Layout */}
          <div className="md:hidden space-y-4">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="border border-white rounded-xl p-4 hover:bg-gray-900/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`text-2xl ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <p className="text-xs text-gray-400 capitalize">{skill.category}</p>
                    </div>
                  </div>
                 
                </div>
                
                
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

export default Skills;