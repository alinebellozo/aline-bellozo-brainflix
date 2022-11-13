import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
// import Comments from "./components/comments/Comments";
// import NextVideos from "./components/nextVideos/NextVideos";
import VideoUpload from "./pages/videoUpload/VideoUpload.jsx";
// import getVideoDetails, { getVideos } from "./components/utils/Utils.js";
// import axios from "axios";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<VideoUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
