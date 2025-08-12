import { assets, infoList, toolsData, techStackData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

// Component to render Simple Icons SVG
const SimpleIconSVG = ({ icon, className = "w-5 h-5" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
};

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

          {/* Tech Stack Section */}
          <div className="mt-12">
            <h4 className="text-center text-2xl font-bold mb-8 font-ovo text-darkTheme dark:text-white">
              Tech Stack
            </h4>

            {/* Tech Stack Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              {Object.entries(techStackData).map(
                ([category, technologies], categoryIndex) => (
                  <div
                    key={category}
                    className={`${
                      categoryIndex !== 0
                        ? "border-t border-gray-200 dark:border-gray-700"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Category Label */}
                      <div className="lg:w-1/4 bg-gray-50 dark:bg-gray-900 px-6 py-4 flex items-center">
                        <h5 className="font-semibold text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                          {category}
                        </h5>
                      </div>

                      {/* Technologies */}
                      <div className="lg:w-3/4 px-6 py-4">
                        <div className="flex flex-wrap gap-3">
                          {technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 group cursor-pointer"
                            >
                              {/* Icon - Handle custom images, simple-icons SVG, and emoji */}
                              {typeof tech.icon === "string" ? (
                                tech.icon.startsWith("/") ? (
                                  // Custom image from public folder
                                  <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <Image
                                      src={tech.icon}
                                      alt={tech.name}
                                      width={20}
                                      height={20}
                                      className="w-5 h-5 object-contain"
                                    />
                                  </div>
                                ) : (
                                  // Emoji fallback
                                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                                    {tech.icon}
                                  </span>
                                )
                              ) : tech.icon?.path ? (
                                // Simple-icons SVG
                                <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 text-gray-600 dark:text-gray-400">
                                  <SimpleIconSVG
                                    icon={tech.icon}
                                    className="w-5 h-5"
                                  />
                                </div>
                              ) : (
                                // Legacy image assets
                                <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 object-contain"
                                  />
                                </div>
                              )}
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
