import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const div = {
    textAlign: "center",
    border: "2px solid #FF8682",
    margin: "20px auto",
    padding: "14px",
    width: "80%",
    color: "#FF8682",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.confession}</h1>
      </Link>
      <h2>{post.age}</h2>
    </div>
  );
};
export default Post;
