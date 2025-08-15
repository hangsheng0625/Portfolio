import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="relative z-10 pt-32 lg:pt-40 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image with Floating Social Icons */}
        <div className="mb-8 relative inline-block">
          {/* Main Profile Image */}
          <div className="relative">
            <Image
              src={assets.hangsheng_img}
              alt="Profile Image"
              width={300}
              height={300}
              className="rounded-full mx-auto object-cover aspect-square"
              priority
            />

            {/* Floating Social Media Icons */}
            {/* GitHub - Top Left */}
            <a
              href="https://github.com/hangsheng0625"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-white dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group z-10"
              style={{
                animation: "float 6s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              <Github className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </a>

            {/* LinkedIn - Top Right */}
            <a
              href="https://www.linkedin.com/in/liaw-hang-sheng-679957232/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-white dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group z-10"
              style={{
                animation: "float 6s ease-in-out infinite",
                animationDelay: "2s",
              }}
            >
              <Linkedin className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
            </a>

            {/* Instagram - Bottom Left */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-white dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group z-10"
              style={{
                animation: "float 6s ease-in-out infinite",
                animationDelay: "4s",
              }}
            >
              <Instagram className="w-7 h-7 text-pink-600 group-hover:text-pink-700 transition-colors" />
            </a>

            {/* Email - Bottom Right */}
            <a
              href="mailto:hangsheng279@gmail.com"
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-white dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group z-10"
              style={{
                animation: "float 6s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <Mail className="w-7 h-7 text-red-600 group-hover:text-red-700 transition-colors" />
            </a>

            {/* Subtle glow effect around profile */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-50 -z-10"></div>
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-ovo text-darkTheme dark:text-white leading-tight">
          Hi! I am Liaw Hang Sheng
          <Image
            src={assets.hand_icon}
            className="inline-block ml-3 w-8 h-8 lg:w-10 lg:h-10 text-yellow-500"
            alt=""
          />
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl font-ovo text-darkTheme dark:text-white max-w-2xl mx-auto leading-relaxed mb-12">
          A fresh graduate from Monash that has strong interest in artificial intelligence and machine learning applications, particularly in developing full-stack solutions that integrate AI models for real-world problems..
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Liaw-Hang-Sheng-FlowCV-Resume-20250815.pdf"
            download
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 dark:border-gray-500 text-sm sm:text-base font-semibold font-ovo text-darkTheme dark:text-white leading-tight hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
          >
            My Resume
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
