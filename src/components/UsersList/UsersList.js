import React, { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div>
      <Card className={classes.users}>
        <h1>List of Users</h1>
        <hr />
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UsersList;
