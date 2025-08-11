import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center py-3 w-full">
          {/* Logo */}
          <a href="#top" className="flex items-center shrink-0 mr-10">
            <Image src={assets.logo} alt="Logo" className="w-32 h-auto" priority />
          </a>

          {/* Center links - TEST: Use direct font style */}
          <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 text-sm font-medium">
            <li><a href="#top" className="text-darkTheme" style={{fontFamily: 'Ovo, serif'}}>Home</a></li>
            <li><a href="#about" className="text-darkTheme" style={{fontFamily: 'Ovo, serif'}}>About me</a></li>
            <li><a href="#services" className="text-darkTheme" style={{fontFamily: 'Ovo, serif'}}>Services</a></li>
            <li><a href="#projects" className="text-darkTheme" style={{fontFamily: 'Ovo, serif'}}>My Work</a></li>
            <li><a href="#contact" className="text-darkTheme" style={{fontFamily: 'Ovo, serif'}}>Contact me</a></li>
          </ul>

          {/* Right action */}
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-neutral-300 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Contact
              <Image src={assets.arrow_icon} alt="Arrow" className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar