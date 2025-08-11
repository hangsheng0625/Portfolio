import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="py-16 px-6 lg:px-10">
      <h4
        id="about"
        className="text-center text-2xl font-bold mb-4 font-ovo text-darkTheme"
      >
        Introduction
      </h4>

      <h2 className="text-center font-ovo text-lg mb-12 text-darkTheme">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-6xl mx-auto">
        {/* Profile Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-64 sm:w-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={assets.user_image}
              alt="User Image"
              width={320}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 lg:w-2/3">
          <p className="text-gray-600 mb-8 text-base leading-relaxed">
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
                className="bg-white rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-lightHover group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
                    <Image
                      src={icon}
                      alt={title}
                      width={24}
                      height={24}
                      className={`w-6 h-6 ${iconDark ? "filter invert" : ""}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-base lg:text-lg mb-2 font-ovo ${
                        iconDark ? "text-gray-800" : "text-gray-800"
                      } group-hover:text-darkTheme transition-colors duration-300`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-xs lg:text-sm leading-relaxed ${
                        iconDark ? "text-gray-400" : "text-gray-600"
                      } group-hover:text-gray-700 transition-colors duration-300`}
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
            <h4 className="text-center text-xl font-bold mb-8 font-ovo text-darkTheme">
              Tools I Use
            </h4>

            {/* Tools Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
              {toolsData.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 lg:p-4 shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-lightHover group hover:rotate-2"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    {/* Tool Icon */}
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={tool}
                        alt=''
                        width={20}
                        height={20}
                        className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Tool Name */}
                    <span className="text-xs lg:text-sm font-medium text-gray-700 group-hover:text-darkTheme transition-colors duration-300 leading-tight">
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
