import React from "react";
import { AppContext } from "../contexts/appContext";

const DisplayResponse = () => {
  const { responseData } = AppContext();

  return (
    <div>
      {/* <img src={`data:image/jpeg;base64,${responseData}`} alt="responseImage" /> */}
      <img src={`${responseData}`} alt="responseImage" />
    </div>
  );
};

export default DisplayResponse;
