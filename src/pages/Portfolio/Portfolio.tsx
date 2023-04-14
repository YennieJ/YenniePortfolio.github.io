import React from "react";

import entire from "./Images/entire.png";
import entireCode from "./Images/entireCode.png";

import LinkContainer from "../Projects/Components/LinkContainer";
import Used from "../Projects/Components/Used";
import Table from "./Components/Table";
import ExplainContainer from "./Components/ExplainContainer";

const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className="flex flex-col items-center min-h-screen h-full max-h-fit py-20  bg-rose-700 2xl:py-5"
    >
      <LinkContainer projectName="Portfolio" />
      <Used projectName="Portfolio" />
      <Table />
      <div className="w-full p-3 text-neutral-800 md:px-6">
        <div className="px-3 pb-4 bg-rose-100">
          <h2 className="text-3xl leading-loose ">재사용 Components</h2>
          <p className="text-base font-semibold">
            진행했던 프로젝트를 바탕으로 최소한의 중복을 생각하며 코드짜는데
            집중했다.
          </p>
        </div>
        <div className="bg-white">
          <img src={entire} alt="entire" className="mb-4" />
          <div className="px-3 ">
            <div className=" text-lg font-semibold border-b border-slate-700 mb-3">
              props로 projectName을 넘겨주어 썸네일,제목,사용한 툴,링크를
              결정한다.
            </div>
            <img src={entireCode} alt="entireCode" />
          </div>
          <div className="px-3 ">
            <ExplainContainer title="ProjectContainer" />
            <ExplainContainer title="Used" />
            <ExplainContainer title="LinkContainer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
