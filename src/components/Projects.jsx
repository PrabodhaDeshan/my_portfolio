"use client"; 

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640, 
          settings: {
            slidesToShow: 1,
          },
        },
        
      ],
  };

  const projectData = [
    {
      img: "/sunset.png",
      desc: "A modern, responsive website, Sunset Breez was designed to showcase resort services and captivate visitors with an inviting online presence.",
      lang: "React | Tailwind CSS | Vite",
    },
    {
      img: "/medi.png",
      desc: "The Medicare website delivers a simple, user-friendly platform for a healthcare service provider, focused on clear information and easy navigation.",
      lang: "React | NextJs | Tailwind CSS",
    },
    {
      img: "/venro.png",
      desc: "Venro Inventory Management System is an efficient solution for managing, tracking, and organizing product inventory within businesses.Including Admin dashboard",
      lang: "HTML| CSS | PHP | Javascript",
    },

     {
      img: "/shop.png",
      desc: "Designed a shopping cart application with user registration, login, cart operations, and order placement, supporting session handling and cookie-based cart storage for a seamless user experience.",
      lang: "React| NextJs | Tailwind CSS ",
    },
    
  ];

  return (
    <div className="flex flex-col justify-center flex-1 w-full px-5 text-center lg:px-32">
      <h2 className="mt-10 text-4xl font-semibold">
        Recent <span className="header-gradient">Projects</span>
      </h2>

      <div className="py-10 text-gray-700">
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index} className="flex justify-center p-5">
              <div className="w-full min-h-[480px] p-5 font-semibold bg-white shadow-lg dark:shadow-[#111827] rounded-xl text-start dark:text-white dark:bg-[#331958] ">
                <div className="w-full mb-4">
                  <Image
                    src={project.img}
                    alt={`Project ${index + 1}`}
                    width={600}
                    height={300}
                    className="object-cover w-full h-64 rounded-lg"
                  />
                  
                </div>
                <p>{project.desc}</p>
                <p className="text-[#573BD6] mt-4 ">{project.lang}</p>
                 
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
