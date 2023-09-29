import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GetStarted, Home, Video, VideoDetails, VideoReady } from "./pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp/logIn" element={<GetStarted />} />
          <Route path="/home" element={<Video />} />
          <Route path="/home/video/details/:id" element={<VideoDetails />} />
          <Route path="/video/ready" element={<VideoReady />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
