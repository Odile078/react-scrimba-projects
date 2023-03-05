import CardsList from "./components/CardsList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[550px] mx-auto pb-6">
      <Navbar />
      <Hero />
      <CardsList />
    </div>
  );
}

export default App;
