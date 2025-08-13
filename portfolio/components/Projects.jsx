"use client";

import { workData } from "@/assets/assets";
import React, { useState } from "react";
import { ArrowRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate pagination
  const totalPages = Math.ceil(workData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = workData.slice(startIndex, endIndex);

  const handleProjectClick = (slug) => {
    router.push(`/projects/${slug}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to projects section when page changes
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100 dark:border-gray-700"
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
            </div>

            {/* Content Section - Separate from image */}
            <div className="p-8">
              {/* Project Title - Scale on hover */}
              <h3 className="text-lg lg:text-xl font-bold font-ovo text-darkTheme dark:text-gray-300 mb-4 group-hover:scale-105 transition-transform duration-300 origin-left truncate">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm lg:text-base leading-relaxed line-clamp-3 transition-colors duration-300 mb-6">
                {project.fullDescription ||
                  project.description ||
                  "A comprehensive project showcasing modern web development techniques and user experience design principles."}
              </p>

              {/* Project Category Badge */}
              {project.category && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              )}

              {/* Tags/Technologies */}
              <h4 className="action-text text-sm font-semibold mb-3 mt-6">
                Tags/Technologies
              </h4>
              <div className="flex flex-wrap gap-2 overflow-hidden max-h-8">
                {project.technologies ? (
                  project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag px-2 py-1 bg-lightHover dark:bg-gray-700 text-xs font-medium rounded-full border border-purple-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-gray-500 transition-colors duration-200 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="tech-tag px-2 py-1 bg-lightHover dark:bg-gray-700 text-xs font-medium rounded-full border border-purple-200 dark:border-gray-600">
                      React
                    </span>
                    <span className="tech-tag px-2 py-1 bg-lightHover dark:bg-gray-700 text-xs font-medium rounded-full border border-purple-200 dark:border-gray-600">
                      Next.js
                    </span>
                    <span className="tech-tag px-2 py-1 bg-lightHover dark:bg-gray-700 text-xs font-medium rounded-full border border-purple-200 dark:border-gray-600">
                      Tailwind
                    </span>
                  </>
                )}
                {project.technologies && project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t card-border">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleProjectClick(project.slug)}
                    className="cursor-pointer action-text inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-base transition-colors duration-300 group-hover:gap-3"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* GitHub link */}
                  <div className="flex items-center gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-gray-600 dark:border-gray-600 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-16 gap-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full border transition-colors duration-300 ${
              currentPage === 1
                ? "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            title="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full font-medium transition-colors duration-300 ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full border transition-colors duration-300 ${
              currentPage === totalPages
                ? "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            title="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Projects Count Info */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1}-{Math.min(endIndex, workData.length)} of{" "}
          {workData.length} projects
        </p>
      </div>
    </section>
  );
};

export default Projects;
