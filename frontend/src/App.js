import "./App.css";
import Header from "./components/Header";
import Dashbord from "./components/Dashbord";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#09051b] to-[#261f42]">
      <div className="flex justify-center pt-4 md:w-screen bg-gradient-to-b from-[#09051b] to-[#0a061d]">
        <Header />
      </div>
      <div className="mt-4 md:mt-[102px] md:mx-[100px]">
        <div className="flex flex-wrap gap-3 md:grid md:grid-cols-12">
          <div className="md:col-span-5">
            <Dashbord />
          </div>
          <div className="md:col-span-7">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
