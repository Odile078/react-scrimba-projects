import React from "react";
import logo from "../assets/troll-face.svg";
function Header() {
  return (
    <div className="from-purple-800 to-purple-500 bg-gradient-to-r flex items-center justify-between flex-wrap gap-4 px-4 py-5 sm:px-9">
      <div>
        <img
          src={logo}
          alt="logo"
          className="object-cover object-center text-xl -tracking-widest"
        />
        <p className="text-white">Meme Generator</p>
      </div>
      <p className="text-white text-sm">React Course - Project 3</p>
    </div>
  );
}

export default Header;
