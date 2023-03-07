import reactLogo from "./assets/react.svg";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  const journalList = [];

  return (
    <div className=" bg-emerald-100 py-6">
      <div className="max-w-5xl mx-auto border-2 border-white shadow-lg  rounded-2xl overflow-hidden">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
