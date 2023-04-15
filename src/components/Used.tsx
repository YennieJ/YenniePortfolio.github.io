import React from "react";

interface IUsed {
  projectName: string;
}
const Used = ({ projectName }: IUsed) => {
  const others = projectName === "Portfolio" || projectName === "Profile";

  const basic = {
    Profile: ["React", "JavaScript", "TypeScript", "Styled Components"],
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
    keys === projectName && values.map((value) => basicUsed.push(value));
  }
  for (const [keys, values] of Object.entries(extend)) {
    keys === projectName && values.map((value) => extendUsed.push(value));
  }

  const projectUsed = `inline-block px-1.5 py-0.5 mr-1 border rounded-lg text-xs font-normal`;
  const othersUsed =
    "flex items-center px-2 py-1 mx-1 mb-4 border-2 rounded-xl text-lg font-bold md:text-3xl";

  return (
    <div className={`${others && "flex justify-center mb-4"}   `}>
      {basicUsed.map((item, i) => (
        <span className={others ? othersUsed : projectUsed} key={i}>
          {item}
        </span>
      ))}
      {!others && (
        <>
          <br />
          {extendUsed.map((item, i) => (
            <span className={projectUsed} key={i}>
              {item}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default Used;
