"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  User,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";

// Navigation links
const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "My Blogs", href: "/blogs", icon: User },
  { label: "My Projects", href: "/projects", icon: FolderOpen },
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (!mounted) return;

    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b border-gray-800/50 dark:border-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center py-5 w-full">
          {/* Desktop Nav Links - Centered */}
          <ul className="hidden md:flex items-center space-x-10 text-base font-ovo">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 transition-colors font-semibold ${
                      isActive
                        ? isDarkMode
                          ? "text-white"
                          : "text-black"
                        : "text-darkTheme dark:text-gray-300 hover:text-white-700 dark:hover:text-white font-normal"
                    }`}
                    style={
                      isActive
                        ? { color: isDarkMode ? "#ffffff" : "#000000" }
                        : {}
                    }
                  >
                    <IconComponent className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4 shrink-0 absolute right-8">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500 transition-transform hover:rotate-12" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600 transition-transform hover:rotate-12" />
                  )}
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 hover:bg-neutral-100 dark:hover:bg-gray-700 rounded-full md:hidden transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-neutral-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-800/50 dark:border-white/50 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="py-2">
            <ul>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const IconComponent = link.icon;
                return (
                  <li
                    key={link.href}
                    className="text-center border-b border-white/20 dark:border-white/50 last:border-b-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-center gap-3 py-4 px-6 transition-colors font-ovo text-lg ${
                        isActive
                          ? "text-black font-semibold"
                          : "text-black font-normal hover:text-gray-700 hover:bg-neutral-50 dark:hover:bg-gray-800"
                      }`}
                      style={{ color: "#000000" }}
                    >
                      <IconComponent className="w-5 h-5" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-gray-800/50 dark:border-white/50 mx-6 my-4"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
