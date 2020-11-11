import React from "react";
import { AppContext } from "../contexts/appContext";
import { Button } from "react-bootstrap";

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
      <Button variant="secondary" onClick={stopHandler} disabled={!start} block>
        Press to stop
      </Button>

      <Button variant="secondary" onClick={startHandler} disabled={start} block>
        Press to start
      </Button>
    </>
  );
};

export default Buttons;
