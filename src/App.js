import "./App.scss";
import Header from "./components/header/Header";
import { useState } from "react";

// named imports
import getVideoDetails, { getVideos } from "./components/utils/Utils.js";

// components


 function App() {
    // Store the ID inside a state to use as the default
    const [vdeoId, setVdeoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
    const [videos, setVideos] = useState(getVideos(vdeoId));
    const [videoDetails, setVideoDetails] = useState(
    getVideoDetails(vdeoId));
    
     
         
    return (
        <div className="app">
            <Header />
        </div>
    );
 }
console.log("Hello world");
export default App;