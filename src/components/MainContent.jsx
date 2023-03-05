import React from "react";
import memePic from "../assets/memeimg.png";
function MainContent() {
  return (
    <div className="p-5 sm:p-9 space-y-9">
      <div className="p-0 m-0 h-fit leading-[0]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-fit">
          <input
            type="text"
            placeholder="shut up"
            className="w-full bg-transparent border p-3 rounded-sm border-purple-800 outline-none focus:outline-none text-gray-800 placeholder:text-gray-800"
          />
          <input
            type="text"
            placeholder="shut up"
            className="w-full rounded-sm border p-3 border-purple-800 outline-none focus:outline-none text-gray-800 placeholder:text-gray-800"
          />
        </div>
        <button type="button"></button>
      </div>
      <div>
        <img
          src={memePic}
          alt="meme"
          className="object-cover object-center w-full"
        />
      </div>
    </div>
  );
}

export default MainContent;
