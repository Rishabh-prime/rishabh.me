import React from 'react';
import AboutMe from "../assets/About.jpg";
import Abouthii from "../assets/about_two.png";

function About() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Single centered content card */}
        <div className="relative  rounded-3xl p-8 md:p-12">
          {/* Cut corner effect */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-transparent">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent via-transparent to-white/10 rounded-bl-3xl transform rotate-45 origin-top-right"></div>
          </div>
          
          {/* Intro Section with aligned text & rounded image */}
          <div className="intro mb-8 relative">
            <div className="flex flex-row items-center gap-4 mb-6">
              

              {/* Intro text */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Hii Rishabh Here
              </h1>

              {/* Profile image first */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden">
                  <img 
                    src={AboutMe} 
                    alt="Rishabh" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="w-40 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
          </div>

          {/* Content Layout - Profile image (left) + text (right) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
           

            {/* About Text */}
            <div className="flex-1 about text-white/90 leading-relaxed text-lg space-y-4">
              <p>
                My name is <span className="text-white font-semibold">Rishabh Rajendar Thakur</span>. In addition to being a web developer, my interests include anime, cricket, and sketching.
              </p>
              <p>
                I'm an anime enthusiast that is eager to savor every second of life.
              </p>
              <p>
                I love cricket, and I'm prepared to take on life's curve-balls.
              </p>
              <p>
                As a sketch artist, I think it's important to sketch my own destiny.
              </p>
              <p className="italic text-white/80">
                Life is similar to asynchronous coding as there are instances when you must use async and wait for a solution.
              </p>
            </div>

             {/* Profile Image with centered orbital animation */}
            <div className="flex-shrink-0 relative">
              <div className="relative group">
                {/* Image container without border or background */}
                <div className="relative rounded-3xl">
                  <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden">
                    <img 
                      src={Abouthii} 
                      alt="Rishabh Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Orbit animation centered */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/10 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/10 rounded-full animate-reverse-spin"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default About;
