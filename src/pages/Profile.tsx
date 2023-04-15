import React, { useRef, useState } from "react";
import Used from "../components/Used";

import emailjs from "@emailjs/browser";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const form = useRef<any>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="profile"
      className="flex justify-center items-center h-screen px-3 py-20 bg-stone-800 "
    >
      <div className="w-full h-full border">
        <h1>Yennie: FE Developer</h1>
        <div className="">
          <div className="">
            <div>About me</div>
            <ul>
              <li>
                목표가 정해지면 계획을 세우고 효율적으로 빠르게 달성 하는것을
                좋아합니다.
              </li>
              <li>
                새로운 것을 배워서 알맞게 사용해 목표에 달성했을 때 큰 성취감을
                느낍니다.
              </li>
            </ul>
          </div>
          <div className="">
            <div>이예진</div>
            <ul>
              <li>Email:l.yennie.j@gmail.com</li>
              <li>
                Github:
                <a href="https://github.com/YennieJ" target="blank">
                  github.com/YennieJ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input name="subject" />
          <input name="message" />
          <input name="contect" />
          <input name="from_name" />
          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
