"use client";
import React from "react";
import { useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-ovo text-darkTheme dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg lg:text-xl font-ovo text-darkTheme dark:text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Let's create something
            amazing together!
          </p>

          {/* Social Links with Tools Effects */}
          <div className="pt-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-darkTheme dark:text-white mb-8">
              Follow Me
            </h3>
            <div className="flex gap-4 justify-center">
              {/* GitHub */}
              <a
                href="https://github.com/hangsheng0625"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-2 lg:p-3 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-lightHover dark:hover:bg-gray-600 group hover:rotate-2 flex flex-col items-center text-center space-y-1"
              >
                <Github className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/liaw-hang-sheng-679957232/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-2 lg:p-3 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-lightHover dark:hover:bg-gray-600 group hover:rotate-2 flex flex-col items-center text-center space-y-1"
              >
                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-2 lg:p-3 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-lightHover dark:hover:bg-gray-600 group hover:rotate-2 flex flex-col items-center text-center space-y-1"
              >
                <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-pink-600 group-hover:text-pink-700 transition-colors duration-300" />

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </a>

              {/* Email */}
              <a
                href="mailto:hangsheng279@gmail.com"
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-2 lg:p-3 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-lightHover dark:hover:bg-gray-600 group hover:rotate-2 flex flex-col items-center text-center space-y-1"
              >
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-red-600 group-hover:text-red-700 transition-colors duration-300" />

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
