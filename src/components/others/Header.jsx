import React from "react";

const Header = ({ data, admin, changeUser }) => {
//  console.log(admin[0].firstname)
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
    // window.location.reload();
  };

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // console.log(loggedInUser.role);
  // console.log(data.firstname)
  // console.log(admin[0].firstname)
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl">
        <span className="font-regular">Hello,</span> <br />{" "}
        <span className="font-semibold text-4xl">
          {
            loggedInUser.role == "employee" ? data.firstname : admin[0].firstname
          }
          👋
        </span>
      </h1>
      <button onClick={logOut} className="bg-red-600 px-4 py-2 font-medium rounded-sm text-md">
        Log Out!
      </button>
    </div>
  );
};

export default Header;
