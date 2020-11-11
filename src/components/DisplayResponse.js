import React from "react";
import { AppContext } from "../contexts/appContext";
import { Row } from "react-bootstrap";

const DisplayResponse = () => {
  const { responseData } = AppContext();

  return (
    <Row>
      {responseData && (
        <img
          src={`data:image/jpeg;base64,${responseData.image}`}
          alt="response_Image"
        />
      )}
      {responseData && (
        <img
          src={`data:image/jpeg;base64,${responseData.o_image}`}
          alt="response_o_Image"
        />
      )}
    </Row>
  );
};

export default DisplayResponse;
