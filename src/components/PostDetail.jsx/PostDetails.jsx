import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { GoArrowLeft } from "react-icons/go";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is PostDetails component</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}><GoArrowLeft /> Go Back</button>
    </div>
  );
};

export default PostDetails;
