import { useState } from "react";
import reactLogo from "../assets/react.svg";
function Header({ darkMode, setDarkMode }) {
  const handleModeChange = () => setDarkMode(!darkMode);
  console.log(darkMode);
  return (
    <header
      className={`${darkMode ? "bg-gray-800" : "bg-white"} p-4 shadow-xl`}
    >
      <nav className="flex flex-col sm:flex-row gap-3 sm:justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={reactLogo} width="40px" />
          <h5 className="text-cyan-500 font-bold text-2xl">React Facts</h5>
        </div>
        <div className="flex items-center gap-2">
          <p
            className={`${
              darkMode ? " text-white" : "font-bold text-gray-800"
            }`}
          >
            Light
          </p>
          <div
            className={`${
              darkMode ? "bg-white" : "bg-gray-900"
            } rounded-2xl w-8 h-4 flex transition-all duration-300 ease-in-out`}
          >
            <button
              onClick={handleModeChange}
              className={`${
                darkMode ? "translate-x-4" : "translate-x-0"
              } transform duration-300 w-4 h-4 bg-white border border-gray-900 rounded-full`}
            ></button>
          </div>
          <p>Dark</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
