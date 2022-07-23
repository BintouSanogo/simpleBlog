import Link from "next/link";
import { useState } from "react";
import { api } from "../api/postApi";
import React from 'react';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

export const getStaticProps = async () => {
  const res = await api.get("/posts");

  const data = res.data;

  return {
    props: { data },
  };
};

const HomePage = ({ data }) => {
  const [searchField, setSearchField] = useState("");
  
  console.log(data);
  //FilteredPost
  const filteredPost = data.filter((post) => {
    return post.title.toLowerCase().includes(searchField.toLowerCase());
  });
// //Remove Function
//   const handleRemove = async (id) => {
//    //api.delete(`/posts/${id}`).then((res) => console.log("delete", res));
//    api.delete(`/posts/${id}`).then((res) =>toast("The Item is deleted from list ", res))
//   };

  return (
    <div className="">
      <div className="text-center bg-blend-color-dodge  ">
      <label>SearchBar: </label>
      <input className="border border-slate-300 hover:border-indigo-300"
        placeholder="search by title"
        type="text"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button className="bg-cyan-500 hover:bg-cyan-600 rounded-full  ml-2 ..."> Submit</button>

      </div>
      <div className="mt-6 mb-8">
      <h1 className="text-center font-serif text-xl relative ">List of blog</h1>
      </div>
     
      <article>
        <div className="space-x-4 divide-y border-l-4 border-0 grid grid-flow-row auto-rows-max  grid-rows-3 grid-flow-col gap-4">
        {filteredPost.map((item) => {
          return (
            <div className="font-serif text-xl relative flex-col pb-8 ml-2 space-x-4" key={item.id}>
              <h2 className="">UserId:{item.userId}</h2>
              <h2 className="text-2xl hover:bg-cyan-600 ">Title:{item.title}</h2>
              <h3>Body: {item.body}</h3>
              <button className="bg-cyan-500 hover:bg-cyan-800 rounded-full ... ">
                <Link href={"/posts/" + item.id}>More Info</Link>
              </button>
              {/* <button onClick={() => handleRemove(item.id)}>delete</button> */}
            </div>
          );
        })}
        </div>
       
      </article>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default HomePage;
