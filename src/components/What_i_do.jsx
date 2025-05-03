import Image from "next/image";
import React from 'react'

function What_i_do() {
  return (
    <div className="flex flex-col justify-center flex-1 w-full text-center sm-range:px-8 lg:px-36">
                <h2 className="mt-10 text-4xl font-semibold">
                  What I <span className="header-gradient">Do</span>
                </h2>
                <div className="py-10 text-gray-700 dark:text-white">
                  <div className="grid lg:gap-16 sm-range:gap-5 lg:grid-cols-3 sm-range:grid-cols-1 ">
                    <div className="flex justify-center p-8 bg-white rounded shadow-lg dark:bg-[#331958] ">
                      <div className="w-full text-start "> 
                        <div className="w-10 h-10 mb-2 icon ">
                      <Image
                      src="/web.png"
                      alt="Profile"
                      width={100}
                      height={100}
                      className="relative object-cover sm-range:w-full lg:w-full lg:h-full"
                    /></div>
                        <h3 className="font-bold" >
                         Custom Websites
                        </h3> <br/>
                        <p>
                        year of experience in both front-end and back-end development.
                    Successfully completed an internship contributing to impactful
                    projects. Passionate about building seamless user experiences
                 
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center p-8 bg-white rounded shadow-lg dark:bg-[#331958]">
                    <div className="w-full text-start "> 
                    <div className="w-10 h-10 mb-2 icon ">
                      <Image
                      src="/uiux.png"
                      alt="Profile"
                      width={100}
                      height={100}
                      className="relative object-cover sm-range:w-full lg:w-full lg:h-full"
                    /></div>
                        <h3 className="font-bold" >
                          UI/UX Design
                        </h3><br/>
                        <p>
                        year of experience in both front-end and back-end development.
                    Successfully completed an internship contributing to impactful
                    projects. Passionate about building seamless user experiences
                
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center p-8 bg-white rounded shadow-lg dark:bg-[#331958]">
                    <div className="w-full text-start "> 
                    <div className="w-10 h-10 mb-2 icon ">
                      <Image
                      src="/application.png"
                      alt="Profile"
                      width={100}
                      height={100}
                      className="relative object-cover sm-range:w-full lg:w-full lg:h-full"
                    /></div>
                        <h3 className="font-bold" >
                          Web Application
                        </h3><br/>
                        <p>
                        year of experience in both front-end and back-end development.
                    Successfully completed an internship contributing to impactful
                    projects. Passionate about building seamless user experiences
                  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default What_i_do