import React from "react";
import { AppContext } from "../contexts/appContext";
import { Row } from "react-bootstrap";

const DisplayResponse = () => {
  const { responseData } = AppContext();

  return (
    <Row>
      <img
        src={`data:image/jpeg;base64,${responseData.image}`}
        alt="response_Image"
      />
      <img
        src={`data:image/jpeg;base64,${responseData.o_image}`}
        alt="response_o_Image"
      />
    </Row>
  );
};

export default DisplayResponse;
