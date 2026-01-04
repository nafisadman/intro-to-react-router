import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";
import { GoArrowUpRight } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { GoXCircle } from "react-icons/go";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);
  const location = useLocation();
  console.log(location);

  const { id, name, email, phone } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  const userStyle = {
    border: "2px solid #646cff",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };

  if (visitHome) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        <small>Phone: {phone}</small>
      </p>
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={`${id}`}>
          Visit <GoArrowUpRight />
        </Link>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <GoXCircle /> : <GoInfo />}
        </button>
        {showInfo && (
          <Suspense fallback={<span>Loading...</span>}>
            <UserDetails2 userPromise={userPromise}></UserDetails2>
          </Suspense>
        )}
        <button onClick={() => setVisitHome(true)}>
          <GoHome />
        </button>
      </div>
    </div>
  );
};

export default User;
