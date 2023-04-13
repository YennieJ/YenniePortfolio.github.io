import React from "react";

interface IUsed {
  linkName: string;
}
const Used = ({ linkName }: IUsed) => {
  const basic = {
    Yentube: ["React", "CSS Module", "JavaScript"],
    temp: ["A", "CSS Module", "JavaScript"],
  };
  const extend = {
    Yentube: ["Axios", "React Query", "React Hook Form", "Recoil", "Netlify"],
  };

  let basicUsed: string[] = [];
  let extendUsed: string[] = [];

  for (const [keys, values] of Object.entries(basic)) {
    keys === linkName && values.map((value) => basicUsed.push(value));
  }
  for (const [keys, values] of Object.entries(extend)) {
    keys === linkName && values.map((value) => extendUsed.push(value));
  }

  const used =
    "inline-block px-1.5 py-0.5 mr-1 border rounded-lg text-xs font-normal";

  return (
    <div>
      {basicUsed.map((item, i) => (
        <span className={used} key={i}>
          {item}
        </span>
      ))}
      <br />
      {extendUsed.map((item, i) => (
        <span className={used} key={i}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default Used;
