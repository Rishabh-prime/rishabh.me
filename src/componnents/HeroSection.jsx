import React, { useState, useEffect } from "react";

import Astronot from "../assets/Astronot.gif";
import Rocket from "../assets/Rocket.gif";
import Ufo from "../assets/Ufo.gif";

function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isRocketCaught, setIsRocketCaught] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const fullText = "Hey! I am Rishabh,\nI am a Web Developer";

  // Detect screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Handle rocket click
  const handleRocketClick = () => {
    setIsRocketCaught(true);
    setShowDialog(true);
  };

  // Handle dialog close
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  // Function to render text with line breaks
  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Shooting Stars - responsive positioning */}
      <div
        className={`absolute ${
          isMobile ? "top-1/4 right-1/4" : "top-0 right-40"
        } w-0.5 h-0.5 bg-white rounded-xl shadow-lg animate-shootingStar`}
      ></div>
      <div
        className={`absolute ${
          isMobile ? "top-1/2 right-1/2" : "top-50 right-50"
        } w-0.5 h-0.5 bg-white rounded-xl shadow-lg animate-shootingStar1`}
      ></div>
      <div
        className={`absolute ${
          isMobile ? "top-1/3 right-2/3" : "top-30 right-60"
        } w-0.5 h-0.5 bg-white rounded-xl shadow-lg animate-shootingStar2`}
      ></div>
      <div
        className={`absolute ${
          isMobile ? "top-3/4 right-0" : "top-80 right-0"
        } w-0.5 h-0.5 bg-white rounded-xl shadow-lg animate-shootingStar3`}
      ></div>
      <div
        className={`absolute ${
          isMobile ? "top-1/5 right-0" : "top-20 right-0"
        } w-0.5 h-0.5 bg-white rounded-xl shadow-lg animate-shootingStar4`}
      ></div>
      <div
        className={`absolute ${
          isMobile ? "top-2/3 right-0" : "top-60 right-0"
        } w-0.5 h-0.5 bg-white rounded-xl shadow-lg animate-shootingStar5`}
      ></div>

     {!isRocketCaught && (
  <div 
    className="absolute w-24 h-24 cursor-pointer animate-heroTravel z-20" // increased from w-16 h-16
    onClick={handleRocketClick}
    style={{ top: '10%', left: '10%' }}
  >
    {/* Dialogue box - size unchanged */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2  text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md border border-gray-300">
      Catch me!
    </div>

    <img 
      src={Rocket} 
      alt="Traveling Rocket" 
      className="w-full h-full object-contain hover:scale-110 transition-transform duration-200"
    />
  </div>
)}


      {/* Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-2xl border border-gray-600 max-w-sm mx-4">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              🚀 Caught!
            </h3>
            <p className="text-gray-300 text-center mb-6">
              Oops! You caught me!
            </p>
            <button
              onClick={handleDialogClose}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[200px] flex items-center justify-center">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
            style={{
              WebkitTextStroke: "2px white",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
          >
            {renderTextWithLineBreaks(displayedText)}
            <span className="animate-pulse ml-1 text-white text-sm">|</span>
          </span>
        </h1>

        {/* Additional glow effect */}
        <div className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[200px] flex items-center justify-center opacity-20 blur-sm">
          <span className="text-white">
            {renderTextWithLineBreaks(displayedText)}
          </span>
        </div>
      </div>

      {/* Add the animation keyframes via style tag */}
      <style>
        {`
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0) scale(2);
            opacity: 0;
          }
          1% {
            opacity: 0;
          }
          5%{
            opacity:0.5
          }
          20% {
            opacity: 1;
          }
          25% {
            opacity: 1;
          }30% {
            opacity: 1;
          }35% {
            opacity: 1;
          }40% {
            opacity: 1;
          }
          100% {
            transform: translate(-100vw, 100vh) scale(0.2);
            opacity: 0;
          }
        }

        @keyframes heroTravel {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(70vw, 20vh) rotate(90deg);
          }
          50% {
            transform: translate(60vw, 60vh) rotate(180deg);
          }
          75% {
            transform: translate(10vw, 70vh) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        /* Each star has same duration but different delay */
        .animate-shootingStar {
          animation: shootingStar 5s linear infinite;
          animation-delay: 0s;
        }

        .animate-shootingStar1 {
          animation: shootingStar 5s linear infinite;
          animation-delay: 2s;
        }

        .animate-shootingStar2 {
          animation: shootingStar 5s linear infinite;
          animation-delay: 4s;
        }
        
        .animate-shootingStar3 {
          animation: shootingStar 5s linear infinite;
          animation-delay: 6s;
        }
        
        .animate-shootingStar4 {
          animation: shootingStar 5s linear infinite;
          animation-delay: 8s;
        }
        
        .animate-shootingStar5 {
          animation: shootingStar 5s linear infinite;
          animation-delay: 10s;
        }

        /* Hero travel animation for rocket */
        .animate-heroTravel {
          animation: heroTravel 8s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
}

export default HeroSection;