import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GetStarted, Home, Video, VideoDetails } from "./pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp/logIn" element={<GetStarted />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/video/Details/:id" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
