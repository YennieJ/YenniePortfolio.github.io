import React, { useState } from "react";

import { BsCaretRightFill } from "react-icons/bs";

// 자기소개서

const Introduce = () => {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <div className=" mb-10 lg:px-5 xl:px-10">
      <div
        className={
          "flex items-center py-3 pl-1 border bg-stone-500 cursor-pointer transition-all duration-150 hover:bg-stone-400 hover:duration-0 " +
          (introOpen && "rounded-t-xl")
        }
        onClick={() => setIntroOpen(!introOpen)}
      >
        <BsCaretRightFill
          className={
            "inline-block mr-2 transition-transform duration-150 " +
            (introOpen && "rotate-90")
          }
        />
        <span>개발자를 꿈꾸기 전에</span>
      </div>

      <pre
        className={
          "border rounded-b-xl bg-white  text-neutral-800 transition-all duration-150 " +
          (introOpen ? "opacity-1" : " opacity-0 h-0")
        }
      >{`asdf
asdf
asdf
asdf
asdf
asdf
`}</pre>
    </div>
  );
};

export default Introduce;
