import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const SiteContainer = () => {
  const onClick = (
    e: React.BaseSyntheticEvent<
      MouseEvent,
      EventTarget & SVGElement,
      EventTarget
    >,
    urlName: string
  ) => {
    const url =
      urlName === "git" ? "https://www.google.com" : "https://www.naver.com";

    e.stopPropagation();
    window.open(url);
  };

  return (
    <div>
      <AiFillGithub
        className="text-4xl  hover:fill-black float-right "
        onClick={(e) => onClick(e, "git")}
      />
      <AiOutlineLink
        className="text-4xl  hover:fill-black float-right mr-3 "
        onClick={(e) => onClick(e, "site")}
      />
    </div>
  );
};

export default SiteContainer;
