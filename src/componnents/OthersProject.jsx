import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function OthersProject() {
  // Sample project data
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      github: "https://github.com/username/ecommerce-platform"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A productivity app for managing daily tasks and projects",
      github: "https://github.com/username/task-manager"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "Real-time weather information with forecasting capabilities",
      github: "https://github.com/username/weather-dashboard"
    },
    {
      id: 4,
      name: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time insights",
      github: "https://github.com/username/social-dashboard"
    },
    {
      id: 5,
      name: "Portfolio Website",
      description: "Personal portfolio website built with React and modern animations",
      github: "https://github.com/username/portfolio-website"
    }
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center lg:text-left">
          Other Projects
        </h2>
        
        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border border-white text-white rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-white bg-gray-800/50">
                  <th className="px-6 py-4 text-left font-semibold">Project Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Description</th>
                  <th className="px-6 py-4 text-left font-semibold">GitHub Link</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr 
                    key={project.id} 
                    className={`border-b border-white/20 hover:bg-gray-800/30 transition-colors duration-300 ${
                      index % 2 === 0 ? 'bg-gray-900/20' : 'bg-gray-800/10'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-lg">{project.name}</td>
                    <td className="px-6 py-4 text-gray-300 leading-relaxed">{project.description}</td>
                    <td className="px-6 py-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300 group"
                      >
                        <FiGithub className="mr-2 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline">View on GitHub</span>
                        <FiExternalLink className="ml-1 text-sm opacity-60 group-hover:opacity-100" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <div className="overflow-x-auto">
            <table className="w-full border border-white text-white rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-white bg-gray-800/50">
                  <th className="px-4 py-3 text-left font-semibold text-sm">Project</th>
                  <th className="px-4 py-3 text-left font-semibold text-sm">Description</th>
                  <th className="px-4 py-3 text-center font-semibold text-sm">Link</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr 
                    key={project.id} 
                    className={`border-b border-white/20 hover:bg-gray-800/30 transition-colors duration-300 ${
                      index % 2 === 0 ? 'bg-gray-900/20' : 'bg-gray-800/10'
                    }`}
                  >
                    <td className="px-4 py-4 font-medium">{project.name}</td>
                    <td className="px-4 py-4 text-gray-300 text-sm leading-relaxed">{project.description}</td>
                    <td className="px-4 py-4 text-center">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300 group"
                      >
                        <FiGithub className="text-xl group-hover:scale-110 transition-transform" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="border border-white rounded-lg p-4 bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white pr-2">
                  {project.name}
                </h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-blue-400 transition-colors duration-300 group flex-shrink-0"
                >
                  <FiGithub className="text-xl group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex justify-end">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-white hover:text-blue-400 transition-colors duration-300 group"
                >
                  <span className="group-hover:underline">View on GitHub</span>
                  <FiExternalLink className="ml-1 text-xs opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default OthersProject;