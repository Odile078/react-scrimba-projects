import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-orange-100 px-6 py-10 min-h-screen">
      <div className="max-w-3xl m-auto bg-slate-900 p-6">
        <div className="rounded-xl bg-gray-50 p-8 px-5">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
