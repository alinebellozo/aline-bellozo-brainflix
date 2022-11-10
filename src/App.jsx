import "./App.scss";

// React router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Comments from "./components/comments/Comments";
import NextVideos from "./components/nextVideos/NextVideos";

// // Pages
import videoUpload from "./pages/videoUpload/VideoUpload";

// import getVideoDetails, { getVideos } from "./components/utils/Utils.js";
import axios from "axios";

const apiKey = "113326eb-4846-47ae-8940-ba5da86624a4";

const searchByVideoId = (videoId) => `${apiKey}&i=${videoId}`;
const searchByVideoName = (searchKeyword) => `${apiKey}&s=${searchKeyword}`;

export const videosInfo = () => {
    axios
        .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
        .then((response) => {
            const data = response.data;
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
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/:videoId" element={<HeroSection />} />
          <Route path="/upload" />
            {/* <Comments /> */}
            {/* <NextVideos /> */}
        </Routes>
      </div>
    </BrowserRouter>
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