"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { assets } from "@/assets/assets";

// Navigation links
const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About me", href: "#about" },
  { label: "My Projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

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

  // Track which section is active
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = "top";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollPos) {
          current = link.href.substring(1);
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-neutral-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-3 w-full">
          {/* Logo */}
          <a href="#top" className="flex items-center shrink-0">
            <Image
              src={assets.logo}
              alt="Logo"
              width={128}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-10 text-sm font-ovo">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-black dark:text-white font-semibold"
                        : "text-darkTheme dark:text-gray-300 hover:text-neutral-700 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4 shrink-0">
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

            {/* Contact Button (Desktop) */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-neutral-300 dark:border-gray-600 text-sm font-medium text-neutral-800 dark:text-gray-200 hover:bg-neutral-50 dark:hover:bg-gray-800 transition-colors"
            >
              CV
              <Image
                src={assets.arrow_icon}
                alt=""
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </a>

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
          className={`md:hidden bg-white dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-700 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="py-2">
            <ul>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li
                    key={link.href}
                    className="text-center border-b border-neutral-200 dark:border-gray-700 last:border-b-0"
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 px-6 transition-colors font-ovo text-lg ${
                        isActive
                          ? "text-black dark:text-white font-semibold"
                          : "text-darkTheme dark:text-gray-300 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-neutral-300 mx-6 my-4"></div>

            {/* Mobile Contact Button */}
            <div className="flex justify-center px-6 pb-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-neutral-300 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                CV
                <Image
                  src={assets.arrow_icon}
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
