"use client";
import { useEffect, useState } from "react";

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Check for dark mode
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Listen for class changes on html element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const lightBackground = "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #faf5ff 100%)";
  const darkBackground = "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #000000 100%)";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main background with JavaScript-controlled styling */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isDarkMode ? darkBackground : lightBackground
        }}
      ></div>

      {/* Interactive mouse-following gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-xl float-animation"></div>
      <div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-xl blur-lg float-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-green-400/30 to-teal-500/30 rounded-full blur-lg float-animation"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-2xl blur-xl float-animation"
        style={{ animationDelay: "6s" }}
      ></div>

      {/* Additional floating elements for more dynamic feel */}
      <div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-md float-animation"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/4 w-12 h-12 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full blur-sm float-animation"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-green-600/20 rounded-full blur-sm float-animation"
        style={{ animationDelay: "5s" }}
      ></div>

      {/* Grid pattern overlay for texture */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 mix-blend-soft-light">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-gray-100/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Background;
