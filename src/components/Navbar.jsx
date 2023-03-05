import React from "react";
import logo from "../assets/airbnb 1.svg";
function Navbar() {
  return (
    <div className="p-6 bg-white shadow-xl">
      <img src={logo} className="object-cover object-center" />
    </div>
  );
}

export default Navbar;
