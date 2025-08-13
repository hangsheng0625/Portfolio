"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { blogData } from "@/assets/assets";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Calculate pagination
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogData.slice(startIndex, endIndex);

  const handleBlogClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of blog section when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 lg:px-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold font-ovo text-darkTheme dark:text-white mb-6">
          My Blogs
        </h1>
        <p className="text-lg lg:text-xl font-ovo text-darkTheme dark:text-white mb-4 max-w-3xl mx-auto leading-relaxed">
          Welcome to my blog where I share insights, tutorials, and thoughts
          about developing projects, useful techniques and best practices.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100 dark:border-gray-700"
          >
            {/* Content Section - Separate from image */}
            <div className="p-8">
              {/* Blog Title - Scale on hover */}
              <h3 className="text-lg lg:text-xl font-bold font-ovo text-darkTheme dark:text-gray-300 mb-4 group-hover:scale-105 transition-transform duration-300 origin-left truncate">
                {blog.title}
              </h3>

              {/* Blog Description */}
              <p className="text-sm lg:text-base leading-relaxed line-clamp-3 transition-colors duration-300 mb-6">
                {blog.excerpt ||
                  "An insightful article about web development, technology trends, and programming best practices."}
              </p>

              {/* Blog Category Badge */}
              {blog.category && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t card-border">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleBlogClick(blog.slug)}
                    className="cursor-pointer action-text inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-base transition-colors duration-300 group-hover:gap-3"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Additional action */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full border border-gray-600 dark:border-gray-600 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                      <Tag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-16 gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "bg-white dark:bg-gray-700 text-darkTheme dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex gap-1">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg transition-all duration-300 font-medium ${
                    currentPage === page
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-700 text-darkTheme dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "bg-white dark:bg-gray-700 text-darkTheme dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600"
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Blog Count Info */}
      {blogData.length > 0 && (
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {startIndex + 1}-{Math.min(endIndex, blogData.length)} of{" "}
            {blogData.length} blogs
          </p>
        </div>
      )}
    </section>
  );
};

export default Blogs;
