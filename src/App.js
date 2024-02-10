import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { FaAlignJustify } from "react-icons/fa";
import { LOGO_IMAGE } from "./constant";
import { Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className=" flex bg-gray-200">
          <div className=" mx-6 my-3 ">
            <img
              src={LOGO_IMAGE}
              alt="Logo"
              className=" rounded-lg w-14 h-14"
            />
          </div>
          <div className=" space-x-12">
            <p className=" cursor-pointer text-blue-600 text-3xl flex my-4 font-semibold w-fit shadow-sm font-[Brush Script] ">
              Hack Ideas
            </p>
          </div>
          <div className="ml-[200px] sm:ml-[1000px] mt-7  ">
            <FaAlignJustify className="  w-fit hover:bg-slate-300 cursor-pointer" />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
