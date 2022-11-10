import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Comments from "./components/comments/Comments";
import NextVideos from "./components/nextVideos/NextVideos";
import videoUpload from "./pages/videoUpload/VideoUpload";
// import getVideoDetails, { getVideos } from "./components/utils/Utils.js";
import axios from "axios";


// const searchByVideoId = (videoId) => `${apiKey}&i=${videoId}`;
// const searchByVideoName = (searchKeyword) => `${apiKey}&s=${searchKeyword}`;

export default function App() {
  
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
          <Route path="/" element={<HeroSection />} />
            <Route path="/:videoId" element={<HeroSection />} />
            {/* <Route path="/:videoId" element={<NextVideos />} /> */}
            <Route path="/upload" />
            {/* <Comments /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
