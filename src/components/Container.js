import { React, useContext } from "react";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";
import ToDo from "../components/ToDo";

function Container() {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <div className={selectedTheme + "h-screen select-none"}>
      <Header />
      <ToDo />
      <hr />
    </div>
  );
}

export default Container;
