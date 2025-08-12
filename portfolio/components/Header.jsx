import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  Hand,
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
              src={assets.profile_img}
              alt="Profile Image"
              width={300}
              height={300}
              className="rounded-2xl mx-auto object-cover"
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
              href="mailto:hangsheng@example.com"
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-white dark:border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300 group z-10"
              style={{
                animation: "float 6s ease-in-out infinite",
                animationDelay: "1s",
              }}
            >
              <Mail className="w-7 h-7 text-red-600 group-hover:text-red-700 transition-colors" />
            </a>

            {/* Subtle glow effect around profile */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-50 -z-10"></div>
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-ovo text-darkTheme dark:text-white leading-tight">
          Hi! I am hangsheng
          <Hand className="inline-block ml-3 w-8 h-8 lg:w-10 lg:h-10 text-yellow-500" />
        </h1>

        {/* Welcome Message */}
        <h2 className="text-xl lg:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to my portfolio website
        </h2>

        {/* Description */}
        <p className="text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          I am a passionate web developer with a focus on creating interactive
          and user-friendly experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/sample-resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-500 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
          >
            My Resume
            <Download className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
