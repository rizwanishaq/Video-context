import Buttons from "./components/Buttons";
import CanvasFeed from "./components/CanvasFeed";
import DisplayResponse from "./components/DisplayResponse";
import VideoFeed from "./components/VideoFeed";
import WebSocketFeed from "./components/WebSocketFeed";
import { AppContext } from "./contexts/appContext";

function App() {
  const { start } = AppContext();
  return (
    <div>
      {start && <VideoFeed />}
      {start && <CanvasFeed />}
      {start && <DisplayResponse />}
      {start && <WebSocketFeed />}
      <Buttons />
    </div>
  );
}

export default App;
