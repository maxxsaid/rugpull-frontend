import React from "react";
import { Link, useParams } from "react-router-dom";

const SinglePost = ({ posts, edit, deleteRugpull }) => {
  const params = useParams();
  const id = parseInt(params.id);
  const post = posts.find((p) => p.id === id);
  console.log(post);
  const div = {
    textAlign: "center",
    border: "1px solid rgb(254,123,191)",
    borderRadius: "4px",
    boxShadow: "rgba(155, 75, 200) 0px 1px 8px",
    margin: "20px auto",
    padding: "25px",
    width: "80%",
    color: "rgb(254,123,191)",
  };
  const button = {
    backgroundColor: "rgb(89,50,150)",
    fontFamily: "Architects Daughter",
    borderRadius: "6px",
    fontSize: "1em",
    display: "inline-block",
    margin: "10px 3px",
    boxShadow: "rgba(155, 75, 200) 0px 1px 5px",
  };
  return (
    <div style={div}>
      <h1>{post?.confession}</h1>
      <h2>Age: {post?.age}</h2>
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
