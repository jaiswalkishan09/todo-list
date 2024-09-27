import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="overflow-auto h-screen bg-gradient-to-b from-[#0d080d2e] via-[#795bd42e] to-[#0a0a0a]">
      <div className="w-screen flex justify-center pt-[16px]">
        <Header />
      </div>
    </div>
  );
}

export default App;
