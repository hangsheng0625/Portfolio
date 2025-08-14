"use client";

import { workData } from "@/assets/assets";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import PageTransition from "@/components/PageTransition";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find project by slug
    const foundProject = workData.find((project) => project.slug === id);
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <>
        <Background />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-darkTheme dark:text-white mb-4">
              Project not found
            </h1>
            <Link
              href="/projects"
              className="text-white-600 hover:text-white-800 dark:text-white-400 dark:hover:text-white-300"
            >
              ← 
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Background />
      <Navbar />
      <PageTransition>
        <div className="min-h-screen">
          {/* Hero Section with Back Button */}
          <div className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-8 sm:pb-16">
              {/* Back Button - Mobile optimized */}
              <div className="mb-6 sm:mb-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-white-600 dark:text-white-400 hover:text-white-700 dark:hover:text-white-300 font-medium transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  
                </Link>
              </div>

              {/* Project Header - Mobile-first responsive layout */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
                {/* Left Column - Content */}
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                  {/* Category Badge */}
                  {project.category && (
                    <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-700">
                      {project.category}
                    </div>
                  )}

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold font-ovo text-darkTheme dark:text-white leading-tight">
                    {project.title}
                  </h1>

                  {/* Description */}
                  <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
                    {project.description}
                  </h4>

                  {/* Action Buttons - Mobile optimized */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                    {project.demoLink && project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
                      >
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column - Project Image - Mobile first */}
                <div className="relative order-1 lg:order-2">
                  <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Decorative elements - Responsive */}
                  <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content - Better spacing and typography */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-cardDark rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-bold font-ovo text-darkTheme dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
                    Project Overview
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Features with better visual hierarchy */}
                  {project.features && project.features.length > 0 && (
                    <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-2xl font-bold font-ovo text-darkTheme dark:text-white mb-6">
                        Key Features
                      </h3>
                      <div className="grid gap-4">
                        {project.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                            <span className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar with improved styling */}
              <div className="space-y-8">
                {/* Technologies Card */}
                <div className="bg-white dark:bg-cardDark rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold font-ovo text-darkTheme dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies &&
                      project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Project Links Card */}
                <div className="bg-white dark:bg-cardDark rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold font-ovo text-darkTheme dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    Project Links
                  </h3>
                  <div className="space-y-4">
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md group"
                      >
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-600 group-hover:bg-gray-200 dark:group-hover:bg-gray-500 transition-colors duration-200">
                          <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                          Source Code
                        </span>
                      </a>
                    )}
                    {project.demoLink && project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md group"
                      >
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-200">
                          <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                          Live Demo
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}