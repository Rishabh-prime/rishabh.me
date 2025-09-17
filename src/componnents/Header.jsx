import React, { useState, useEffect } from "react";
    import { useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Handle scroll event to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-gray-900/90 backdrop-blur-md shadow-2xl border-b border-white/10" 
            : "bg-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center py-5">
            {/* Logo with glow effect */}
            <div className="logo-container z-50">
              <div className="text-white text-3xl font-bold font-raleway tracking-wide">
                <a href="home">Rishabh</a>
              </div>
              <div className="logo-underline"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <a href="#about" className="nav-link">
                <span>About</span>
              </a>
              <a href="#experience" className="nav-link">
                <span>Experience</span>
              </a>
              <a href="#skills" className="nav-link">
                <span>Skills</span>
              </a>
              <a href="#projects" className="nav-link">
                <span>Projects</span>
              </a>
              <a href="#contact" className="nav-link">
                <span>Contact</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none z-50 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100 mt-1"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-0.5"
                      : "translate-y-1 mt-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-gray-900/95 backdrop-blur-md z-40 transform transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#about" className="mobile-nav-link" onClick={handleLinkClick}>About</a>
          <a href="#experience" className="mobile-nav-link" onClick={handleLinkClick}>Experience</a>
          <a href="#skills" className="mobile-nav-link" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" className="mobile-nav-link" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="mobile-nav-link" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>

      <style jsx>{`
        /* Logo Styles */
        .logo-container {
          position: relative;
          cursor:pointer
        }
        
        .logo-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ffffffff, #d2d2d2ff, #acacacff);
          transition: width 0.8s ease;
          
          animation: logoGlow 3s ease-in-out infinite alternate;
        }
        
        .logo-container:hover .logo-underline {
          width: 100%;
        }

        /* Navigation Links */
        .nav-link {
          color: rgba(255, 255, 255, 0.9);
          font-family: "Nunito", sans-serif;
          padding: 0.7rem 1.2rem;
          position: relative;
          overflow: hidden;
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0.5rem;
          font-weight: 500;
        }
        
        .nav-link span {
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }
        
        .nav-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 1;
          pointer-events: none;
        }
        
        .nav-link:hover::before {
          opacity: 1;
        }
        
        .nav-link:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
        }

        /* Enhanced Thread Animations */
        .thread-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          right: 5rem;
          animation: complexSwing 6s ease-in-out infinite;
          transform-origin: top center;
        }

        .thread-1 {
          animation-delay: 0s;
        }
        
        .thread-2 {
          animation-delay: -2s;
        }
        
        .thread-3 {
          animation-delay: -4s;
        }

        .thread-anchor {
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, white, rgba(255,255,255,0.5));
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255,255,255,0.8);
          animation: anchorPulse 2s ease-in-out infinite;
          margin-bottom: 4px;
        }

        .thread {
          width: 2px;
          height: 120px;
          background: linear-gradient(to bottom, 
            rgba(255,255,255,1) 0%, 
            rgba(255,255,255,0.9) 30%, 
            rgba(255,255,255,0.7) 60%,
            rgba(255,255,255,0.4) 80%,
            rgba(255,255,255,0.1) 100%);
          position: relative;
          border-radius: 1px;
          box-shadow: 0 0 4px rgba(255,255,255,0.3);
          animation: threadShimmer 3s ease-in-out infinite;
        }

        .thread-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: sparkleMove 4s ease-in-out infinite;
          box-shadow: 0 0 6px rgba(255,255,255,0.8);
        }

        .thread-btn {
          background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
          color: #1f2937;
          padding: 0.8rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          font-family: "Nunito", sans-serif;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.15),
            0 2px 4px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          margin-top: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          position: relative;
          z-index: 10;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .btn-icon {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .thread-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 15px 30px rgba(0, 0, 0, 0.25),
            0 5px 10px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .thread-btn:hover .btn-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .email-btn:hover {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        }

        .resume-btn:hover {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
        }

        .linkedin-btn:hover {
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
        }

        /* Mobile Navigation */
        .mobile-nav-link {
          color: white;
          font-family: "Nunito", sans-serif;
          font-size: 1.5rem;
          font-weight: 500;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }

        .mobile-nav-link:hover::before {
          left: 100%;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }

        /* Keyframe Animations */
        @keyframes complexSwing {
          0% {
            transform: rotate(-8deg) translateX(-2px);
          }
          25% {
            transform: rotate(4deg) translateX(1px);
          }
          50% {
            transform: rotate(8deg) translateX(2px);
          }
          75% {
            transform: rotate(-4deg) translateX(-1px);
          }
          100% {
            transform: rotate(-8deg) translateX(-2px);
          }
        }

        @keyframes anchorPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(255,255,255,0.8);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(255,255,255,1);
          }
        }

        @keyframes threadShimmer {
          0%, 100% {
            opacity: 0.8;
            box-shadow: 0 0 4px rgba(255,255,255,0.3);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 8px rgba(255,255,255,0.6);
          }
        }

        @keyframes sparkleMove {
          0% {
            top: 0;
            opacity: 0;
            transform: scale(0);
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            top: 100%;
            opacity: 0;
            transform: scale(0);
          }
        }

        @keyframes logoGlow {
          0% {
            box-shadow: 0 0 5px rgba(96, 165, 250, 0.3);
          }
          100% {
            box-shadow: 0 0 15px rgba(167, 139, 250, 0.6);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 767px) {
          .thread-container {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .thread-container {
            gap: 12px;
          }
          
          .thread {
            height: 100px;
          }
          
          .thread-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;