import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./components/Home";
import Test from "./components/Test";
import yellowBlob from "./assets/images/blobs-yellow.png";
import blueBlob from "./assets/images/blobs-blue.png";
function App() {
  const [startTest, setStartTest] = useState(false);

  return (
    <div className="min-h-screen bg-brandBlue-lighter">
      <div className="relative max-w-5xl mx-auto">
        {startTest ? (
          <Test />
        ) : (
          <Home startTest={startTest} setStartTest={setStartTest} />
        )}
      </div>
      <img
        src={yellowBlob}
        alt="blob yellow"
        className="object-cover object-center absolute top-0 right-0"
      />
      <img
        src={blueBlob}
        alt="blob blue"
        className="object-cover object-center absolute bottom-0 left-0"
      />
    </div>
  );
}

export default App;
