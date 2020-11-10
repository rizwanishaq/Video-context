import React from "react";
import { AppContext } from "../contexts/appContext";

const Buttons = () => {
  const { start, setStart } = AppContext();

  const stopHandler = (e) => {
    setStart(false);
  };

  const startHandler = (e) => {
    setStart(true);
  };

  return (
    <>
      {start === false ? (
        <button onClick={startHandler}>Press to start</button>
      ) : (
        <button onClick={stopHandler}>Press to stop</button>
      )}
    </>
  );
};

export default Buttons;
