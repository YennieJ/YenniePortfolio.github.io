import React from "react";

import LinkContainer from "./Projects/Components/LinkContainer";
import Used from "./Projects/Components/Used";

import { FaLightbulb } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className="flex flex-col items-center min-h-screen h-full max-h-fit py-20  bg-rose-700 2xl:py-5"
    >
      <LinkContainer projectName="Portfolio" />
      <Used linkName="Portfolio" />
      <br />
      <div className="flex flex-col items-center w-[470px] text-neutral-800 md:w-[700px]">
        <div className="flex justify-between items-center w-full border-4 border-b-0 border-double border-pink-800 rounded-t-2xl bg-rose-100">
          <div className="w-1/2 py-3 border-pink-800 border-r border-b text-center">
            <FaLightbulb className="inline fill-orange-600" /> 배운점
          </div>
          <div className="w-1/2 py-3 border-pink-800 border-b text-center">
            <FaLightbulb className="inline fill-stone-500" /> 개선점
          </div>
        </div>
        <div className="flex w-full border-4 border-t-0 border-double border-pink-800 rounded-b-2xl bg-white text-xl">
          <div className="w-1/2 py-3 border-pink-800 border-r text-center">
            <div>재사용 Components</div>
            <div>Tailwindcss</div>
          </div>
          <div className="w-1/2 py-3 text-center">
            <div>Next.Js 사용</div>
            <div>더 깔끔한 Tailwind</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
