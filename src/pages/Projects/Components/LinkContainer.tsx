import React from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface ILinkContainer {
  CD?: boolean;
  projectName: string;
}

const LinkContainer = ({ CD, projectName }: ILinkContainer) => {
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

  const gitHubClassName =
    "float-right text-4xl cursor-pointer hover:fill-green-800";

  const portfolioClassName = "mb-5 text-6xl cursor-pointer hover:fill-black";
  return (
    <div>
      <AiFillGithub
        className={
          projectName === "Portfolio" ? portfolioClassName : gitHubClassName
        }
        onClick={(e) => onClick("git")}
      />
      {CD && (
        <AiOutlineLink
          className={`${gitHubClassName} mr-3`}
          onClick={(e) => onClick("site")}
        />
      )}
    </div>
  );
};

export default LinkContainer;
