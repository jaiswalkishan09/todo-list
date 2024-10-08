import React, { useEffect, useState } from "react";
import TaskLoading from "./TaskLoading";
import ShowTask from "./ShowTask";

function TodoList() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState("");
  const [loaderCount, setLoaderCount] = useState(4);
  console.log(loaderCount);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };

        // Await the fetch call
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/task/getTasks`,
          requestOptions
        );

        // Await the conversion to JSON
        const json_res = await response.json();

        // Check the status code
        if (response.status === 200) {
          if (json_res.data && json_res.data.length > 0) {
            setTasks(json_res.data);
          } else {
            setTasks([]);
          }
          setLoaderCount(0); // Stop the loader
        } else {
          alert("Something went wrong please try again.");
        }
      } catch (e) {
        console.error("Something went wrong:", e);
        // Optionally setLoaderCount to 0 to stop the loader even on failure
        setLoaderCount(0);
      }
    };

    fetchTasks(); // Call the async function
  }, []);
  const addTask = async () => {
    if (title && title.length > 0) {
      setLoaderCount((prevCount) => prevCount + 1);
      try {
        let data = {
          title,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/task/createTask`,
          requestOptions
        );
        let json_res = await response.json();
        if (response.status === 201) {
          setLoaderCount((prevCount) => prevCount - 1);
          setTasks([{ id: json_res.id, title: json_res.title }, ...tasks]);
        } else {
          alert("Something went wrong while adding tasks. please try again.");
        }
      } catch (e) {
        alert("Something went wrong while adding tasks. please try again.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center border-[1px] w-screen sm:w-[557px] h-[363px] border-solid border-[#FFFFFF1A] rounded-[25px]">
      <div
        className="w-screen m-2 sm:m-0 sm:w-[537px] h-[343px]  border-[1px] border-solid border-[#FFFFFF1A] rounded-[25px] text-white"
        style={{
          background: `
      radial-gradient(50% 50% at 50% 50%, rgba(128, 144, 255, 0.16) 0%, rgba(168, 127, 255, 0) 100%), 
      linear-gradient(0deg, #030014, #030014)
    `,
        }}
      >
        <div className="pl-[20px] pr-[20px]">
          <div className="flex pt-[20px] ">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9688 11.9141C21.7895 13.9982 21.0187 15.9878 19.747 17.6487C18.4754 19.3097 16.7559 20.5729 14.7907 21.2897C12.8256 22.0066 10.6966 22.1473 8.65417 21.6953C6.61177 21.2433 4.74094 20.2174 3.2618 18.7382C1.78266 17.2591 0.756728 15.3883 0.304715 13.3458C-0.147298 11.3034 -0.00659231 9.17443 0.710279 7.20927C1.42715 5.24412 2.69036 3.52459 4.3513 2.25297C6.01224 0.981354 8.00181 0.210558 10.0859 0.0312661C10.4092 0.00433007 10.7299 0.106901 10.9775 0.316414C11.2251 0.525927 11.3793 0.825221 11.4063 1.14845C11.4332 1.47169 11.3306 1.79238 11.1211 2.03999C10.9116 2.28759 10.6123 2.44183 10.2891 2.46877C8.66748 2.60783 7.11936 3.20719 5.82688 4.1963C4.53439 5.18542 3.55133 6.52314 2.99337 8.05204C2.4354 9.58094 2.32576 11.2374 2.67734 12.8265C3.02892 14.4156 3.8271 15.8712 4.97794 17.0221C6.12878 18.1729 7.5844 18.9711 9.1735 19.3227C10.7626 19.6743 12.4191 19.5646 13.948 19.0067C15.4769 18.4487 16.8146 17.4656 17.8037 16.1731C18.7928 14.8807 19.3922 13.3325 19.5313 11.711C19.5446 11.5509 19.5893 11.3951 19.6629 11.2523C19.7365 11.1095 19.8374 10.9827 19.96 10.8789C20.0826 10.7752 20.2245 10.6966 20.3774 10.6477C20.5304 10.5987 20.6915 10.5804 20.8516 10.5938C21.0116 10.6071 21.1675 10.6518 21.3102 10.7254C21.453 10.799 21.5799 10.8999 21.6836 11.0225C21.7873 11.1451 21.8659 11.287 21.9148 11.44C21.9638 11.5929 21.9821 11.754 21.9688 11.9141ZM9.78125 5.71877V11C9.78125 11.3232 9.90966 11.6332 10.1382 11.8618C10.3668 12.0904 10.6768 12.2188 11 12.2188H16.2813C16.6045 12.2188 16.9145 12.0904 17.143 11.8618C17.3716 11.6332 17.5 11.3232 17.5 11C17.5 10.6768 17.3716 10.3668 17.143 10.1382C16.9145 9.90967 16.6045 9.78127 16.2813 9.78127H12.2188V5.71877C12.2188 5.39553 12.0903 5.08554 11.8618 4.85698C11.6332 4.62842 11.3232 4.50002 11 4.50002C10.6768 4.50002 10.3668 4.62842 10.1382 4.85698C9.90966 5.08554 9.78125 5.39553 9.78125 5.71877ZM19.125 7.75002C19.4464 7.75002 19.7606 7.65471 20.0278 7.47615C20.295 7.2976 20.5033 7.04381 20.6263 6.74688C20.7493 6.44995 20.7815 6.12321 20.7188 5.80799C20.6561 5.49278 20.5013 5.20323 20.2741 4.97597C20.0468 4.74871 19.7572 4.59394 19.442 4.53124C19.1268 4.46854 18.8001 4.50072 18.5031 4.62371C18.2062 4.7467 17.9524 4.95498 17.7739 5.22221C17.5953 5.48944 17.5 5.80362 17.5 6.12502C17.5 6.55599 17.6712 6.96932 17.976 7.27406C18.2807 7.57881 18.694 7.75002 19.125 7.75002ZM15.875 4.50002C16.1964 4.50002 16.5106 4.40471 16.7778 4.22615C17.045 4.0476 17.2533 3.79381 17.3763 3.49688C17.4993 3.19995 17.5315 2.87321 17.4688 2.55799C17.4061 2.24278 17.2513 1.95323 17.0241 1.72597C16.7968 1.49871 16.5072 1.34394 16.192 1.28124C15.8768 1.21854 15.5501 1.25072 15.2531 1.37371C14.9562 1.4967 14.7024 1.70498 14.5239 1.97221C14.3453 2.23944 14.25 2.55362 14.25 2.87502C14.25 3.30599 14.4212 3.71932 14.726 4.02406C15.0307 4.32881 15.444 4.50002 15.875 4.50002Z"
                fill="white"
              />
            </svg>
            <span className="ml-[12px] text-[14px] font-bold"> To-Do List</span>
          </div>
          <div className="flex items-center w-full mt-[24px] border border-solid border-[#FFFFFF1A] bg-transparent rounded-[12px] group">
            <input
              type="text"
              className="bg-transparent border-transparent w-full h-[44px] pl-4 pr-4 focus:outline-none placeholder-[#8F8F8F]"
              placeholder="Add new to-dos"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <span
              className="flex items-center justify-center bg-[#4F1AD6] h-[32px] w-[32px] mr-1 rounded-[12px] ml-2 hover:cursor-pointer"
              onClick={() => {
                addTask();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="text-white text-[14px] mt-4 mb-4 font-bold">
            My To-Dos
          </div>
          <div className="h-[165px] overflow-y-scroll no-scrollbar overflow-hidden">
            {loaderCount ? <TaskLoading loaderCount={loaderCount} /> : ""}
            <ShowTask data={tasks} tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
