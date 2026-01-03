import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const user = use(usersPromise);
  console.log("User 2 Suspense data load ", user);
  return (
    <div>
      <h1>This is users2 component</h1>
    </div>
  );
};

export default Users2;
