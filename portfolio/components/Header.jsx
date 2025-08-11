import Image from 'next/image';
import { assets } from '@/assets/assets';
import { Hand, ArrowRight, Download } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="relative z-10 pt-20 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Profile Image */}
        <div className="mb-8">
          <Image 
            src={assets.profile_img} 
            alt="Profile Image" 
            width={300}
            height={300}
            className="rounded-2xl mx-auto object-cover"
            priority
          />
        </div>

        {/* Greeting */}
        <h3 className='text-2xl font-bold mb-4 font-ovo text-darkTheme'>
          Hi! I am hangsheng 
          <Hand className="inline-block ml-2 w-6 h-6 text-yellow-500" />
        </h3>

        {/* Welcome Message */}
        <h1 className='text-lg mb-4 text-darkTheme'>
          Welcome to my portfolio website.
        </h1>

        {/* Description */}
        <p className='text-sm text-gray-600 mb-8 max-w-2xl mx-auto'>
          I am a passionate web developer with a focus on creating interactive and user-friendly experiences.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-darkTheme text-darkblue text-sm font-medium hover:bg-darkHover transition-colors"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>

          <a 
            href="/sample-resume.pdf" 
            download 
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
          >
            My Resume
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;