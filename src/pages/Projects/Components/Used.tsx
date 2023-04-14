import React from "react";

interface IUsed {
  linkName: string;
}
const Used = ({ linkName }: IUsed) => {
  const Portfolio = linkName === "Portfolio";

  const basic = {
    Yentube: ["React", "CSS Module", "JavaScript"],
    Netflix: ["React", "Styled Components", "TypeScript"],
    Cards: ["React", "Styled Components", "TypeScript"],
    Portfolio: ["React", "Tailwindcss", "TypeScript", "TypeScript"],
  };

  const extend = {
    Yentube: ["Axios", "React Query", "React Hook Form", "Recoil", "Netlify"],
    Netflix: ["Axios", "React Router", "React Query", "React Hook Form"],
    Cards: ["Axios", "React Query", "React Hook Form", "Recoil"],
  };

  let basicUsed: string[] = [];
  let extendUsed: string[] = [];

  for (const [keys, values] of Object.entries(basic)) {
    keys === linkName && values.map((value) => basicUsed.push(value));
  }
  for (const [keys, values] of Object.entries(extend)) {
    keys === linkName && values.map((value) => extendUsed.push(value));
  }

  const used = `inline-block px-1.5 py-0.5 mr-1 border rounded-lg text-xs font-normal`;

  const portfolioUsed =
    "px-2 py-1 border-2 rounded-lg text-xl font-bold md:text-3xl";

  return (
    <div
      className={`${Portfolio && "flex justify-around w-[480px] md:w-[700px"}`}
    >
      {basicUsed.map((item, i) => (
        <span className={Portfolio ? portfolioUsed : used} key={i}>
          {item}
        </span>
      ))}
      {!Portfolio && (
        <>
          <br />
          {extendUsed.map((item, i) => (
            <span className={used} key={i}>
              {item}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default Used;
