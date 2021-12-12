import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
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
  const fontSize = {
    fontSize: "2em",
    fontFamily: "Roboto",
  };
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1 style={fontSize}>{post.confession}</h1>
      </Link>
      <h2 style={fontSize}>Age: {post.age}</h2>
    </div>
  );
};
export default Post;
