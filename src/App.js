import "./App.scss";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Comments from "./components/comments/Comments";
import NextVideos from "./components/nextVideos/NextVideos";

import { useState } from "react";

import getVideoDetails, { getVideos } from "./components/utils/Utils.js";

export default function App() {
    // Store the ID inside a state to use as the default
    const [vdeoId, setVdeoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
    const [videos, setVideos] = useState(getVideos(vdeoId));
    const [videoDetails, setVideoDetails] = useState(
    getVideoDetails(vdeoId));
    
    const handleClick = (clickEvnt, vdeoIdClickedOn) => {
        setVdeoId(vdeoIdClickedOn);
        setVideos(getVideos(vdeoIdClickedOn));
        setVideoDetails(getVideoDetails(vdeoIdClickedOn));
    };

    return (
        <div className="app">
            <Header />
            <HeroSection />
            <Comments comments={videoDetails.comments} />
            <NextVideos videos={videos} onClick={handleClick} />
        </div>
    );
}