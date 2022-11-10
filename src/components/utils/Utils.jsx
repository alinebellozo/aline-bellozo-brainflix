import brainFlixVideos from "../../assets/data/videos.json";
import brainFlixVideoDetails from "../../assets/data/video-details.json";

// functions to retrieve data -> Modules in Node.js

// named export

// provides all videos except the one with id -> videoId
export const getVideos = (videoId) => {
  return brainFlixVideos.filter((video) => video.id !== videoId);
};

const getVideoDetails = (videoId) => {
  return brainFlixVideoDetails.find(
    (video) => video.id === videoId
  );
};

// default export
export default getVideoDetails;