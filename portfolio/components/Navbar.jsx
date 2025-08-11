'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { assets } from '@/assets/assets';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add your theme switching logic here
    if (mounted) {
      document.documentElement.classList.toggle('dark');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "My Work", href: "#projects" },
    { label: "Contact me", href: "#contact" }
  ];

  // Don't render interactive elements until mounted
  if (!mounted) {
    return (
      <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center py-3 w-full">
            {/* Logo */}
            <a href="#top" className="flex items-center shrink-0 mr-10">
              <Image
                src={assets.logo}
                alt="Logo"
                width={128}
                height={32}
                className="h-8 w-auto"
                priority
                style={{ width: 'auto', height: '32px' }}
              />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 text-sm font-ovo">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-darkTheme hover:text-neutral-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Static Right Actions */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <Moon className="w-5 h-5 text-neutral-700" />
              </div>
              
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-neutral-300 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                Contact
                <Image
                  src={assets.arrow_icon}
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3"
                  style={{ width: '12px', height: '12px' }}
                />
              </a>

              <div className="p-2 hover:bg-neutral-100 rounded-full md:hidden transition-colors">
                <Menu className="w-5 h-5 text-neutral-700" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center py-3 w-full">
          
          {/* Logo */}
          <a href="#top" className="flex items-center shrink-0 mr-10">
            <Image
              src={assets.logo}
              alt="Logo"
              width={128}
              height={32}
              className="h-8 w-auto"
              priority
              style={{ width: 'auto', height: '32px' }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 text-sm font-ovo">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-darkTheme hover:text-neutral-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-neutral-700" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-700" />
              )}
            </button>

            {/* Contact Button (Hidden on Mobile) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-neutral-300 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Contact
              <Image
                src={assets.arrow_icon}
                alt=""
                width={12}
                height={12}
                className="w-3 h-3"
                style={{ width: '12px', height: '12px' }}
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="p-2 hover:bg-neutral-100 rounded-full md:hidden transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-neutral-700" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3 text-darkTheme hover:text-neutral-700 hover:bg-neutral-50 transition-colors font-ovo"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Mobile Contact Button */}
              <li className="px-6 py-3">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-neutral-300 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors w-full justify-center"
                >
                  Contact
                  <Image
                    src={assets.arrow_icon}
                    alt=""
                    width={12}
                    height={12}
                    className="w-3 h-3"
                    style={{ width: '12px', height: '12px' }}
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;