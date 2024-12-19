import React from "react";

const TaskNumbers = ({data}) => {
  return (
    <div className="flex gap-4 mt-5">
      <div className="px-10 py-8 rounded-xl bg-blue-600 w-[45%]">
        <h2 className="text-5xl font-bold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-4xl font-semibold">New Task</h3>
      </div>
      <div className="px-10 py-8 rounded-xl bg-green-600 w-[45%]">
        <h2 className="text-5xl font-bold">{data.taskNumbers.completed}</h2>
        <h3 className="text-4xl font-semibold">Completed</h3>
      </div>
      <div className="px-10 py-8 rounded-xl bg-yellow-600 w-[45%]">
        <h2 className="text-5xl font-bold">{data.taskNumbers.active}</h2>
        <h3 className="text-4xl font-semibold">Accepted</h3>
      </div>
      <div className="px-10 py-8 rounded-xl bg-red-600 w-[45%]">
        <h2 className="text-5xl font-bold">{data.taskNumbers.failed}</h2>
        <h3 className="text-4xl font-semibold">Failed</h3>
      </div>
    </div>
  );
};

export default TaskNumbers;
