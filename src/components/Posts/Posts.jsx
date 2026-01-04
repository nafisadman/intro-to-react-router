import React from "react";
import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>This is posts component</h1>
      <h4>Number of Posts: {posts.length}</h4>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
