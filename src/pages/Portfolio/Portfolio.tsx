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
    </div>
  );
};

export default Portfolio;
