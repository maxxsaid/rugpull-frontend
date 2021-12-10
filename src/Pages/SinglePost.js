import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ posts, edit, deleteRugpull }) => {
  const params = useParams();
  const id = parseInt(params.id);
  const post = posts.find((p) => p.id === id);
  console.log(post);
  const div = {
    textAlign: "center",
    border: "2px solid #FF8682",
    margin: "20px auto",
    padding: "14px",
    width: "80%",
    color: "#FF8682",
  };
  const button = {
    backgroundColor: "#2F3063",
    display: "inline-block",
    margin: "2px",
  };
  return (
    <div style={div}>
      <h1>{post?.confession}</h1>
      <h2>{post?.age}</h2>
      <button style={button} onClick={() => deleteRugpull(post)}>
        Delete
      </button>
      <button style={button} onClick={() => edit(post)}>
        Edit
      </button>
      <Link to="/">
        <button style={button}>Go Back</button>
      </Link>
    </div>
  );
};
export default SinglePost;
