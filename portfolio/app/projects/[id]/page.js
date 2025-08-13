"use client";

import { workData } from "@/assets/assets";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

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
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Back to Projects
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
      <div className="min-h-screen">
        {/* Hero Section with Back Button */}
        <div className="relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-16">
            {/* Back Button - Better positioned and styled */}
            <div className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-darkTheme dark:hover:text-white transition-all duration-300 group"
              >
                <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-medium">Back to Projects</span>
              </Link>
            </div>

            {/* Project Header - Better spacing and hierarchy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                {/* Category Badge */}
                {project.category && (
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-700">
                    {project.category}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl lg:text-6xl font-bold font-ovo text-darkTheme dark:text-white leading-tight">
                  {project.title}
                </h1>

                {/* Description */}
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Action Buttons - Refined styling */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-darkTheme dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column - Project Image */}
              <div className="relative">
                <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
    </>
  );
}
