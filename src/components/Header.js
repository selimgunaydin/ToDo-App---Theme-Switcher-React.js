import { React, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme, setSelectedTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (theme == "Light") {
      setTheme("Dark");
      setSelectedTheme("bg-gray-700 text-white ");
    } else {
      setTheme("Light");
      setSelectedTheme("bg-light text-black ");
    }
  }

  return (
    <div>
      <div className="flex flex-row shadow-lg py-3">
        <div className="basis-1/4 text-center">
          <a href="" className="text-3xl">
            React.js
          </a>
        </div>
        <div className="basis-3/4 flex items-center justify-end">

          <button className="mr-8 px-4 border rounded-full shadow" onClick={changeTheme}>
            Active Theme: {theme}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
