import React from 'react';
import Bgone from "../assets/bg_one.png";
import Bgtwo from "../assets/bg_two.png";
import Bgthree from "../assets/bg_three.png";

function Footer() {
  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/yourusername"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: "https://linkedin.com/in/yourusername"
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: "https://instagram.com/yourusername"
    },
    {
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      url: "https://twitter.com/yourusername"
    },
    {
      name: "LeetCode",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92h-2.874l-.022.021c-.041.04-.082.08-.122.121l-.021.021v2.874c0 .781-.625 1.406-1.406 1.406-.781 0-1.406-.625-1.406-1.406v-3.723c0-.312.125-.586.344-.805l3.723-3.723c.219-.219.493-.344.805-.344.312 0 .586.125.805.344.219.219.344.493.344.805v6.246c0 .781-.625 1.406-1.406 1.406-.781 0-1.406-.625-1.406-1.406v-2.281h-1.406v2.281c0 1.406 1.125 2.531 2.531 2.531 1.406 0 2.531-1.125 2.531-2.531v-6.246c0-.781-.312-1.5-.875-2.062-.562-.563-1.281-.875-2.062-.875s-1.5.312-2.062.875l-3.723 3.723c-.563.563-.875 1.281-.875 2.062v3.723c0 1.406 1.125 2.531 2.531 2.531 1.406 0 2.531-1.125 2.531-2.531v-1.406h4.219v1.406c0 1.406 1.125 2.531 2.531 2.531s2.531-1.125 2.531-2.531v-6.246c0-1.406-1.125-2.531-2.531-2.531s-2.531 1.125-2.531 2.531v2.281z"/>
        </svg>
      ),
      url: "https://leetcode.com/yourusername"
    }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-700 py-12">
      {/* Floating background images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Floating image 1 */}
        <img 
          src={Bgone} 
          alt="Space background" 
          className="absolute opacity-15 animate-float-slow"
          style={{
            top: '20%',
            left: '10%',
            width: '80px',
            transform: 'rotate(15deg)',
          }}
        />
        
        {/* Floating image 2 */}
        <img 
          src={Bgtwo} 
          alt="Space background" 
          className="absolute opacity-20 animate-float-medium"
          style={{
            top: '60%',
            right: '15%',
            width: '70px',
            transform: 'rotate(-10deg)',
          }}
        />
        
        {/* Floating image 3 */}
        <img 
          src={Bgthree} 
          alt="Space background" 
          className="absolute opacity-15 animate-float-slow"
          style={{
            top: '40%',
            right: '10%',
            width: '90px',
            transform: 'rotate(5deg)',
          }}
        />
        
        {/* Additional floating stars */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white rounded-sm  flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              Made with <span className="text-red-500">❤</span> in the cosmos
            </p>
            {/* <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()}Rishabh. All rights reserved.
            </p> */}
          </div>

          {/* Back to top button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 flex items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="mr-2">Back to top</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add custom animations for floating images */}
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes float-medium {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 10s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;