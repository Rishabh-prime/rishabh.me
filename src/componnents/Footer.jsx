import React, { useState } from "react";
import Bgone from "../assets/bg_one.png";
import Bgtwo from "../assets/bg_two.png";
import Bgthree from "../assets/bg_three.png";
import Bgfive from "../assets/about_five.png";
import Bgfour from "../assets/about_four.png";
import Bgsix from "../assets/about_six.png";
import { FaDownload } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-800 hover:border-gray-600",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-blue-600 hover:border-blue-500",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://instagram.com/yourusername",
      color:
        "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-400",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      url: "https://twitter.com/yourusername",
      color: "hover:bg-sky-500 hover:border-sky-400",
    },
    {
      name: "LeetCode",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92h-2.874l-.022.021c-.041.04-.082.08-.122.121l-.021.021v2.874c0 .781-.625 1.406-1.406 1.406-.781 0-1.406-.625-1.406-1.406v-3.723c0-.312.125-.586.344-.805l3.723-3.723c.219-.219.493-.344.805-.344.312 0 .586.125.805.344.219.219.344.493.344.805v6.246c0 .781-.625 1.406-1.406 1.406-.781 0-1.406-.625-1.406-1.406v-2.281h-1.406v2.281c0 1.406 1.125 2.531 2.531 2.531 1.406 0 2.531-1.125 2.531-2.531v-6.246c0-.781-.312-1.5-.875-2.062-.562-.563-1.281-.875-2.062-.875s-1.5.312-2.062.875l-3.723 3.723c-.563.563-.875 1.281-.875 2.062v3.723c0 1.406 1.125 2.531 2.531 2.531 1.406 0 2.531-1.125 2.531-2.531v-1.406h4.219v1.406c0 1.406 1.125 2.531 2.531 2.531s2.531-1.125 2.531-2.531v-6.246c0-1.406-1.125-2.531-2.531-2.531s-2.531 1.125-2.531 2.531v2.281z" />
        </svg>
      ),
      url: "https://leetcode.com/yourusername",
      color: "hover:bg-orange-500 hover:border-orange-400",
    },
    {
  name: "CodeSandbox",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="white"
    >
      <path d="M128 0L16 64v128l112 64 112-64V64L128 0zm0 28.7l84 48v16.8l-84 48-84-48V76.7l84-48zM44 100.9l72 41.2v82.8l-72-41.2v-82.8zm96 124v-82.8l72-41.2v82.8l-72 41.2z"/>
    </svg>
  ),
  url: "https://codesandbox.io/u/yourusername",
  color: "hover:bg-blue-500 hover:border-blue-400",
}

  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-700 bg-gradient-to-b from-gray-900/50 to-black/80">
      {/* Floating background images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <img
          src={Bgfive}
          alt="Space background"
          className="absolute animate-float-medium hidden md:block"
          style={{
            top: "20%",
            left: "10%",
            width: "60px",
            transform: "rotate(15deg)",
          }}
        />

        <img
          src={Bgfour}
          alt="Space background"
          className="absolute animate-float-slow hidden lg:block"
          style={{
            top: "40%",
            right: "10%",
            width: "4rem",
            transform: "rotate(5deg)",
          }}
        />

        <img
          src={Bgsix}
          alt="Space background"
          className="absolute animate-float-medium hidden md:block"
          style={{
            bottom: "30%",
            left: "5%",
            width: "50px",
            transform: "rotate(-10deg)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
            {/* Left Column - About */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  I'm always excited to work on new projects and collaborate
                  with fellow developers. Let's create something amazing
                  together in this vast digital cosmos.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="text-center p-3 border border-gray-600 rounded-lg hover:border-white transition-colors">
                    <div className="text-lg md:text-xl font-bold text-white">
                      10+
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      Projects
                    </div>
                  </div>
                  {/* <div className="text-center p-3 border border-gray-600 rounded-lg hover:border-white transition-colors">
                    <div className="text-lg md:text-xl font-bold text-white">
                      2+
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      Years Exp.
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Middle Column - Newsletter */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">
                  Stay Updated
                </h4>
                <p className="text-gray-400 text-sm md:text-base mb-6">
                  Get notified about my latest projects and tech insights.
                </p>

                <div className="flex flex-col gap-5  justify-center mt-6">
                  <button
                    onClick={() =>
                      (window.location.href = "rishabh1616thakur@gamil.com")
                    }
                    className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                  >
                    Email Me
                    <FaDownload />
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href = "rishabh1616thakur@gamil.com")
                    }
                    className="flex items-center gap-2 px-6 py-3  text-center border border-white text-white rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                  >
                    Resume
                    <FaDownload />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Social Links */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-right">
                <h4 className="text-lg md:text-xl font-semibold text-white mb-6">
                  Follow My Journey
                </h4>

                {/* Social Links Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-3 md:gap-4 justify-center lg:justify-end max-w-xs mx-auto lg:mx-0 lg:ml-auto">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 md:w-14 md:h-14 border border-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      aria-label={social.name}
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6">{social.icon}</div>

                      {/* Tooltip */}
                      <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 space-y-2 text-sm md:text-base text-gray-400">
                  <p>📧 hello@yourname.dev</p>
                  <p>📍 Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm md:text-base">
                Made with <span className="text-red-500 animate-pulse">❤</span>{" "}
                in the cosmos
              </p>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                © {new Date().getFullYear()} Rishabh. All rights reserved.
              </p>
            </div>

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-white transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm md:text-base">Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 group-hover:transform group-hover:-translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced animations */}
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0) rotate(0deg) scale(1); }
            50% { transform: translateY(-15px) rotate(5deg) scale(1.05); }
            100% { transform: translateY(0) rotate(0deg) scale(1); }
          }
          @keyframes float-medium {
            0% { transform: translateY(0) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(-3deg); }
            66% { transform: translateY(-5px) rotate(3deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          .animate-float-slow {
            animation: float-slow 15s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 12s ease-in-out infinite;
            animation-delay: -3s;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
