import React from 'react';

function About() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Left L-shape Column */}
          <div className="flex flex-col justify-between md:w-1/2 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-white"></div>

            {/* Text */}
            <div className="pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Us
              </h2>
              <p className="text-white mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-white mb-4 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-white leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
              </p>
            </div>

            {/* Horizontal Line (bottom part of L) */}
            <div className="w-full h-1 bg-white  mt-8"></div>
          </div>

          {/* Image on Right */}
          <div className="md:w-1/2 flex items-start ">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="About us" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
