import React from "react";

import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Yentube from "./pages/Yentube";
import Netflix from "./pages/Netflix";
import Cards from "./pages/Cards";

function App() {
  return (
    <div className="text-white text-2xl font-bold  ">
      <Nav />
      <article className=" w-4/5 ">
        <Profile />
        <Projects />
        <Yentube />
        <Netflix />
        <Cards />
      </article>
    </div>
  );
}

export default App;
