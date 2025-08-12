import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="py-16 px-6 lg:px-10">
      <h4
        id="about"
        className="text-center text-2xl font-bold mb-4 font-ovo text-darkTheme dark:text-white"
      >
        Introduction
      </h4>

      <h2 className="text-center font-ovo text-lg mb-12 text-darkTheme dark:text-gray-200">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-6xl mx-auto">

        {/* Content Section */}
        <div className="flex-1 lg:w-2/3">
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-base leading-relaxed">
            I am a passionate web developer with a focus on creating interactive
            and user-friendly experiences. My journey in web development began
            with a fascination for how websites work and the technologies behind
            them. Over the years, I have honed my skills in various programming
            languages and frameworks, allowing me to build dynamic and
            responsive web applications.
          </p>

          {/* Info Cards Grid - 3 cards horizontally */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-lightHover dark:hover:bg-gray-700 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-colors duration-300">
                    <Image
                      src={icon}
                      alt={title}
                      width={24}
                      height={24}
                      className={`w-6 h-6 ${
                        iconDark ? "filter invert dark:invert-0" : ""
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-base lg:text-lg mb-2 font-ovo ${
                        iconDark
                          ? "text-gray-800 dark:text-gray-200"
                          : "text-gray-800 dark:text-gray-200"
                      } group-hover:text-darkTheme dark:group-hover:text-white transition-colors duration-300`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-xs lg:text-sm leading-relaxed ${
                        iconDark
                          ? "text-gray-400 dark:text-gray-400"
                          : "text-gray-600 dark:text-gray-400"
                      } group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="mt-12">
            <h4 className="text-center text-xl font-bold mb-8 font-ovo text-darkTheme dark:text-white">
              Tools I Use
            </h4>

            {/* Tools Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
              {toolsData.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-3 lg:p-4 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-lightHover dark:hover:bg-gray-600 group hover:rotate-2"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    {/* Tool Icon */}
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white dark:bg-gray-600 rounded-lg shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={tool}
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Tool Name */}
                    <span className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-darkTheme dark:group-hover:text-white transition-colors duration-300 leading-tight">
                      {tool.name}
                    </span>
                  </div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
