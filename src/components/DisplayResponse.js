import React from "react";
import { AppContext } from "../contexts/appContext";

const DisplayResponse = () => {
  const { responseData } = AppContext();

  return (
    <div>
      <img
        src={`data:image/jpeg;base64,${responseData.image}`}
        alt="response_Image"
      />
      <img
        src={`data:image/jpeg;base64,${responseData.o_image}`}
        alt="response_o_Image"
      />
    </div>
  );
};

export default DisplayResponse;
