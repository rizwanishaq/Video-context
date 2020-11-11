import Buttons from "./components/Buttons";
import CanvasFeed from "./components/CanvasFeed";
import DisplayResponse from "./components/DisplayResponse";
import VideoFeed from "./components/VideoFeed";
import { AppContext } from "./contexts/appContext";
import { Container } from "react-bootstrap";

function App() {
  const { start } = AppContext();
  return (
    <Container>
      {start && <VideoFeed />}
      {start && <CanvasFeed />}
      {start && <DisplayResponse />}
      <Buttons />
    </Container>
  );
}

export default App;
