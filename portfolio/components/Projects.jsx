import { workData } from "@/assets/assets";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 lg:px-10">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h4 className="text-3xl font-bold font-ovo text-darkTheme mb-2">
          My Projects
        </h4>
        <h2 className="text-lg font-ovo text-darkTheme mb-4">Featured Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Click any to explore in
          detail.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100"
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
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-darkTheme" />
              </div>
            </div>

            {/* Content Section - Separate from image */}
            <div className="p-6 bg-white">
              {/* Project Title - Scale on hover */}
              <h3 className="text-xl font-bold font-ovo text-darkTheme mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                {project.description ||
                  "A comprehensive project showcasing modern web development techniques and user experience design principles."}
              </p>

              {/* Tags/Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies ? (
                  project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-lightHover text-darkTheme text-xs rounded-full font-medium border border-purple-200 hover:border-purple-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="px-3 py-1 bg-lightHover text-darkTheme text-xs rounded-full font-medium border border-purple-200">
                      React
                    </span>
                    <span className="px-3 py-1 bg-lightHover text-darkTheme text-xs rounded-full font-medium border border-purple-200">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-lightHover text-darkTheme text-xs rounded-full font-medium border border-purple-200">
                      Tailwind
                    </span>
                  </>
                )}
              </div>

              {/* View Project Link */}
              <div className="mt-4 pt-4 border-t border-gray-100 cursor-pointer">
                <button className="inline-flex items-center gap-2 text-darkTheme hover:text-blue-600 font-medium text-sm transition-colors duration-300 group-hover:gap-3">
                  View Project Details
                  <ArrowRight className="w-4 h-4" />
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
                    font-bold text-black rounded-full border-1 border-grey-400
                    shadow-md hover:shadow-lg
                    duration-300 ease-out
                    hover:bg-neutral-50 transition-colors
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
