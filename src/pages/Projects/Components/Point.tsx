import React from "react";

interface IPonint {
  linkName: string;
}
const Point = ({ linkName }: IPonint) => {
  const basic = {
    Yentube: ["Google APIs", "반응형", "무한 스크롤", "Dark Mode"],
  };

  let basicUsed: string[] = [];

  for (const [keys, values] of Object.entries(basic)) {
    keys === linkName && values.map((value) => basicUsed.push(value));
  }

  return (
    <div>
      {basicUsed.map((item, i) => (
        <span
          className="inline-block px-2 py-0.5 mr-1 border rounded-lg bg-white text-black text-sm font-normal"
          key={i}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Point;
