import React, { useState, useEffect, useRef } from "react";
import Astronot from "../assets/Ufo.gif";

function Experience() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [visibleStations, setVisibleStations] = useState(new Set());

  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);

  // Experience data - easily add more experiences here
  const experiences = [
 {
      id: 1,
      period: "Apr 2025 – Present",
      title: "Web Developer",
      company: "at Receptive Solutions",
      icon: "🛸",
      side: "right",
      glowColor: "bg-purple-400/20",
      achievements: [
        {
          text: "Built ",
          link: { text: "CoreReviews", url: "https://www.corereviews.com/" },
          text2: ", a company review platform enabling users to post reviews and comments while allowing companies to manage profiles, improving transparency and user engagement. (React.js, Tailwind CSS, Node.js, Supabase)",
        },
        {
          text: "Developed ",
          link: { text: "Fact Bulletin", url: "https://www.thefactbulletinnews.com/" },
          text2: ", a full-stack news platform with secure REST APIs and a role-based Admin Panel for publishing and managing articles. (React.js, Tailwind CSS, Node.js, PostgreSQL)",
        },
        {
          text: "Created the ",
          link: { text: "Receptive Solutions Company Website", url: "https://receptivesolutions.co.in/" },
          text2: " with secure authentication, review submissions, and a feedback system to enhance user interaction. (React.js, Tailwind CSS, Node.js, MongoDB)",
        },
      ],
    } ,
    {
      id: 2,
      period: "2024-2025",
      title: "Junior Frontend Developer",
      company: "at BioInnova",
      icon: "🛰️",
      side: "left",
      glowColor: "bg-blue-400/20",
      achievements: [
        {
          text: "Developed a wholesale e-commerce website: BioInnova Africa using HTML, CSS, JavaScript, and Bootstrap.",
        },
        {
          text: "Built a Shopify-based website: The Pure Craft.",
        },
        {
          text: "Also worked on a digital marketing website using React.js and GSAP, focusing on advanced animations and smooth interactions.",
        },
        {
          text: "Actively learning Firebase for backend services and enhancing skills in Search Engine Optimization (SEO).",
        },
      ],
    },
   
    // Add more experiences here in the future
  ];

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = sectionRef.current;
      if (!experienceSection) return;

      const rect = experienceSection.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrollTop = Math.min(
        Math.max(-rect.top, 0),
        sectionHeight - windowHeight
      );
      const progress = Math.min(
        Math.max(scrollTop / Math.max(sectionHeight - windowHeight, 1), 0),
        1
      );
      setScrollProgress(progress);

      // Detect scroll direction
      if (window.scrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY.current = window.scrollY;

      // Check which experience items are visible
      const experienceItems =
        experienceSection.querySelectorAll(".experience-item");
      const newVisibleStations = new Set();

      experienceItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top;
        const itemBottom = itemRect.bottom;

        // Station is visible if any part of the experience item is in the middle 60% of the viewport
        const viewportTop = windowHeight * 0.2;
        const viewportBottom = windowHeight * 0.8;

        if (itemBottom > viewportTop && itemTop < viewportBottom) {
          newVisibleStations.add(index);
        }
      });

      setVisibleStations(newVisibleStations);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate rocket position - travels on the right side of the vertical line (desktop only)
  const totalExperiences = experiences.length;
  const basePosition = 120; // Starting position from top
  const maxPosition = basePosition + totalExperiences * 300; // 300px spacing between experiences
  const rocketPosition =
    basePosition + scrollProgress * (maxPosition - basePosition);

  // Determine tilt angle based on scroll direction
  const rocketTilt = scrollDirection === "down" ? 15 : -15;

  // Rocket component
  const RocketComponent = () => (
    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-2xl">
      <div className="text-2xl md:text-3xl">
        <img src={Astronot} alt="Astronaut" className="w-full h-full object-contain" />
      </div>
    </div>
  );

  // Helper function to render achievement text with optional link
  const renderAchievementText = (achievement) => {
    if (achievement.link) {
      return (
        <>
          {achievement.text}
          <a 
            href={achievement.link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold underline hover:text-blue-300 transition-colors"
          >
            {achievement.link.text}
          </a>
          {achievement.text2}
        </>
      );
    }
    return achievement.text;
  };

  return (
    <div
      ref={sectionRef}
      id="experience-section"
      className="min-h-screen relative overflow-hidden"
    >
      <style>
        {`
          @keyframes floatRocket {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 relative z-10">
        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 text-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent px-4">
          My Experience Journey
        </h1>

        <div className="relative max-w-5xl mx-auto">
          {/* Central vertical line - only on desktop */}
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 w-1 bg-white shadow-sm"
            style={{ height: `${maxPosition + 350}px` }}
          ></div>

          {/* Rocket - positioned on the right side of the vertical line (desktop only) */}
          {/* <div
            className="hidden lg:block absolute z-30"
            style={{
              left: "calc(50% + 60px)", // 60px to the right of the center line
              top: `${rocketPosition}px`,
              transform: `rotate(${rocketTilt}deg)`,
              transition:
                "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), top 0.3s ease-out",
              animation: "floatRocket 3s ease-in-out infinite",
            }}
          >
            <RocketComponent />
          </div> */}

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-16 lg:space-y-24 pt-4 md:pt-8 lg:pt-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="experience-item"
              >
                {/* Desktop Layout (lg and above) */}
                <div className="hidden lg:flex lg:items-center" style={{ minHeight: "300px" }}>
                  {experience.side === "left" ? (
                    <>
                      {/* Left side content */}
                      <div className="w-1/2 pr-12">
                        <div className="border-1 border-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105">
                          <div className="text-sm text-white font-semibold mb-2">
                            {experience.period}
                          </div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-800">
                            {experience.title}
                          </h3>
                          <h4 className="text-xl text-gray-600 mb-6">
                            {experience.company}
                          </h4>
                          <ul className="space-y-4 text-gray-700">
                            {experience.achievements.map(
                              (achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="flex items-start group"
                                >
                                  <span className="text-white mr-3 mt-1 group-hover:scale-125 transition-transform text-lg">
                                    ▪
                                  </span>
                                  <span className="text-white transition-colors leading-relaxed">
                                    {renderAchievementText(achievement)}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Space Station */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-24 h-24 z-20 transition-all duration-700 ${
                          visibleStations.has(index)
                            ? "scale-100 opacity-100 rotate-0"
                            : "scale-0 opacity-0 rotate-180"
                        }`}
                      >
                        <div
                          className={`w-full h-full bg-gradient-to-br ${experience.gradient} rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer`}
                        >
                          <div className="text-4xl animate-pulse">
                            {experience.icon}
                          </div>
                        </div>
                        <div
                          className={`absolute -inset-3 ${experience.glowColor} rounded-full blur-xl animate-pulse`}
                        ></div>
                      </div>

                      <div className="w-1/2 pl-12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-12"></div>

                      {/* Space Station */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-24 h-24 z-20 transition-all duration-700 ${
                          visibleStations.has(index)
                            ? "scale-100 opacity-100 rotate-0"
                            : "scale-0 opacity-0 -rotate-180"
                        }`}
                      >
                        <div
                          className={`w-full h-full bg-gradient-to-br ${experience.gradient} rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer`}
                        >
                          <div
                            className="text-4xl"
                            style={{ animation: "pulse 2s ease-in-out infinite" }}
                          >
                            {experience.icon}
                          </div>
                        </div>
                        <div
                          className={`absolute -inset-3 ${experience.glowColor} rounded-full blur-xl animate-pulse`}
                        ></div>
                      </div>

                      {/* Right side content */}
                      <div className="w-1/2 pl-12">
                        <div className="border-1 border-white  rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105">
                          <div className="text-sm text-white font-semibold mb-2">
                            {experience.period}
                          </div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-800">
                            {experience.title}
                          </h3>
                          <h4 className="text-xl text-gray-600 mb-6">
                            {experience.company}
                          </h4>
                          <ul className="space-y-4 text-gray-700">
                            {experience.achievements.map(
                              (achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="flex items-start group"
                                >
                                  <span className="text-white mr-3 mt-1 group-hover:scale-125 transition-transform text-lg">
                                    ▪
                                  </span>
                                  <span className="text-white transition-colors leading-relaxed">
                                    {renderAchievementText(achievement)}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile & Tablet Layout (below lg) */}
                <div className="lg:hidden">
                  <div className="relative">
                    {/* Mobile card layout */}
                    <div className="border-1 border-white rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-500 hover:shadow-xl">
                      {/* Icon at the top for mobile */}
                      <div className="flex justify-center mb-4">
                        <div
                          className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${experience.gradient} rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 ${
                            visibleStations.has(index)
                              ? "scale-100 opacity-100 rotate-0"
                              : "scale-95 opacity-80"
                          }`}
                        >
                          <div className="text-2xl md:text-3xl animate-pulse">
                            {experience.icon}
                          </div>
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <div className="text-sm text-white font-semibold mb-2">
                          {experience.period}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                          {experience.title}
                        </h3>
                        <h4 className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6">
                          {experience.company}
                        </h4>
                      </div>

                      <ul className="space-y-3 md:space-y-4 text-gray-700">
                        {experience.achievements.map(
                          (achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start group"
                            >
                              <span className="text-white mr-3 mt-1 group-hover:scale-125 transition-transform text-lg flex-shrink-0">
                                ▪
                              </span>
                              <span className="text-white transition-colors leading-relaxed text-sm md:text-base">
                                {renderAchievementText(achievement)}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
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

export default Experience;