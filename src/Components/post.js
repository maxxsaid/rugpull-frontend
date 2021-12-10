import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h1>{post.confession}</h1>
      </Link>
      <h2>{post.age}</h2>
    </div>
  );
};
export default Post;
