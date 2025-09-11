import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'} border-b border-white/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-white text-2xl font-bold font-raleway z-50">
              Rishabh
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              <a
                href="#about"
                className="nav-link"
              >
                <span>About</span>
              </a>

              <a 
                href="#experience" 
                className="nav-link"
              >
                <span>Experience</span>
              </a>
              
              <a 
                href="#skills" 
                className="nav-link"
              >
                <span>Skills</span>
              </a>
              
              <a 
                href="#projects" 
                className="nav-link"
              >
                <span>Projects</span>
              </a>
              
              <a 
                href="#contact" 
                className="nav-link"
              >
                <span>Contact</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 mt-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1 mt-1'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden fixed inset-0 bg-black backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              <a 
                href="#about" 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span>About</span>
              </a>
              
              <a 
                href="#experience" 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span>Experience</span>
              </a>
              
              <a 
                href="#skills" 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span>Skills</span>
              </a>
              
              <a 
                href="#projects" 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span>Projects</span>
              </a>
              
              <a 
                href="#contact" 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                <span>Contact</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <style jsx>{`
        .nav-link {
          color: white;
          font-family: 'Nunito', sans-serif;
          padding: 0.5rem 1rem;
          position: relative;
          overflow: hidden;
          display: inline-block;
        }
        
        .nav-link span {
          position: relative;
          z-index: 10;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 0.375rem;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.5s ease;
          transform: scale(0.95);
          z-index: 1;
        }
        
        .nav-link:hover::before {
          opacity: 1;
          border-color: white;
          transform: scale(1.05);
          animation: borderAnimation 1.2s ease-in-out;
        }
        
        .mobile-nav-link {
          color: #ffffffff;
          font-family: 'Nunito', sans-serif;
          font-size: 1.25rem;
          padding: 0.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          display: inline-block;
          font-weight: 600;
        }
        
        .mobile-nav-link span {
          position: relative;
          z-index: 10;
        }
        
        .mobile-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-radius: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.5s ease;
          transform: scale(0.95);
          z-index: 1;
        }
        
        .mobile-nav-link:hover::before {
          opacity: 1;
          border-color: #fafcffff;
          transform: scale(1.05);
          animation: borderAnimation 1.2s ease-in-out;
        }
        
        @keyframes borderAnimation {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          }
          50% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Header;