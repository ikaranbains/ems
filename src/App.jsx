import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData2 = JSON.parse(loggedInUser);
      setUser(userData2.role.toString());
      setLoggedInUserData(userData2.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      const adminData = JSON.parse(localStorage.getItem("admin"));
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminData })
      );
    } else if (userData && userData != null) {
      const employee = userData.employees.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // console.log(user && user.role);
  // console.log(loggedInUserData)
  // console.log(authData)
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user && user == "admin" ? <AdminDashboard changeUser={setUser} /> : null}
      {user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
      ) : null}
    </div>
  );
};

export default App;
