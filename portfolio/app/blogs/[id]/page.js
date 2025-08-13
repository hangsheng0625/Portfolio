"use client";

import { blogData } from "@/assets/assets";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find blog by slug
    const foundBlog = blogData.find((blog) => blog.slug === id);
    setBlog(foundBlog || null);
  }, [id]);

  if (!blog) {
    return (
      <>
        <Background />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-darkTheme dark:text-white mb-4">
              Blog post not found
            </h1>
            <Link
              href="/blogs"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm sm:text-base"
            >
              Back to Blogs
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
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 md:pb-16">
            {/* Back Button - Mobile optimized */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-darkTheme dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline">Back to Blogs</span>
                <span className="xs:hidden">Back</span>
              </Link>
            </div>

            {/* Blog Header - Mobile-first responsive */}
            <div className="max-w-4xl mx-auto">
              {/* Category Badge - Mobile optimized */}
              {blog.category && (
                <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-700 mb-4 sm:mb-6">
                  {blog.category}
                </div>
              )}

              {/* Title - Mobile responsive sizing */}
              <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-ovo text-darkTheme dark:text-white leading-tight">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content Section - Mobile optimized */}
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-6 sm:py-8 md:py-12 lg:py-16">
          {/* Blog Content - Responsive padding and spacing */}
          <div className="bg-white dark:bg-cardDark rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none markdown-content">
              {blog.content ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-darkTheme mb-4 sm:mb-6 mt-6 sm:mt-8 first:mt-0"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-lg sm:text-xl md:text-2xl font-bold text-darkTheme mb-3 sm:mb-4 mt-5 sm:mt-6"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-base sm:text-lg md:text-xl font-semibold text-darkTheme mb-2 sm:mb-3 mt-4 sm:mt-5"
                        {...props}
                      />
                    ),
                    h4: ({ node, ...props }) => (
                      <h4
                        className="text-sm sm:text-base md:text-lg font-semibold text-darkTheme mb-2 mt-3 sm:mt-4"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc list-inside mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 ml-2 sm:ml-4"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal list-inside mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 ml-2 sm:ml-4"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        className="mb-1 text-sm sm:text-base text-gray-700"
                        {...props}
                      />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong
                        className="font-semibold text-darkTheme"
                        {...props}
                      />
                    ),
                    em: ({ node, ...props }) => (
                      <em className="italic text-gray-600" {...props} />
                    ),
                    code: ({ node, inline, ...props }) =>
                      inline ? (
                        <code
                          className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400"
                          {...props}
                        />
                      ) : (
                        <code
                          className="block bg-gray-100 dark:bg-gray-800 p-2 sm:p-4 rounded-lg text-xs sm:text-sm font-mono overflow-x-auto"
                          {...props}
                        />
                      ),
                    pre: ({ node, ...props }) => (
                      <pre
                        className="bg-gray-100 dark:bg-gray-800 p-2 sm:p-4 rounded-lg mb-3 sm:mb-4 overflow-x-auto"
                        {...props}
                      />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-2 sm:border-l-4 border-blue-500 pl-2 sm:pl-4 italic text-sm sm:text-base text-gray-600 mb-3 sm:mb-4"
                        {...props}
                      />
                    ),
                    hr: ({ node, ...props }) => (
                      <hr
                        className="my-6 sm:my-8 border-gray-300 dark:border-gray-600"
                        {...props}
                      />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline break-words"
                        {...props}
                      />
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              ) : (
                <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {blog.excerpt || "Blog content would go here..."}
                </div>
              )}
            </div>

            {/* Tags Section - Mobile responsive */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-base sm:text-lg font-semibold text-darkTheme dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation to other blogs - Mobile optimized */}
          <div className="mt-6 sm:mt-8 md:mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Back to all blogs</span>
              <span className="xs:hidden">Back to blogs</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
