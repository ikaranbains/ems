import React from "react";

const NewTask = ({data}) => {
  return (
    <div className="h-full w-[350px] bg-blue-600 rounded-xl p-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <h2 className="text-xs px-2 py-1 bg-blue-900 rounded-md">
          Category : {data.category}
        </h2>
        <h3 className="text-sm font-semibold">{data.date}</h3>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>
      <div className="mt-5">
        <button className="bg-blue-900 hover:bg-blue-950 hover:font-medium px-4 py-[5px] rounded-md text-sm">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;