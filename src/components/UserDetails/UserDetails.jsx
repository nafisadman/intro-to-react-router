import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website, email } = user;

  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>This is UserDetails component</h1>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
