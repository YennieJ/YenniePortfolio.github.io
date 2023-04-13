import React, { ReactNode } from "react";
import { Link } from "react-scroll";

interface ILinkCintauner {
  linkName: string;
  children: ReactNode;
}
const LinkContainer = ({ linkName, children }: ILinkCintauner) => {
  return (
    <Link
      to={linkName}
      spy={true}
      smooth={true}
      duration={300}
      className="flex flex-col justify-between w-96 h-[500px] my-3.5 px-5 py-7 bg-black cursor-pointer "
    >
      <img src={require(`../Images/${linkName}.png`)} alt="" />
      <div className="text-3xl my-2">{linkName}</div>
      {children}
    </Link>
  );
};

export default LinkContainer;
