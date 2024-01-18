// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  // State for mega menus
  const [megaMenu1Open, setMegaMenu1Open] = useState(false);
  const [megaMenu2Open, setMegaMenu2Open] = useState(false);
  const [megaMenu3Open, setMegaMenu3Open] = useState(false);

  // Ref to store the mega menu container
  const megaMenuRef = useRef(null);

  // Function to close all mega menus
  const closeAllMenus = () => {
    setMegaMenu1Open(false);
    setMegaMenu2Open(false);
    setMegaMenu3Open(false);
  };

  // Close mega menus when clicking outside
  const handleOutsideClick = (event) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
      closeAllMenus();
    }
  };

  // Attach click event listener on mount
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav className="bg-white fixed top-0 border-b-[1px] border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center md:mx-20 mx-3 max-w-screen-xl p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div
          id="mega-menu-full"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => {
                  setMegaMenu1Open(!megaMenu1Open);
                  setMegaMenu2Open(false);
                  setMegaMenu3Open(false);
                }}
              >
                Courses{" "}
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button-2"
                data-collapse-toggle="mega-menu-full-dropdown-2"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => {
                  setMegaMenu1Open(false);
                  setMegaMenu2Open(!megaMenu2Open);
                  setMegaMenu3Open(false);
                }}
              >
                Services{" "}
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button-3"
                data-collapse-toggle="mega-menu-full-dropdown-3"
                className=" relative flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => {
                  setMegaMenu1Open(false);
                  setMegaMenu2Open(false);
                  setMegaMenu3Open(!megaMenu3Open);
                }}
              >
                Insights{" "}
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        className={`mt-1 bg-white  border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ${
          megaMenu1Open ? "block" : "hidden"
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  BRIDGING DEVELOPMENT & SECURITY
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2 pt-3">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/DEVOPS ">DEVOPS COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/CYBER SECURITY ">
                        CYBER SECURITY COURSE
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  DATA INTELLIGENCE SPECIALIZATION
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/DATA ANALYST COURSE">
                        DATA ANALYST COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/DATABASE ADMINISTRATOR COURSE">
                        DATABASE ADMINISTRATOR COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/DATA SCIENCE COURSE">
                        DATA SCIENCE COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/MACHINE LEARNING COURSE">
                        MACHINE LEARNING COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/DATA ENGINEER COURSE">
                        DATA ENGINEER COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/TABLEAU COURSE">TABLEAU COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/POWERBI COURSE">POWERBI COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/UI/UX COURSE">UI/UX COURSE</Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
          </ul>
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  SOFTWARE TESTING TECHNIQUES
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2 pt-3">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/MANUAL TESTING">
                        MANUAL TESTING (QA) COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/AUTOMATION TESTING">
                        AUTOMATION TESTING COURSE
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
            <li>
              <Link
                to="#"
                className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  WEB DEVELOPMENT TECHNOLGOIES
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/.NET CORE FULL STACK">
                        .NET CORE FULL STACK COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/JAVA FULL STACK ">
                        JAVA FULL STACK COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/PYTHON WEB ">PYTHON WEB COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/ANGULAR">ANGULAR COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/REACT JS">REACT JS COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/MERN STACK">MERN STACK COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/MEAN STACK">MEAN STACK COURSE</Link>
                    </li>
                  </ul>
                </span>
              </Link>
            </li>
          </ul>
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  MOBILE APP DEVELOPMENT MASTERY
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2 pt-3">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/Android DEVELOPMENT">
                        ANDROID APP DEVELOPMENT COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/FLUTTER APP DEVELOPMENT">
                        FLUTTER APP DEVELOPMENT COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/IOS APP DEVELOPMENT">
                        IOS APP DEVELOPMENT COURSE
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  BUSINESS & PROJECT LEADERSHIP
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/BUINESS ANALYST ">
                        BUSINESS ANALYST COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/PROJECT MANAGER ">
                        PROJECT MANAGER COURSE
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/SCRUM MASTER">SCRUM MASTER COURSE</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/course/PRODUCT MANAGEMENT ">
                        PRODUCT MANAGEMENT COURSE
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown-2"
        className={`mt-1 bg-white border-gray-200 max-h-fit overflow-scroll shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ${
          megaMenu2Open ? "block" : "hidden"
        }`}
      >
        <div className="grid px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  STAFFING & RECRUITMENT SERVICES
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2 pt-3">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/USA IT STAFFING">
                        USA IT STAFFING
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/CANADA IT STAFFING">
                        CANADA IT STAFFING
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/TALENT ACQUISITION">
                        TALENT ACQUISITION
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
          </ul>
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  SOFTWARE DEVELOPMENT SERVICES
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2 pt-3">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/WEBSITE DEVELOPMENT">
                        WEBSITE DEVELOPMENT
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/MOBILE APPLICATIONS DEVELOPMENT">
                        MOBILE APPLICATIONS DEVELOPMENT
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/CUSTOMIZED PLATFORMS">
                        CUSTOMIZED PLATFORMS
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
          </ul>
          <ul aria-labelledby="mega-menu-full-dropdown-button">
            <li>
              <div className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold text-blue-600 border-b pb-3 border-blue-950">
                  CLOUD SERVICES
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2 pt-3">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/DEVOPS SERVICES">
                        DEVOPS SERVICES
                      </Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/services/ON-DEMAND CLOUD SERVICES">
                        ON-DEMAND CLOUD SERVICES
                      </Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown-3"
        className={`mt-1 bg-white border-gray-200 max-h-fit overflow-scroll shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ${
          megaMenu3Open ? "block" : "hidden"
        }`}
      >
        <div className="grid md:absolute px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-7 md:px-6">
          <ul
            aria-labelledby="mega-menu-full-dropdown-button"
            className="md:col-start-6 md:ml-16"
          >
            <li>
              <div className="block p-3 bg-white border-2 border-blue-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400 ">
                  <ul className="space-y-2 pt-3">
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/Blogs">Blogs</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/FAQS">FAQS</Link>
                    </li>
                    <li className="hover:text-blue-500 duration-500">
                      <Link to="/HALL OF fAME">HALL OF fAME</Link>
                    </li>
                  </ul>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
