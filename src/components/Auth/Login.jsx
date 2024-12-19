import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setemail('');
    setpassword('');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-900 rounded-lg bg-zinc-950">
        <h1 className="ml-4 mt-5 tracking-tight font-bold text-2xl">Log In</h1>
        <form
          className="flex flex-col items-center gap-6 w-[31vw] py-16 h-[75vh]"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="text-lg bg-transparent border-2 border-emerald-900 outline-none rounded-full px-6 w-[28vw] flex items-center">
            <FaCircleUser />
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              required
              className="text-lg bg-transparent outline-none rounded-full px-4 w-[25vw] py-2 placeholder:text-gray-400"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="text-lg bg-transparent border-2 border-emerald-900 outline-none rounded-full px-6 w-[28vw] flex items-center">
            <TbLockPassword />
            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
              className="text-lg bg-transparent outline-none rounded-full px-4 w-[25vw] py-2 placeholder:text-gray-400"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="w-[28vw] flex items-center justify-center">
            <button className="px-4 w-[28vw] py-3 rounded-full text-lg mt-8 bg-emerald-900">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
