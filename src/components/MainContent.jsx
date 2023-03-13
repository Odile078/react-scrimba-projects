import React from "react";

function MainContent() {
  return (
    <div className="space-y-6 p-4 flex-1">
      <h1 className="font-bold text-start text-3xl">Fun facts about React</h1>
      <ul className="font-semibold list-disc mx-8 marker:text-cyan-400 text-start">
        <li className="">Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default MainContent;
