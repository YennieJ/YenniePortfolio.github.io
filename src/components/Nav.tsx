import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="flex items-center fixed top-0 right-0 w-1/5 h-screen bg-yellow-500 cursor-pointer">
      <ul className="w-full text-7xl  ">
        <li className="flex flex-col items-center h-full leading-loose ">
          <Link
            to="profile"
            spy={true}
            smooth={true}
            duration={300}
            className="w-full pl-8 hover:bg-black "
            activeClass="w-full pl-8 bg-black cursor-default"
          >
            Profile
          </Link>
        </li>
        <li className="flex flex-col  items-center leading-loose">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={100}
            className="w-full pl-8 hover:bg-black "
            activeClass="w-full pl-8 bg-black cursor-default"
          >
            Projects
          </Link>

          <ul className="w-full text-4xl  leading-loose">
            <li className="group flex justify-center items-center relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full  group-hover:opacity-0 transition ease-in delay-150 duration-300" />
              <Link
                to="yentube"
                spy={true}
                smooth={true}
                duration={100}
                className="w-full bg-red-600 text-center opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 duration-300"
                activeClass="opacity-100 w-full bg-black z-10 cursor-default"
              >
                Yentube
              </Link>
            </li>
            <li className="group flex justify-center items-center relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full  group-hover:opacity-0 transition ease-in delay-150 duration-300" />
              <Link
                to="netflix"
                spy={true}
                smooth={true}
                duration={100}
                className="w-full bg-red-600 text-center opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 duration-300"
                activeClass="opacity-100 w-full bg-black z-10 cursor-default"
              >
                Netflix
              </Link>
            </li>
            <li className="group flex justify-center items-center relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-600 rounded-full  group-hover:opacity-0 transition ease-in delay-150 duration-300" />
              <Link
                to="cards"
                spy={true}
                smooth={true}
                duration={100}
                className="w-full bg-red-600 text-center opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 duration-300"
                activeClass="opacity-100 w-full bg-black z-10 cursor-default"
              >
                Cards
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
