import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
};

export default PostDetails;
