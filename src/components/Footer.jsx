"use client";

import React from 'react'
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className='flex items-center justify-center w-full bg-white  dark:bg-[#111827] '>
      <div className="grid w-full lg:gap-5 sm-range:gap-5 lg:grid-cols-3 sm-range:grid-cols-2 ">

         <div className="flex flex-col justify-center items-center text-center p-8 bg-white dark:bg-[#111827]">
 <h2 className="mb-2 text-xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
  Let's Talk
</h2>

  <h3 className="max-w-xl">
    I'm always open to new opportunities, collaborations, or just a friendly tech chat.
    Let's build something great together — reach out me any time!
  </h3>
</div>
      
    <div className="flex justify-center p-8 bg-white  dark:bg-[#111827]">
      <ul className='space-y-3'>
        <li className='font-bold' >Links</li>
        <br />
        <li >Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
      </ul>
    </div>
    <div className="flex justify-start p-8 bg-white dark:bg-[#111827]">
      <ul className="space-y-3 text-gray-800 dark:text-gray-200">
        <li className="text-lg font-bold">Contact</li>
        <br />
        <li className="flex items-center gap-2 r">
          <FaPhoneAlt /> +94 77 3879744
        </li>
        <li className="flex items-center gap-2">
          <MdEmail /> Prabodhadesh97@gmail.com
        </li>
        <li className="flex items-center gap-2">
          <FaGithub />
          <a
            href="https://github.com/PrabodhaDeshan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/PrabodhaDeshan
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/prabodha-gunathilaka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/prabodha-gunathilaka
          </a>
        </li>
      </ul>
    </div>

    </div>
   
    </div>
    
  )
}

export default Footer