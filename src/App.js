import "./App.scss";

import { useState, useEffect } from "react";
// React router components
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Comments from "./components/comments/Comments";
import NextVideos from "./components/nextVideos/NextVideos";

// Pages
import videoUpload from "./pages/videoUpload/VideoUpload";

import getVideoDetails, { getVideos } from "./components/utils/Utils.js";
import axios from "axios";

const searchByVideoId = (videoId) => `${REACT_APP_VIDEO_API_KEY}&i=${videoId}`;
const searchByVideoName = (searchKeyword) => `${REACT_APP_VIDEO_API_KEY}&s=${searchKeyword}`;

export const videosInfo = () => {
    axios
        .get(`https://project-2-api.herokuapp.com/register?api_key=${REACT_APP_VIDEO_API_KEY}`)
        .then((response) => {
            const data = response.data;
            console.log(data);
        })
        .catch((error) => error);
};

export default function App() {
    // Store the ID inside a state to use as the default
    const [videos, setVideos] = useState([]);
    const [videoDetails, setVideoDetails] = useState({});
    const [defaultSearch] = useState("BMX Rampage: 2021 Highlights");

    const handleSearchVideos = async (event) => {
    event.preventDefault();
    const searchKeyword = event.target.searchVideoInput.value;
    const { data } = await axios.get(searchByVideoName(searchKeyword));
    setVideos(data.Search);
    setVideoDetails({});
    event.target.reset();
  };
    
    const searchVideoByVideoId = async (videoId) => {
    const { data } = await axios.get(searchByVideoId(videoId));
    setVideoDetails(data);
  };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(searchByVideoName(defaultSearch));
        setVideos(data.Search);
      } catch (error) {
        console.log("Error", error);
      }
    };

     fetchData();
    }, [defaultSearch]);
    
    return (
    <>
      {/** Header component always needs to be shown. Hence, it is not inside BrowserRouter */}
      <Header searchVideos={handleSearchVideos} />
      <div className="video-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/videos" />} />
            <Route
              path="videos"
              element={<NextVideos videos={videos} />}
            />
            <Route
              path="videos/:videoId"
              element={
                <>
                  <NextVideos videos={videos} />
                  <Comments
                    videoDetails={videoDetails}
                    searchVideoByVideoId={searchVideoByVideoId}
                  />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  ); 

}
  
       
    // const handleClick = (clickEvnt, vdeoIdClickedOn) => {
    //     setVdeoId(vdeoIdClickedOn);
    //     setVideos(getVideos(vdeoIdClickedOn));
    //     setVideoDetails(getVideoDetails(vdeoIdClickedOn));
    // };
    
    // return (
    //     <div className="app">
    //         <div className="app__top-container">
    //             <Header />
    //             <HeroSection videoDetails={videoDetails} />
    //         </div>
            
    //         <div className="app__bottom-container">
    //         <Comments comments={videoDetails.comments} />
    //         <NextVideos videos={videos} onClick={handleClick} />
    //         </div>
    //     </div>
    // );