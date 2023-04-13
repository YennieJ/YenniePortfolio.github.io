import React from "react";
import { Link } from "react-scroll";

import LinkContainer from "./Components/LinkContainer";
import Point from "./Components/Point";
import SiteContainer from "./Components/SiteContainer";
import Used from "./Components/Used";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-wrap-reverse justify-around items-center min-h-screen h-full max-h-fit py-20 bg-green-950 2xl:py-5 "
    >
      <LinkContainer linkName="Yentube">
        <div className="flex flex-col justify-between h-2/5 mb-4">
          <Used linkName="Yentube" />
          <Point linkName="Yentube" />
        </div>
        <SiteContainer />
      </LinkContainer>

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
