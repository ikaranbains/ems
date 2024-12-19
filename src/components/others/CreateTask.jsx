import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [userData, setUserData] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // data.forEach((elem) => {
    //   if (assignTo == elem.firstname) {
    //     elem.tasks.push(task);
    //     elem.taskNumbers.newTask += 1;
    //     // console.log(elem);
    //   }
    // });


    const data = userData.employees.map((elem,idx)=>{
      if(assignTo == elem.firstname){
        return {...elem, tasks: [...elem.tasks, newTask], taskNumbers: {...elem.taskNumbers, newTask: elem.taskNumbers.newTask + 1}};
      }
      // else{
      //   // alert("Employee not found");
      // }
      return elem;
    })
    // console.log(data)

    setUserData({ ...userData, employees: data });
    localStorage.setItem('employees', JSON.stringify(data));
    toast.success("Task Created Successfully");

    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };
  return (
    <div className="flex items-center justify-center bg-[#1c1c1c] mt-6 rounded-sm px-5 py-7">
      <ToastContainer autoClose={2000}/>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex items-center justify-between px-8 w-full"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h3>Task Title</h3>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="bg-transparent border-2 border-zinc-600 outline-none w-[30vw] rounded-md px-3 py-1 placeholder:text-zinc-300"
              type="text"
              placeholder="Enter a Title for Task"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3>Date</h3>
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="bg-transparent border-2 border-zinc-600 outline-none w-[30vw] rounded-md px-3 py-1 placeholder:text-zinc-300"
              type="date"
              placeholder="dd/mm/yy"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Assign to</h3>
            <input
              onChange={(e) => setAssignTo(e.target.value)}
              value={assignTo}
              className="bg-transparent border-2 border-zinc-600 outline-none w-[30vw] rounded-md px-3 py-1 placeholder:text-zinc-300"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Category</h3>
            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="bg-transparent border-2 border-zinc-600 outline-none w-[30vw] rounded-md px-3 py-1 placeholder:text-zinc-300"
              type="text"
              placeholder="Design, Department etc."
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Description</h3>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name=""
            id=""
            rows="10"
            cols="52"
            className="bg-transparent border-2 border-zinc-600 rounded-md resize-none"
          ></textarea>
          <button className="bg-emerald-500 py-2 mt-2 rounded-md hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
