import React, { ReactNode } from "react";

interface IContainer {
  linkName: string;
  children: ReactNode;
}
const Container = ({ linkName, children }: IContainer) => {
  return (
    <div className="flex flex-col justify-between w-96 h-[500px] my-3.5 px-5 py-7 bg-black">
      <img src={require(`../Images/${linkName}.png`)} alt="" />
      <div className="text-3xl my-3">{linkName}</div>
      {children}
    </div>
  );
};

export default Container;
