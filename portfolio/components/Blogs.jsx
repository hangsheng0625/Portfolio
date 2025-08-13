"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { blogData } from "@/assets/assets";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const router = useRouter();

  const handleBlogClick = (slug) => {
    router.push(`/blogs/${slug}`);
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
        {blogData.map((blog, index) => (
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
    </section>
  );
};

export default Blogs;
