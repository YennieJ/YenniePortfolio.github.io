import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Used from "../components/Used";

import { BsCaretRightFill, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const Profile = () => {
  const [introOpen, setIntroOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  const form = useRef<any>(null);

  const handleEmailForm = () => {
    if (emailOpen) {
      if (window.confirm("뒤로 돌아갈까요?") === true) {
        return (
          form.current.reset(),
          setEmailOpen(false),
          (document.body.style.overflow = "auto"),
          (document.body.style.marginRight = "0")
        );
      } else {
        return;
      }
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";

      setEmailOpen(true);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.confirm("이메일을 보내겠습니까?") === true) {
      return emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          () => {
            window.alert("이메일이 성공적으로 보내졌습니다.");
          },
          () => {
            window.alert("이메일 보내기에 실패했습니다.");
          }
        );
    } else {
      return;
    }
  };

  const inputCss =
    "min-w-full px-3 mb-3 border rounded-lg bg-white text-neutral-800 font-normal";

  return (
    <div
      id="profile"
      className="flex items-center min-h-screen h-full px-3 py-20 bg-stone-800 "
    >
      <div className="w-full">
        <div className="flex justify-center items-baseline mb-5 lg:mb-20">
          <h1 className="inline-block text-7xl mr-5 underline underline-offset-8">
            Yennie
          </h1>
          <span className="font-normal">FE Developer</span>
        </div>
        <div className="flex flex-col mb-10 lg:flex-row-reverse lg:justify-around ">
          <div className="flex justify-center mb-8 ">
            <div className="mr-3 ">이예진</div>
            <ul className="pl-3 border-l-4 ">
              <li>
                <CgMail className="inline-block mr-2" />
                <span
                  className="font-normal hover:underline underline-offset-8 cursor-pointer "
                  onClick={handleEmailForm}
                >
                  l.yennie.j@gmail.com
                </span>
              </li>
              <li>
                <BsGithub className="inline-block mr-2" />
                <a
                  href="https://github.com/YennieJ"
                  target="blank"
                  className="font-normal hover:underline underline-offset-8 cursor-pointer"
                >
                  github.com/YennieJ
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-3/5">
            <div className="text-4xl leading-relaxed">About me</div>
            <ul className="ml-4 text-base font-normal list-disc list-inside">
              <li className="">
                <span className="-ml-2">
                  목표가 정해지면 계획을 세우고 효율적으로 빠르게 달성 하는 것을
                  좋아합니다.
                </span>
              </li>
              <li>
                <span className="-ml-2">
                  새로운 것을 배워서 알맞게 사용해 목표에 달성했을 때 큰
                  <b className=" text-lg"> 성취감</b>을 느낍니다.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mb-10 lg:px-5 xl:px-10">
          <div
            className={
              " flex items-center py-3 pl-1 border  bg-stone-500 transition-all duration-150 " +
              (introOpen ? "rounded-t-xl" : "")
            }
          >
            <BsCaretRightFill
              className={
                " inline-block mr-2 cursor-pointer transition-transform duration-150 hover:bg-stone-400 " +
                (introOpen ? "rotate-90" : "")
              }
              onClick={() => setIntroOpen(!introOpen)}
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
        <Used projectName="Profile" />
      </div>
      <div
        className={
          emailOpen
            ? "flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 "
            : "hidden"
        }
        onClick={handleEmailForm}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-between w-[400px] h-[500px] py-5 px-3 border rounded-2xl bg-stone-500 text-sm "
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="mb-3 text-2xl">To Yennie</div>
            <input
              name="subject"
              placeholder="제목"
              className={"h-10 " + inputCss}
            />
          </div>

          <textarea
            name="message"
            placeholder="메세지"
            className={"h-40 pt-2 " + inputCss}
          />
          <div>
            <input
              name="contect"
              placeholder="연락처 혹은 이메일"
              className={"h-10 " + inputCss}
            />
            <input
              name="from_name"
              placeholder="보내는 이"
              className={"h-10 " + inputCss}
            />
          </div>
          <button className="py-2 bg-black text-2xl">send</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
