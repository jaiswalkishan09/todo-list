import React from "react";

function TaskLoading({ loaderCount = 0 }) {
  return (
    <div className="space-y-2 mb-2 animate-pulse">
      {loaderCount > 0 &&
        Array.from({ length: loaderCount }, (_, index) => (
          <div className="" key={index}>
            <div
              key={index}
              className="w-full bg-[#4A4A4A] border border-solid border-[#303030] rounded-[12px] p-2 h-12"
            />
          </div>
        ))}
    </div>
  );
}

export default TaskLoading;
