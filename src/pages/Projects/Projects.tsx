import React from "react";

import LinkContainer from "./Components/LinkContainer";
import Point from "./Components/Point";
import Used from "./Components/Used";
import SiteContainer from "./Components/SiteContainer";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-wrap-reverse justify-around items-center min-h-screen h-full max-h-fit py-20 bg-green-950 2xl:py-5 "
    >
      <LinkContainer linkName="Yentube">
        <div className="flex flex-col justify-between h-2/5 mb-5">
          <Used linkName="Yentube" />
          <Point linkName="Yentube" />
        </div>
        <SiteContainer />
      </LinkContainer>

      <LinkContainer linkName="Netflix">
        <div className="flex flex-col justify-between h-2/5 mb-5">
          <Used linkName="Netflix" />
          <Point linkName="Netflix" />
        </div>
        <SiteContainer />
      </LinkContainer>
      <LinkContainer linkName="Cards">
        <div className="flex flex-col justify-between h-2/5 mb-5">
          <Used linkName="Cards" />
          <Point linkName="Cards" />
        </div>
        <SiteContainer />
      </LinkContainer>
    </div>
  );
};

export default Projects;
