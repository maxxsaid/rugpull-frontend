import React from "react";
import Post from "../Components/post";

const AllPosts = (props) => {
  return props.posts.map((post) => {
    return <Post key={post.id} post={post}></Post>;
  });
};
export default AllPosts;
