import React from "react";

const AcceptTask = ({ data }) => {
  // console.log(data)
  return (
    <div className="h-full w-[350px] bg-yellow-600 rounded-xl p-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <h2
          className="text-xs px-2 py-1 bg-yellow-700
         rounded-md"
        >
          Category : {data.category}
        </h2>
        <h3 className="text-sm font-semibold">{data.date}</h3>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2"> {data.description}</p>
      <div className="mt-5 flex gap-2">
        <button className="bg-green-800 hover:bg-green-900 px-2 py-[5px] rounded-md text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-800 hover:bg-red-900 px-2 py-1 rounded-md text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
