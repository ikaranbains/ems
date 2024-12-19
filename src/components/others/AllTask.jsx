import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="w-[93vw] bg-[#1c1c1c] p-5 mt-7 flex flex-col gap-4">
      <div className=" flex items-center  gap-2 border-2 border-zinc-400 justify-between px-4 py-3 rounded-md">
        <h2 className="text-lg font-semibold w-1/5 pl-12">Heading</h2>
        <h3 className="text-lg font-semibold w-1/5 pl-12">
          Active Task
        </h3>
        <h5 className="text-lg font-semibold w-1/5 pl-12">New Task</h5>
        <h5 className="text-lg font-semibold w-1/5 pl-12">Completed</h5>
        <h5 className="text-lg font-semibold w-1/5 pl-12">Failed</h5>
      </div>

      <div>
        {userData.employees.map((elem, idx) => {
          return (
            <div key={idx} className="flex items-center gap-2 border-2 border-zinc-700 justify-between px-4 py-3 rounded-md mb-2">
              <h2 className="text-lg font-semibold w-1/5 pl-12">
                {elem.firstname}
              </h2>
              <h3 className="text-lg font-semibold w-1/5 pl-[5.5vw] text-yellow-500">
                {elem.taskNumbers.active}
              </h3>
              <h5 className="text-lg font-semibold w-1/5 pl-[5.5vw] text-blue-600">{elem.taskNumbers.newTask}</h5>
              <h5 className="text-lg font-semibold w-1/5 pl-[5.5vw] text-emerald-600">{elem.taskNumbers.completed}</h5>
              <h5 className="text-lg font-semibold w-1/5 pl-[5.5vw] text-red-600">{elem.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
