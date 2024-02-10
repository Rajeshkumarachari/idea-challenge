import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";

const Post = ({ data }) => {
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/post${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className=" bg-blue-200 w-[500px] my-10 rounded-md ">
        <div className=" flex">
          <h1 className=" text-2xl font-semibold w-fit  mx-3 pt-2  ">
            {data[2]?.title}
          </h1>
          <MdClose
            className="ml-[380px] my-4 cursor-pointer hover:bg-red-500 text-xl rounded-xl "
            onClick={() => deleteData(data[2]?.id)}
          />
        </div>
        <p className=" mx-3 pb-3">{data[2]?.description}</p>
        <div className=" flex">
          {data &&
            data[2]?.tags.map((tag) => (
              <p
                key={data[2]?.id}
                className=" mx-2 flex text-base font-semibold"
              >
                #{tag}
              </p>
            ))}
        </div>
        <div className=" flex">
          <AiOutlineLike className=" w-12 h-12 mx-5 b-5 cursor-pointer" />
          <p className=" mt-3 font-medium text-lg">{data[2]?.likes} </p>
        </div>
      </div>
    </>
  );
};

export default Post;
