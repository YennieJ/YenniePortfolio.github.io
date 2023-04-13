import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="fixed top-0 w-full bg-yellow-500 2xl:flex items-center 2xl:right-0 2xl:w-1/5 2xl:h-screen">
      <ul className="w-full flex text-3xl 2xl:text-6xl 2xl:flex-col">
        <li className="flex flex-row items-center leading-loose ">
          <Link
            to="profile"
            spy={true}
            smooth={true}
            duration={300}
            className="w-full px-6 hover:bg-stone-800 cursor-pointer "
            activeClass="bg-stone-800 cursor-default"
          >
            Profile
          </Link>
        </li>

        <li className="flex flex-row items-center leading-loose 2xl:flex-col">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={100}
            className="w-full px-4 hover:bg-green-950 cursor-pointer "
            activeClass="w-full bg-green-950  cursor-default"
          >
            Projects
          </Link>
          <ul className="flex h-full text-2xl 2xl:flex 2xl:flex-col 2xl:w-full 2xl:text-4xl">
            <li className="group flex relative leading-loose cursor-pointer">
              <Link
                to="Portfolio"
                spy={true}
                smooth={true}
                duration={100}
                className="flex items-center w-12 h-full px-3 transition ease-in delay-150 duration-300 group-hover:bg-rose-700 sm:w-full sm:justify-center"
                activeClass="bg-rose-700 cursor-default [&_div]:bg-white sm:[&_div]:opacity-0 [&_span]:opacity-100"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-rose-700 rounded-full transition ease-in delay-150 duration-300 group-hover:bg-white sm:group-hover:opacity-0  2xl:w-6 2xl:h-6" />
                <span className="hidden sm:inline opacity-0 transition ease-in delay-150 duration-300 group-hover:opacity-100">
                  Portfolio
                </span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
