import React from "react";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { blogData } from "@/assets/assets";

const Blogs = () => {
  return (
    <section className="py-20 px-6 lg:px-10 pt-32">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold font-ovo text-darkTheme dark:text-white mb-6">
          My Blogs
        </h1>
        <p className="text-lg lg:text-xl font-ovo text-darkTheme dark:text-white mb-4 max-w-3xl mx-auto leading-relaxed">
          Welcome to my blog where I share insights, tutorials, and thoughts
          about web development, technology trends, and programming best
          practices.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] border border-gray-100 dark:border-gray-700"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    <Tag className="w-3 h-3" />
                    {blog.category}
                  </span>
                </div>

                {/* Read More Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-4 h-4 text-darkTheme dark:text-white" />
                </div>

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Blog Title */}
                <h2 className="text-xl lg:text-2xl font-bold font-ovo text-darkTheme dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h2>

                {/* Blog Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
            Load More Posts
          </button>
        </div>

        {/* Blog Categories Filter (Optional) */}
        <div className="text-center mt-8">
          <div className="inline-flex flex-wrap gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {[
              "All",
              "Web Development",
              "UI/UX Design",
              "Technology",
              "Programming",
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md text-gray-600 dark:text-gray-300 hover:text-darkTheme dark:hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
