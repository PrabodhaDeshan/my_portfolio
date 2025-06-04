"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";
import Tabs from "@/components/Tabs";
import What_i_do from "@/components/What_i_do";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const iconStyle =
  "p-3 rounded-full text-white bg-gradient-to-t from-[#573BD6] to-purple-500 shadow-lg hover:scale-110 transition duration-300";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen home">
      <Navbar />

      <main className="flex flex-col flex-1">
        {/* Hero section untouched */}
        <section id="home" className="min-h-screen">
          {/* Home content */}

          <div className="w-[100%] lg:w-full block lg:flex sm-range:h-[850px] lg:min-h-screen lg:h-auto bg-gradient-to-r from-lightgrey via-white to-white dark:from-[#331958]  dark:to-[#111827] lg:items-center overflow-hidden lg:px-10">
            <div className=" w-[80%] heading block lg:w-[60%] relative top-10">
              <h1 className="relative text-4xl font-bold opacity-0 animate-fade-in-up md:text-6xl lg:text-6xl left-5 ">
                Hi, I am{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#573BD6] to-purple-500">
                  Prabodha Deshan
                </span>
                <br />
                professional front-end developer
              </h1>
              <div className="p-4 text-xl font-medium text-black dark:text-white lg:right-10">
                <span>
                  <Typewriter
                    words={[
                      "Hello, welcome to my website. I'm passionate about technology and design!",
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>

              <div className="relative social lg:mt-4 left-5 top-96 lg:top-0">
                <p className="mb-3 text-lg font-medium">Find me in</p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconStyle}
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconStyle}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconStyle}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconStyle}
                  >
                    <FaDiscord />
                  </a>
                </div>
              </div>
            </div>
            <div className="sm-range:justify-center sm-range:flex animate-fade-in-up ">
              <div className=" sm-range:w-[80%] lg:w-[80%] lg:h-[370px] h-72 lg:ml-14 relative block lg:right-2 shadow-outside bg-gradient-to-t from-lightgrey to-white shadow-4xl dark:from-[#331958]  dark:to-[#111827] lg:top-30 lg:pb-0 ">
                <div className="flex items-center justify-center h-full lg:justify-start">
                  <Image
                    src="/me.png"
                    alt="Profile"
                    width={450}
                    height={550}
                    className="relative object-cover  bottom-14 lg:top-1  w-[300px]  sm-range:bottom-14  h-[400px] lg:w-[450px] lg:h-[420px]"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        

       
        <section id="about" className="min-h-screen">
          {/* About content */}

          <motion.section
      id="about"
      className="min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main content */}
      <div className="flex flex-col justify-center flex-1 w-full text-center about">
        <h2 className="mt-10 text-4xl font-semibold">
          About <span className="header-gradient">Me</span>
        </h2>

        <div className="flex flex-col flex-1 overflow-hidden lg:flex-row">
          {/* Left div */}
          <motion.div
            className="w-full sm-range:h-[30%] lg:w-[50%] flex text-start items-center justify-center p-6 overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="lg:w-80 sm-range:h-96">
              <Image
                src="/poly.svg"
                alt="Profile"
                width={100}
                height={100}
                className="relative object-cover lg:top-28 lg:bottom-20 sm-range:w-full sm-range:top-24 lg:w-full lg:h-full"
              />
              <Image
                src="/man.png"
                alt="Profile"
                width={100}
                height={100}
                className="relative lg:bottom-40 w-[200px] sm-range:w-full sm-range:bottom-40 lg:w-full lg:h-full"
              />
            </div>
          </motion.div>

          {/* Right div */}
          <motion.div
            className="w-full lg:w-[50%] flex text-start items-center justify-center p-6 overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="flex w-[80%]">
              Creative and results-driven Software Developer with 1 year of
              experience in both front-end and back-end development. Successfully
              completed an internship contributing to impactful projects.
              Passionate about building seamless user experiences and delivering
              robust solutions, eager to apply my skills in a dynamic development
              role.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
        </section>
       
        <div className="tab">
          <Tabs />
          <br />

          {/* What i do */}

          <What_i_do />

          {/* Projects */}
          <section id="projects" className="min-h-screen">
            {/* Projects content */}

            <Projects />
          </section>
          {/* Contact*/}
          <section id="contact" className="min-h-screen">
            <Contact />{" "}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
