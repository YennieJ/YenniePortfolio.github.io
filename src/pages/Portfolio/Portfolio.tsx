import React from "react";

import entire from "./Images/entire.png";
import entireCode from "./Images/entireCode.png";

import container from "./Images/container.png";
import containerCode from "./Images/containerCode.png";

import used from "./Images/used.png";
import usedCode from "./Images/usedCode.png";

import link from "./Images/link.png";
import linkCode from "./Images/linkCode.png";

import LinkContainer from "../Projects/Components/LinkContainer";

import Used from "../Projects/Components/Used";
import Table from "./Components/Table";

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
            <div className="flex justify-between">
              <div className="px-3">
                <div className="text-2xl">Container</div>
                <div className="text-base font-semibold border-b border-slate-700 mb-3">
                  projectName으로 썸네일과 제목을 정하고 JSX를 사용 할 수 있게
                  children 사용
                </div>
                <img src={containerCode} alt="" />
              </div>
              <img src={container} alt="container" className="w-1/3 " />
            </div>
            <div className="flex justify-between">
              <div className="px-3">
                <div className="text-2xl">Used</div>
                <div className="text-base font-semibold border-b border-slate-700 mb-3">
                  projectName과 동일한 이름의 배열을 찾아 map 사용
                </div>
                <img src={usedCode} alt="" />
              </div>
              <img src={used} alt="container" className="w-1/3" />
            </div>
            <div className="flex justify-between">
              <div className="px-3">
                <div className="text-2xl">LikeContainer</div>
                <div className="text-base font-semibold border-b border-slate-700 mb-3">
                  projectName에 따라 깃허브 주소를 변경하고 props로 CD의 유무를
                  파악해서 UI
                </div>
                <img src={linkCode} alt="" />
              </div>
              <img src={link} alt="container" className="w-1/3 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
