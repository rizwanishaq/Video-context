import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import VideoContextProvider from "./contexts/appContext";

ReactDOM.render(
  <VideoContextProvider>
    <App />
  </VideoContextProvider>,
  document.getElementById("root")
);
