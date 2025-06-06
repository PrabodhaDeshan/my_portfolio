"use client";
import Image from "next/image";
import { useState } from "react";

const Tab = ({ children }) => <div className="p-4">{children}</div>;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full mx-auto mt-6 rounded-md shadow-lg max-w-7xl sm-range:w-[95%]">
      <div className="flex border-b">
        <button
          className={`py-2 shadow-lg px-4 rounded-md text-sm font-medium ${
            activeTab === "tab1"
              ? "border-b-2 bg-gradient-to-r from-[#573BD6] to-purple-500 text-white"
              : "text-[#573BD6]  "
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Work Experiance
        </button>
        <button
          className={`py-2 rounded-md shadow-lg px-4 text-sm font-medium ${
            activeTab === "tab2"
              ? "border-b-2 bg-gradient-to-r from-[#573BD6] to-purple-500 text-white"
              : "text-[#573BD6] "
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Education
        </button>
        <button
          className={`py-2 rounded-md shadow-lg px-4 text-sm font-medium ${
            activeTab === "tab3"
              ? "border-b-2 bg-gradient-to-r from-[#573BD6] to-purple-500   text-white"
              : "text-[#573BD6] "
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Proffecianal Skills
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "tab1" && (
          <Tab>
            <div className="text-gray-700 dark:text-white">
              <br />
              <div className="relative pl-6 border-purple-400 border-2-2">
                {/* Timeline Item */}
                <div className="relative mb-8 ">
                  {/* Timeline Bullet */}
                  {/* <div className="absolute w-2 h-2 bg-purple-600 rounded-full -left-7 top-2"></div> */}

                  {/* Content */}
                  <h3 className="font-semibold ">
                    Intern Front-end Developer
                  </h3>
                  <p className="mt-2 text-[15px]   relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                   Assisted in designing and developing responsive user interfaces using HTML, CSS, and JavaScript. Gained hands-on experience with React.js and collaborated on small projects using PHP and CodeIgniter. Participated in debugging, code reviews, and improving UI performance in real-world environments.
                  </p>
                 
                </div>

                {/* Timeline Item */}
                <div className="relative mb-8">
                  {/* <div className="absolute w-2 h-2 bg-purple-600 rounded-full -left-7 top-2"></div> */}

                  <h3 className="font-semibold text-gray-800 dark:text-white ">
                    Junior Front-end Developer
                  </h3>
                  <p className="mt-2 text-sm  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                   Worked on multiple real-world web projects, contributing to both front-end and back-end development. Built modern, responsive interfaces using React.js, Next.js, and Tailwind CSS. Also involved in backend functionality using PHP and CodeIgniter, including database management with MySQL and API integration. Played a key role in developing e-commerce platforms, business websites, and admin dashboards. Collaborated with cross-functional teams to ensure performance, usability, and scalability across various client applications.
                  </p>
                 
                </div>
              </div>
            </div>
          </Tab>
        )}
        {activeTab === "tab2" && (
          <Tab>
            <div className="text-gray-700 dark:text-white">
              <div className="relative pl-6 border-purple-400 border-2-2">
                {/* Timeline Item */}

                   {/* Timeline Item */}
                <div className="relative mb-8">
                  {/* <div className="absolute w-2 h-2 bg-purple-600 rounded-full -left-7 top-2"></div> */}

                  <h3 className="font-semibold ">
                  Pearson BTec Higher National Diploma in Computing - Esoft Metro Campus Kandy
                  </h3>
                  <p className="mt-2 text-sm  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                   Built a strong foundation in computing fundamentals including programming, web development, database systems, and networking. Gained hands-on experience in PHP,JavaScrip MySQL, and user interface design. Completed multiple project-based modules that improved teamwork, client communication, and real-world application development skills.
                  </p>
                 
                </div>
                <div className="relative mb-8">
                  {/* Timeline Bullet */}
                  {/* <div className="absolute w-2 h-2 bg-purple-600 rounded-full -left-7 top-2"></div> */}

                  {/* Content */}
                  <h3 className="font-semibold ">BEng (Hons) in Software Engineering - London Metropolitan University</h3>
                  <p className="mt-2 text-[15px]  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    Gained in-depth knowledge of software design, system architecture, and full-stack development. Strengthened skills in JavaScript, React.js, Next.js, Node.js, and database management. Developed several academic and real-world projects, improving proficiency in problem-solving, clean code practices, and collaborative development
                  </p>
                 
                </div>

             
              </div>
            </div>
          </Tab>
        )}
        {activeTab === "tab3" && (
          <Tab>
            <div className="text-gray-700">
              <div className="grid grid-cols-5 gap-4 sm-range:grid-cols-2 ">
                <div className="flex justify-center p-4 bg-gray-200 rounded ">
                  
                  <div className="w-full">
                  {" "}
                  <Image
                    src="/html.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex justify-center p-4 bg-gray-200 rounded">
                <div className="w-full">
                  {" "}
                  <Image
                    src="/css.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex justify-center p-4 bg-gray-200 rounded">
                <div className="w-full">
                  {" "}
                  <Image
                    src="/js.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex justify-center p-4 bg-gray-200 rounded ">
                <div className="w-full">
                  {" "}
                  <Image
                    src="/react.webp"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-200 rounded ">
                <div className="relative h-32 ">
                  {" "}
                  <Image
                    src="/tailwind.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex justify-center p-4 bg-gray-200 rounded">
                <div className="w-full">
                  {" "}
                  <Image
                    src="/nextjs.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex items-center justify-center p-3 bg-gray-200 rounded ">
                <div className="relative h-32">
                  {" "}
                  <Image
                    src="/php.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex justify-center p-4 bg-gray-200 rounded">
                <div className="w-full">
                  {" "}
                  <Image
                    src="/ci.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-200 rounded ">
                <div className="relative h-40">
                  {" "}
                  <Image
                    src="/mysql.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-200 rounded sm-range:items-center ">
                <div className="relative h-56">
                  {" "}
                  <Image
                    src="/wp.png"
                    alt="Profile"
                    width={100}
                    height={100}
                    className="relative object-cover p-4 sm-range:w-full lg:w-full lg:h-full "
                  />
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        )}
      </div>
    </div>
  );
};

export default Tabs;
