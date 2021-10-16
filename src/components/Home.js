import React from "react";
import { Heading } from "./Heading";
import { UsersList } from "./UsersList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          CRUD with React Context API and Hooks
        </h3>
        <Heading />
        <UsersList />
      </div>
    </React.Fragment>
  );
};