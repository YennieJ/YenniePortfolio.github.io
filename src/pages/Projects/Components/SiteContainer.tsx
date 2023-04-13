import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface ISiteContainer {
  CD?: boolean;
  projectName: string;
}

const SiteContainer = ({ CD, projectName }: ISiteContainer) => {
  const onClick = (urlName: string) => {
    const url: any =
      (projectName === "Yentube" &&
        (urlName === "git"
          ? "https://github.com/YennieJ/clone_youtube"
          : "https://yentube.store/")) ||
      (projectName === "Netflix" &&
        urlName === "git" &&
        "https://github.com/YennieJ/clone_netflix") ||
      (projectName === "Cards" &&
        urlName === "git" &&
        "https://github.com/YennieJ/homepage-typescript") ||
      (projectName === "Portfolio" &&
        urlName === "git" &&
        "https://github.com/YennieJ/portfolio");

    window.open(url);
  };

  return (
    <div>
      <AiFillGithub
        className="text-4xl  hover:fill-black float-right  cursor-pointer "
        onClick={(e) => onClick("git")}
      />
      {CD && (
        <AiOutlineLink
          className="text-4xl  hover:fill-black float-right mr-3  cursor-pointer "
          onClick={(e) => onClick("site")}
        />
      )}
    </div>
  );
};

export default SiteContainer;
