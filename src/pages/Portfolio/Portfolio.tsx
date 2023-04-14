import React from "react";

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
      <Used linkName="Portfolio" />
      <Table />
      <div className="w-full h-screen border p-3 md:px-6">
        <h2 className="text-3xl leading-loose">재사용 Components</h2>
        <div className="bg-black h-full flex flex-col md:flex-row">
          <div className="flex-1 border-4 border-blue-800">
            <img src="" alt="entire" />
            <div>code</div>
          </div>
          <div className="flex-1 border">
            <div className="flex flex-col ">
              <img src="" alt="container" />
              <div className="">code</div>
            </div>
            <div className="flex flex-col ">
              <img src="" alt="used" />
              <div className="">code</div>
            </div>
            <div className="flex flex-col ">
              <img src="" alt="link" />
              <div className="">code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
