import React from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface ILinkContainer {
  projectName: string;
  CD?: boolean;
}

const LinkContainer = ({ CD, projectName }: ILinkContainer) => {
  const onClick = (urlName: string) => {
    const yentube = projectName === "Yentube";
    const netflix = projectName === "Netflix";
    const cards = projectName === "Cards";
    const portfolio = projectName === "Portfolio";

    const url: any =
      (yentube &&
        (urlName === "git"
          ? "https://github.com/YennieJ/clone_youtube"
          : "https://yentube.store/")) ||
      (netflix &&
        urlName === "git" &&
        "https://github.com/YennieJ/clone_netflix") ||
      (cards &&
        urlName === "git" &&
        "https://github.com/YennieJ/homepage-typescript") ||
      (portfolio &&
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
        onClick={() => onClick("git")}
      />
      {CD && (
        <AiOutlineLink
          className={`${gitHubClassName} mr-3`}
          onClick={() => onClick("site")}
        />
      )}
    </div>
  );
};

export default LinkContainer;
