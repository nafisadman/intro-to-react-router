import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, username, email } = user;

  return (
    <div>
      <h1>This is userdetails component</h1>
      <h4>Name: {name}</h4>
      <h4>Username: {username}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
};

export default UserDetails;
