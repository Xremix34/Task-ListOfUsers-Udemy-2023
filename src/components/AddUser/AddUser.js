import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [inputAddUser, setInputAddUser] = useState("");
  const [inputAddAge, setInputAddAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    setInputAddUser(event.target.value);
  };

  const addAgeHandler = (event) => {
    setInputAddAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputAddUser.trim().length === 0 || inputAddAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+inputAddAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(inputAddUser, inputAddAge);
    setInputAddUser("");
    setInputAddAge("");
  };

  const errorHandle = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandle}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name-user">Name</label>

          <input
            onChange={addUserHandler}
            value={inputAddUser}
            type="text"
            id="name-user"
          />
          <label htmlFor="year-user">Age</label>
          <input
            onChange={addAgeHandler}
            value={inputAddAge}
            type="number"
            id="yea-user"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
