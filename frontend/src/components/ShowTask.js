import React from "react";

function ShowTask({ data, setTasks, tasks }) {
  const deleteTask = async (id) => {
    try {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      let data = {
        id,
      };
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/task/deleteTask`,
        requestOptions
      );
      let json_res = await response.json();
      if (response.status != 200) {
        alert("Something went wrong while deleting task. Please try again.");
      }
    } catch (e) {
      alert("Something went wrong while deleting task. Please try again.");
    }
  };

  return (
    <div className="space-y-2">
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#131313] border border-solid border-[#303030] rounded-[12px] p-2 flex justify-between items-center gap-1 "
          >
            <div className="overflow-scroll no-scrollbar">{item.title}</div>

            <div className="flex gap-1">
              <div
                className="w-[32px] h-[32px] hover:cursor-pointer rounded-[12px] bg-[#027A48] flex items-center justify-center"
                onClick={() => {
                  deleteTask(item.id);
                }}
              >
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1633 2.28827L6.16331 12.2883C6.07621 12.3757 5.97272 12.445 5.85876 12.4923C5.74481 12.5397 5.62263 12.564 5.49925 12.564C5.37586 12.564 5.25368 12.5397 5.13973 12.4923C5.02577 12.445 4.92228 12.3757 4.83518 12.2883L0.460183 7.91327C0.372977 7.82607 0.303802 7.72254 0.256606 7.6086C0.209411 7.49466 0.18512 7.37254 0.18512 7.24921C0.18512 7.12588 0.209411 7.00376 0.256606 6.88982C0.303802 6.77588 0.372977 6.67235 0.460183 6.58515C0.547389 6.49794 0.650918 6.42877 0.764858 6.38157C0.878798 6.33437 1.00092 6.31008 1.12425 6.31008C1.24757 6.31008 1.36969 6.33437 1.48363 6.38157C1.59757 6.42877 1.7011 6.49794 1.78831 6.58515L5.50003 10.2969L14.8367 0.961709C15.0129 0.785589 15.2517 0.686646 15.5008 0.686646C15.7499 0.686646 15.9887 0.785589 16.1649 0.961709C16.341 1.13783 16.4399 1.3767 16.4399 1.62577C16.4399 1.87484 16.341 2.11371 16.1649 2.28983L16.1633 2.28827Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                className="w-[32px] h-[32px] rounded-[12px] bg-[#F04438] flex items-center justify-center hover:cursor-pointer"
                onClick={() => {
                  deleteTask(item.id);
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
                    d="M16.875 3.75H14.0625V2.8125C14.0625 2.23234 13.832 1.67594 13.4218 1.2657C13.0116 0.855468 12.4552 0.625 11.875 0.625H8.125C7.54484 0.625 6.98844 0.855468 6.5782 1.2657C6.16797 1.67594 5.9375 2.23234 5.9375 2.8125V3.75H3.125C2.87636 3.75 2.6379 3.84877 2.46209 4.02459C2.28627 4.2004 2.1875 4.43886 2.1875 4.6875C2.1875 4.93614 2.28627 5.1746 2.46209 5.35041C2.6379 5.52623 2.87636 5.625 3.125 5.625H3.4375V16.25C3.4375 16.6644 3.60212 17.0618 3.89515 17.3549C4.18817 17.6479 4.5856 17.8125 5 17.8125H15C15.4144 17.8125 15.8118 17.6479 16.1049 17.3549C16.3979 17.0618 16.5625 16.6644 16.5625 16.25V5.625H16.875C17.1236 5.625 17.3621 5.52623 17.5379 5.35041C17.7137 5.1746 17.8125 4.93614 17.8125 4.6875C17.8125 4.43886 17.7137 4.2004 17.5379 4.02459C17.3621 3.84877 17.1236 3.75 16.875 3.75ZM7.8125 2.8125C7.8125 2.72962 7.84542 2.65013 7.90403 2.59153C7.96263 2.53292 8.04212 2.5 8.125 2.5H11.875C11.9579 2.5 12.0374 2.53292 12.096 2.59153C12.1546 2.65013 12.1875 2.72962 12.1875 2.8125V3.75H7.8125V2.8125ZM14.6875 15.9375H5.3125V5.625H14.6875V15.9375ZM9.0625 8.125V13.125C9.0625 13.3736 8.96373 13.6121 8.78791 13.7879C8.6121 13.9637 8.37364 14.0625 8.125 14.0625C7.87636 14.0625 7.6379 13.9637 7.46209 13.7879C7.28627 13.6121 7.1875 13.3736 7.1875 13.125V8.125C7.1875 7.87636 7.28627 7.6379 7.46209 7.46209C7.6379 7.28627 7.87636 7.1875 8.125 7.1875C8.37364 7.1875 8.6121 7.28627 8.78791 7.46209C8.96373 7.6379 9.0625 7.87636 9.0625 8.125ZM12.8125 8.125V13.125C12.8125 13.3736 12.7137 13.6121 12.5379 13.7879C12.3621 13.9637 12.1236 14.0625 11.875 14.0625C11.6264 14.0625 11.3879 13.9637 11.2121 13.7879C11.0363 13.6121 10.9375 13.3736 10.9375 13.125V8.125C10.9375 7.87636 11.0363 7.6379 11.2121 7.46209C11.3879 7.28627 11.6264 7.1875 11.875 7.1875C12.1236 7.1875 12.3621 7.28627 12.5379 7.46209C12.7137 7.6379 12.8125 7.87636 12.8125 8.125Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShowTask;
