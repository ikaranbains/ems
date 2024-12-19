import React, { useContext } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({changeUser}) => {
  const [userData,setUserData] = useContext(AuthContext);
  // console.log(userData.admin[0].firstname)
  return (
    <div className="p-10 h-screen w-full">
      <Header admin={userData.admin} changeUser={changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
