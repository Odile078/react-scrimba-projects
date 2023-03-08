import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="bg-orange-100">
      <div
        className={`${
          darkMode ? "bg-gray-700 text-white" : "bg-white  text-gray-800"
        } flex flex-col h-screen max-w-4xl mx-auto max-h-screen`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
