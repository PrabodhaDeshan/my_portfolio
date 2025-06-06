'use client';

import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!mounted) return null;

  return (
    <div className="relative z-50 flex items-center justify-between w-full h-16 px-6 bg-white shadow-md dark:bg-[#111827]">
     
      <div className="flex items-center justify-center text-xl font-semibold text-black dark:text-white"> <div className="w-16 h-16 " >
       
  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#573BD6] to-purple-500 relative top-2 ">
    <div className="w-full h-full bg-white rounded-full dark:bg-[#111827]">
      <Image
        src="/icon.png"
        alt="Profile"
        width={100}
        height={100}
        className="object-cover rounded-full"
      />
    </div>
  </div>
  

        </div>Prabodha</div>
 
      {/* Desktop Menu */}
      <div className="items-center hidden space-x-6 md:flex">
        <ul className="flex gap-6 text-base text-black dark:text-white">
          <li className="cursor-pointer hover:text-purple-600"><a href="#home">Home</a></li>
          <li className="cursor-pointer hover:text-purple-600"><a href="#about">About</a></li>
          <li className="cursor-pointer hover:text-purple-600"><a href="#projects">Projects</a></li>
          <li className="cursor-pointer hover:text-purple-600"><a href="#contact">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle for Desktop */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative inline-flex items-center w-16 h-8 p-1 bg-gray-300 rounded-full dark:bg-gray-700 focus:outline-none"
        >
          <span
            className={`inline-flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 transform ${
              theme === 'dark' ? 'translate-x-8 bg-transparent' : 'translate-x-0 bg-[#331958]'
            }`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </button>
      </div>

      {/* Mobile Right Side (Hamburger + Theme Toggle) */}
      <div className="flex items-center space-x-4 md:hidden">
        {/* Dark Mode Toggle for Mobile */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative inline-flex items-center w-12 h-6 p-1 bg-gray-300 rounded-full dark:bg-gray-700 focus:outline-none"
        >
          <span
            className={`inline-flex items-center justify-center w-5 h-5 rounded-full transition-transform duration-300 transform text-sm ${
              theme === 'dark' ? 'translate-x-6 bg-transparent' : 'translate-x-0 bg-[#331958]'
            }`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
        </button>

        {/* Hamburger Icon */}
        <div className="z-50 text-3xl text-black cursor-pointer dark:text-white" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center space-y-8 text-black dark:text-white text-xl font-medium transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          <li className="cursor-pointer hover:text-purple-600" onClick={toggleMenu}>Home</li>
          <li className="cursor-pointer hover:text-purple-600" onClick={toggleMenu}>About</li>
          <li className="cursor-pointer hover:text-purple-600" onClick={toggleMenu}>Projects</li>
          <li className="cursor-pointer hover:text-purple-600" onClick={toggleMenu}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;




