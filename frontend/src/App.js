import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Dashbord from "./components/Dashbord";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" h-screen bg-gradient-to-b from-[#09051b] to-[#261f42]">
      <div className="sm:w-screen flex justify-center pt-[16px] bg-gradient-to-b from-[#09051b] to-[#0a061d]">
        <Header />
      </div>
      <div>
        <div className="mt-4 sm:mt-[102px]  sm:ml-[100px] sm:mr-[110px]">
          <div className="sm:grid sm:grid-cols-12 flex flex-wrap  gap-3">
            <div className="sm:col-span-5">
              <Dashbord />
            </div>
            <div className="sm:col-span-7">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
