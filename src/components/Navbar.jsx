import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className=" hidden md:flex lg:flex md:justify-between lg:justify-between p-5 pl-20 pr-20 items-center w-[100vw] flex-wrap h-[100vh]  md:h-auto lg:h-auto flex-col md:flex-row lg:flex-row fixed z-[99] shadow-md backdrop-blur-md">
        <div>
          <h1 className=" font-Koho font-bold text-2xl text-[#D9ECFF] pr-5">
            TutorsForum
          </h1>
        </div>
        <div className=" flex space-x-16 items-center flex-col md:flex-row lg:flex-row  w-full lg:w-auto justify-between">
          <div>
            <ul className=" flex space-x-7 font-Inter text-[#D9ECFF] flex-col md:flex-row lg:flex-row ">
              <li>Home</li>
              <li>Courses</li>
              <li>Partners</li>
              <li>Universities</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <button className=" font-Poppins text-[#FFFFFF] border-2 border-white p-2 rounded-full w-28">
              SignUp
            </button>
          </div>
        </div>
      </nav>


{/* mobile navbar */}

      <nav className={` flex md:hidden lg:hidden justify-between flex-col backdrop-blur-md fixed z-[99] w-full `}>
        <div className=" flex space-x-5  justify-between  p-5">
          <div className=" flex items-center space-x-5  ">
            <button
              onClick={toggleNavbar}
              type="button"
              className="focus:outline-none flex"
            >
              <div className="  w-8 h-8 flex flex-col justify-between">
                <span
                  className={`block h-1 w-full rounded bg-white transition-transform transform ${
                    isOpen ? "rotate-45 translate-y-4" : "translate-y-0"
                  }`}
                ></span>
                <span
                  className={`block h-1 w-full rounded bg-white transition-opacity ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-1 w-full rounded bg-white transition-transform transform ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0"
                  }`}
                ></span>
              </div>
            </button>

            <h1 className=" max-[381px]:text-xl font-Koho font-bold text-3xl text-[#D9ECFF]">
              TutorsForum
            </h1>
          </div>

          <div>
            <button className="max-[381px]:w-auto max-[381px]:p-1 font-Poppins text-[#FFFFFF] border-2 border-white p-2 rounded-full w-28">
              SignUp
            </button>
          </div>
        </div>

        <div
          className={`top-20 left-0 w-[100vw] h-[100vh] mt-1  items-center bg-[#142941] text-white fixed  z-[999]  ease-in-out duration-300 ${
            isOpen ? "translate-x-0 " : "-translate-x-full"
          }`}
        >
          <ul className=" w-full h-[40%] mt-24  justify-center space-y-10 flex  items-center font-Inter text-[#D9ECFF] flex-col text-2xl">
            <li>Home</li>
            <li>Courses</li>
            <li>Partners</li>
            <li>Universities</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
