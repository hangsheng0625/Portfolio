"use client";

import { blogData } from "@/assets/assets";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-darkTheme dark:text-white mb-4">
              Blog post not found
            </h1>
            <Link
              href="/blogs"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 pb-8 sm:pb-16">
            {/* Back Button - Theme-aware color */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/blogs"
              className="inline-flex items-center gap-2 text-white-600 dark:text-white-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                <ArrowLeft className="inline-flex items-center gap-2 text-white-600 dark:text-white-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
 />
              </Link>
            </div>

            {/* Blog Header - Mobile-first responsive layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
              {/* Left Column - Content */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                {/* Category Badge */}
                {blog.category && (
                  <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-700">
                    {blog.category}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold font-ovo text-darkTheme dark:text-white leading-tight">
                  {blog.title}
                </h1>
              </div>

              {/* Right Column - Blog Image - Mobile first */}
              <div className="relative order-1 lg:order-2">
                {blog.image && (
                  <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}

                {/* Decorative elements - Responsive */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
          {/* Blog Content */}
          <div className="bg-white dark:bg-cardDark rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none markdown-content">
              {blog.content ? (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-darkTheme dark:text-white mb-6 mt-8 first:mt-0" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-darkTheme dark:text-white mb-4 mt-6" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-darkTheme dark:text-white mb-3 mt-5" {...props} />,
                    h4: ({node, ...props}) => <h4 className="text-lg font-semibold text-darkTheme dark:text-white mb-2 mt-4" {...props} />,
                    p: ({node, ...props}) => <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4" {...props} />,
                    li: ({node, ...props}) => <li className="mb-1" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-semibold text-darkTheme dark:text-white" {...props} />,
                    em: ({node, ...props}) => <em className="italic text-gray-600 dark:text-gray-400" {...props} />,
                    code: ({node, inline, ...props}) => 
                      inline ? (
                        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono text-blue-600 dark:text-blue-400" {...props} />
                      ) : (
                        <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto" {...props} />
                      ),
                    pre: ({node, ...props}) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto" {...props} />,
                    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 mb-4" {...props} />,
                    hr: ({node, ...props}) => <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />,
                    a: ({node, ...props}) => <a className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline" {...props} />,
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              ) : (
                <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {blog.excerpt || "Blog content would go here..."}
                </div>
              )}
            </div>

            {/* Tags Section */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-darkTheme dark:text-white mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation to other blogs */}
          <div className="mt-8 sm:mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-white-600 dark:text-white-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
