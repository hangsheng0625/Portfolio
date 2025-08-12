import { workData } from "@/assets/assets";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-10">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold font-ovo text-darkTheme dark:text-white mb-6">
          My Projects
        </h2>
        <p className="text-lg lg:text-xl font-ovo text-darkTheme dark:text-white mb-4 max-w-3xl mx-auto leading-relaxed">
          Here are some of the projects I've worked on. Each project showcases
          different technologies and approaches to solve real-world problems.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100 dark:border-gray-700"
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Subtle overlay for better image contrast */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>

              {/* Arrow icon in top-right corner */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-darkTheme dark:text-white" />
              </div>
            </div>

            {/* Content Section - Separate from image */}
            <div className="p-8 bg-white dark:bg-gray-800">
              {/* Project Title - Scale on hover */}
              <h3 className="text-2xl lg:text-3xl font-bold font-ovo text-darkTheme dark:text-white mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 mb-6">
                {project.description ||
                  "A comprehensive project showcasing modern web development techniques and user experience design principles."}
              </p>

              {/* Tags/Technologies */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.technologies ? (
                  project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-lightHover dark:bg-gray-700 text-darkTheme dark:text-gray-200 text-sm font-medium rounded-full border border-purple-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-gray-500 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="px-4 py-2 bg-lightHover dark:bg-gray-700 text-darkTheme dark:text-gray-200 text-sm font-medium rounded-full border border-purple-200 dark:border-gray-600">
                      React
                    </span>
                    <span className="px-4 py-2 bg-lightHover dark:bg-gray-700 text-darkTheme dark:text-gray-200 text-sm font-medium rounded-full border border-purple-200 dark:border-gray-600">
                      Next.js
                    </span>
                    <span className="px-4 py-2 bg-lightHover dark:bg-gray-700 text-darkTheme dark:text-gray-200 text-sm font-medium rounded-full border border-purple-200 dark:border-gray-600">
                      Tailwind
                    </span>
                  </>
                )}
              </div>

              {/* View Project Link */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 cursor-pointer">
                <button className="inline-flex items-center gap-3 text-darkTheme dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-base transition-colors duration-300 group-hover:gap-4">
                  View Project Details
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-16">
        <button
          className="inline-flex items-center gap-2 px-8 py-3 
                    font-ovo text-darkTheme dark:text-white leading-tight rounded-full border-1 border-grey-400 dark:border-gray-600
                    shadow-md hover:shadow-lg
                    duration-300 ease-out
                    hover:bg-neutral-50 dark:hover:bg-gray-800 transition-colors
                    cursor-pointer"
        >
          View All Projects
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
