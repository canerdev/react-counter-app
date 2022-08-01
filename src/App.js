import React, { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import classes from "./components/UI/Card.module.css";
import styles from "./components/ChangeNumber.module.css";
import AddNumber from "./components/AddNumber";
import Number from "./components/Number";
import Button from "./components/UI/Button";

const App = (props) => {
  const [enteredNum, setEnteredNum] = useState("");

  const newNumberHandler = (enteredNum) => {
    setEnteredNum(enteredNum);
  };

  const incraseNum = () => {
    setEnteredNum(+enteredNum + 1);
  };

  const decreaseNum = () => {
    setEnteredNum(+enteredNum - 1);
  };

  const setZero = () => {
    setEnteredNum(0);
  };

  return (
    <Card className="App">
      <AddNumber onNewNumber={newNumberHandler}></AddNumber>
      <Number className={classes.number}>{enteredNum}</Number>
      {/* <ChangeNumber enteredNum={enteredNum}></ChangeNumber> */}
      <Card className={styles.btn_group}>
        <Button onClick={incraseNum} type="button">
          +
        </Button>
        <Button onClick={decreaseNum} type="button">
          -
        </Button>
        <Button onClick={setZero} className="testBtn" type="button">
          Set to zero
        </Button>
      </Card>
    </Card>
  );
};

export default App;
