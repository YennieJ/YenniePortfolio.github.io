import React from "react";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-wrap-reverse justify-around items-center min-h-screen h-full max-h-fit py-20 bg-green-950 2xl:py-5 "
    >
      <Link
        to="yentube"
        spy={true}
        smooth={true}
        duration={300}
        className="w-96 h-96 my-3.5 bg-black cursor-pointer "
      >
        Yentube
      </Link>
      <Link
        to="netflix"
        spy={true}
        smooth={true}
        duration={300}
        className="w-96 h-96 my-3.5 bg-black cursor-pointer"
      >
        Netflix
      </Link>
      <Link
        to="cards"
        spy={true}
        smooth={true}
        duration={300}
        className="w-96 h-96 my-3.5 bg-black cursor-pointer"
      >
        Cards
      </Link>
    </div>
  );
};

export default Projects;
