import React from "react";

import { CgMail } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface IContect {
  setEmailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// email, github

const Contect = ({ setEmailOpen }: IContect) => {
  const openEmailForm = () => {
    document.body.style.overflow = "hidden";
    setEmailOpen(true);
  };

  return (
    <div className="flex justify-center mb-8 ">
      <div className="mr-4 ">이예진</div>
      <ul className="pl-4 border-l-4 ">
        <li>
          <CgMail className="inline-block mr-2" />
          <span
            className="font-normal cursor-pointer hover:underline underline-offset-8  "
            onClick={openEmailForm}
          >
            l.yennie.j@gmail.com
          </span>
        </li>
        <li>
          <BsGithub className="inline-block mr-2" />
          <a
            href="https://github.com/YennieJ"
            target="blank"
            className="font-normal leading-10 cursor-pointer hover:underline underline-offset-8 "
          >
            github.com/YennieJ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contect;
