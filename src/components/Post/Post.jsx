import React from "react";
import { Link, useNavigate } from "react-router";
import { GoArrowUpRight } from "react-icons/go";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };

  const postStyle = {
    border: "2px solid #646cff",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={postStyle}>
      <p>{title}</p>
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={`/posts/${id}`}>
          <button>Visit <GoArrowUpRight /> [Link]</button>
        </Link>
        <button onClick={handleNavigate}>Visit <GoArrowUpRight /> [useNavigate]</button>
      </div>
    </div>
  );
};

export default Post;
