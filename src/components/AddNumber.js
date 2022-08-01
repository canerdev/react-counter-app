import React, { useState } from "react";
import classes from "./AddNumber.module.css";
import Button from "./UI/Button";
import Card from "./UI/Card";

const AddNumber = (props) => {
  const [enteredNum, setEnteredNum] = useState(0);

  const numberChangeHandler = (event) => {
    event.preventDefault();
    setEnteredNum(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onNewNumber(enteredNum);
    setEnteredNum("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="number">Enter a number</label>
        <input
          value={enteredNum}
          onChange={numberChangeHandler}
          id="number"
          type="number"
        ></input>
        <Button type="submit">Add number</Button>
      </form>
    </Card>
  );
};

export default AddNumber;
