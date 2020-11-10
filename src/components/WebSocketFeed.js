import React, { useEffect } from "react";
import { AppContext } from "../contexts/appContext";

const WebSocketFeed = () => {
  const { websocketEl, setResponseData } = AppContext();

  useEffect(() => {
    websocketEl.current = new WebSocket("ws://127.0.0.1:5000");
    websocketEl.current.onopen = () => {
      console.log("I am open");
    };
    websocketEl.current.onmessage = (event) => {
      setResponseData(event.data);
    };
    websocketEl.current.onclose = () => {
      console.log("stream stopped");
    };
    websocketEl.current.onerror = (e) => {
      console.log(`Stream stopped due to error ${e}`);
    };

    return () => {
      websocketEl.current.close();
      websocketEl.current = null;
      console.log("Closed");
    };
  }, [websocketEl]);
  return <></>;
};

export default WebSocketFeed;
