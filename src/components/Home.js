import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import axios from "axios";
import Post from "./Post";

const Home = () => {
  const [create, setCreate] = useState(false);
  const [post, setPost] = useState({
    id: "",
    title: "",
    description: "",
    tags: "",
  });
  //const handleChange = (e) => {};

  useEffect(() => {
    axios
      .get("http://localhost:3000/post")
      .then((res) => setPost(res.data))
      .catch((error) => console.error(error));
    console.log(post);
  }, []);
  const postIdea = (e) => {
    e.preventDefault();
    const datas = {};
    axios
      .post("http://localhost:3000/post", { post: { title: "title" } })
      .then((res) => setPost([...Post, res.data]))
      .catch((error) => console.error(error));
    console.log(post);
  };
  return (
    <div>
      <div className="  grid sm:flex">
        {create && (
          <div className=" bg-blue-200 border w-full border-blue-300 rounded-xl py-5 my-10 mx-[322px]">
            <form className="flex flex-col" onSubmit={postIdea}>
              <input
                type="text "
                name="title"
                placeholder="Title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className=" w-fit border text-2xl  font-semibold my-2 mx-2 px-2 py-1 rounded-sm border-green-400"
              />
              <textarea
                type="textarea"
                name="description"
                value={post.description}
                rows={9}
                cols={13}
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
                placeholder="Description"
                className=" w-full h-[50px] my-2 mr-3 px-2 border border-green-400 "
              />
              <input
                type="text"
                name="tags"
                value={post.tags}
                onChange={(e) => setPost({ ...post, tags: e.target.value })}
                placeholder="Tags"
                className="  w-fit text-base font-semibold mx-2 px-2 py-2 border border-green-400 rounded-sm"
              />
              <button
                type="submit"
                onClick={postIdea}
                className=" border w-fit my-5 mx-5 px-2 py-2 bg-blue-500 text-white rounded-md"
              >
                Create a post
              </button>
            </form>
          </div>
        )}

        <div
          className=" w-fit h-fit flex cursor-pointer mr-22 sm:mr-12 absolute top-0 sm:right-0 text-gray-500 hover:text-gray-600  hover:bg-blue-100 border rounded-3xl px-2 my-20 sm:my-20"
          onClick={() => setCreate(!create)}
        >
          <IoIosAdd className=" h-14 w-14 my-3 " />
          <p className=" my-6 font-semibold text-xl">Create</p>
        </div>
      </div>
      <div className=" flex flex-wrap gap-4 mx-[80px] ">
        <Post data={post} />
      </div>
    </div>
  );
};

export default Home;
