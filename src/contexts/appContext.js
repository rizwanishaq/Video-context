import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";

const VideoContext = createContext();

export const AppContext = () => {
  return useContext(VideoContext);
};

const VideoContextProvider = ({ children }) => {
  const [requestData, setRequestData] = useState("");
  const [responseData, setResponseData] = useState("");
  const [start, setStart] = useState(false);
  const videoEl = useRef(undefined);
  const websocketEl = useRef(undefined);
  const canvas_ref = useRef(undefined);

  useEffect(() => {
    if (websocketEl.current && requestData.length > 0 && start) {
      websocketEl.current.send(requestData);
    }
  }, [requestData, start]);

  useEffect(() => {
    if (!videoEl) {
      return;
    }
    if (start) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoEl.current.srcObject = stream;
        videoEl.current.play();
      });
    }
  }, [videoEl, start]);

  useEffect(() => {
    if (start === false) {
      videoEl.current = undefined;
      websocketEl.current = undefined;
      canvas_ref.current = undefined;
      setRequestData("");
      setResponseData("");
    }
  }, [start]);

  return (
    <VideoContext.Provider
      value={{
        videoEl,
        websocketEl,
        canvas_ref,
        requestData,
        setRequestData,
        responseData,
        setResponseData,
        start,
        setStart,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export default VideoContextProvider;
