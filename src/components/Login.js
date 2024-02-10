import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [emp, setEmp] = useState(null);

  const getUserDetails = (e) => {
    setEmp(e.target.value);
    console.log(emp);
  };

  const handle = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" flex items-center justify-center h-screen  ">
      <form typeof="submit" onSubmit={handle}>
        <input
          type="text"
          name="empid"
          value={emp}
          placeholder="Enter you Emp id"
          className=" border px-2 py-2 rounded-sm border-gray-500"
        />
      </form>
      <button
        onClick={getUserDetails}
        className=" mx-3 border px-3 py-2 bg-blue-600 text-white rounded-sm"
      >
        <Link to="/home">Login</Link>
      </button>
    </div>
  );
};

export default Login;
