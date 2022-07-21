import Link from "next/link";
import { useState } from "react";
import { api } from "../api/postApi";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div>
      <label>SearchBar:</label>
      <input
        placeholder="search by title"
        type="text"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <button>Submit</button>
      <h1>List of blog</h1>
      <article>
        {filteredPost.map((item) => {
          return (
            <div key={item.id}>
              <h2>UserId:{item.userId}</h2>
              <h2>Title:{item.title}</h2>
              <h3>Body: {item.body}</h3>
              <button >
                <Link href={"/posts/" + item.id}>More Info</Link>
              </button>
              {/* <button onClick={() => handleRemove(item.id)}>delete</button> */}
            </div>
          );
        })}
      </article>
      <ToastContainer/>
    </div>
  );
};

export default HomePage;
