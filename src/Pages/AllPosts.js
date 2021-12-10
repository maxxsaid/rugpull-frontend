import React from "react";
import Rugpull from "../Components/post";

const AllPosts = (props) => {
  return props.posts.map((post) => {
    return <Rugpull key={post.id} post={post}></Rugpull>;
  });
};
export default AllPosts;
