import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Dashbord from "./components/Dashbord";

function App() {
  return (
    <div className="overflow-auto h-screen bg-gradient-to-b from-[#09051b] to-[#0a061d]">
      <div className="w-screen flex justify-center pt-[16px]">
        <Header />
      </div>
      <div>
        <div className="mt-[102px] ml-[100px]">
          <Dashbord />
        </div>
      </div>
    </div>
  );
}

export default App;
