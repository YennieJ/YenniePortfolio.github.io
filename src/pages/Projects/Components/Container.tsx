import React, { ReactNode } from "react";

interface IContainer {
  projectName: string;
  children: ReactNode;
}

const Container = ({ projectName, children }: IContainer) => {
  return (
    <div className="flex flex-col w-96 h-[500px] my-3.5 px-5 py-7 bg-black">
      <img src={require(`../Images/${projectName}.png`)} alt="" />
      <div className="text-3xl my-3">{projectName}</div>
      {children}
    </div>
  );
};

export default Container;
