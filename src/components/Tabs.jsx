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
              : "text-gray-600  "
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Work Experiance
        </button>
        <button
          className={`py-2 rounded-md shadow-lg px-4 text-sm font-medium ${
            activeTab === "tab2"
              ? "border-b-2 bg-gradient-to-r from-[#573BD6] to-purple-500 text-white"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Education
        </button>
        <button
          className={`py-2 rounded-md shadow-lg px-4 text-sm font-medium ${
            activeTab === "tab3"
              ? "border-b-2 bg-gradient-to-r from-[#573BD6] to-purple-500   text-white"
              : "text-gray-600"
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
                    Junior Front-end Developer
                  </h3>
                  <p className="mt-2 text-[15px]   relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt
                    suscipit.senectus et netus et malesuada fames ac turpis
                    egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-[15px]  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt
                    suscipit.senectus et netus et malesuada fames ac turpis
                    egestas. Nam eu nunc non augue tincidunt suscipit.senectus
                    et netus et malesuada fames ac tsuscipit.senectus et netus
                  </p>
                </div>

                {/* Timeline Item */}
                <div className="relative mb-8">
                  {/* <div className="absolute w-2 h-2 bg-purple-600 rounded-full -left-7 top-2"></div> */}

                  <h3 className="font-semibold text-gray-800 dark:text-white ">
                    Junior Front-end Developer
                  </h3>
                  <p className="mt-2 text-sm  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-sm  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-sm relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-sm relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
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
                <div className="relative mb-8">
                  {/* Timeline Bullet */}
                  {/* <div className="absolute w-2 h-2 bg-purple-600 rounded-full -left-7 top-2"></div> */}

                  {/* Content */}
                  <h3 className="font-semibold ">London metro</h3>
                  <p className="mt-2 text-[15px]  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt
                    suscipit.senectus et netus et malesuada fames ac turpis
                    egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-[15px]  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt
                    suscipit.senectus et netus et malesuada fames ac turpis
                    egestas. Nam eu nunc non augue tincidunt suscipit.senectus
                    et netus et malesuada fames ac tsuscipit.senectus et netus
                  </p>
                </div>

                {/* Timeline Item */}
                <div className="relative mb-8">
                  {/* <div className="absolute w-2 h-2 bg-purple-600 rounded-full -left-7 top-2"></div> */}

                  <h3 className="font-semibold ">
                    Junior Front-end Developer
                  </h3>
                  <p className="mt-2 text-sm  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-sm relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-sm  relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
                  </p>
                  <p className="mt-2 text-sm relative before:content-['•'] before:text-purple-600 before:mr-2 before:inline-block">
                    In hac habitasse platea dictumst. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam eu nunc non augue tincidunt suscipit.
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
