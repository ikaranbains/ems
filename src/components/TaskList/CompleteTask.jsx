import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="h-full w-[350px] bg-green-600 rounded-xl p-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <h2 className="text-xs px-2 py-1 bg-emerald-700 rounded-md">
          Category: {data.category}
        </h2>
        <h3 className="text-sm font-semibold">{data.date}</h3>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>
      <div className="mt-5">
        <button className="w-full bg-emerald-800 hover:bg-emerald-900 cursor-not-allowed rounded-md py-[4px]">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
