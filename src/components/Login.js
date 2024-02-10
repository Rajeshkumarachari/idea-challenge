import React from "react";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex items-center justify-center h-screen  ">
      <input
        type="text"
        placeholder="Enter you Emp id"
        className=" border px-2 py-2 rounded-sm border-gray-500"
      />
      <button className=" mx-3 border px-3 py-2 bg-blue-600 text-white rounded-sm">
        Login
      </button>
      <Outlet />
    </div>
  );
};

export default Login;
