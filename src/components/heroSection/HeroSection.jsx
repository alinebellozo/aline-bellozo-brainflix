import "./heroSection.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "44ae354b-6e2d-41cf-a5bb-1edbe13b3d4d";

// export default function HeroSection({ searchVideoByVideoTitle, videoDetails }) {
export default function HeroSection({ videoDetails }) {
  const [videos, setVideos] = useState([]);
  const defaultVideoId = videos.length > 0 ? videos[0].id : null;

  const { videoId } = useParams();
  // const videoToDisplay = videoId || defaultVideoId;

  /* Component Mounted */
  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    console.log(videoId);
  }, [videoId]);

  return (
    videoDetails && (
      <section className="hero">
        <section className="hero__video-container">
          <video
            src=""
            poster={videoDetails.image}
            className="hero__video"
            controls
          />
          <div className="hero__video-details-container">
            <h1 className="hero__video-title">{videoDetails.title}</h1>
            <div className="hero__video-details">
              <div className="hero__channel-date">
                <h4 className="hero__video-channel">
                  By {videoDetails.channel}
                </h4>
                <p className="hero__video-date">
                  {new Date(videoDetails.timestamp).toLocaleDateString()}
                </p>
              </div>
              <div className="hero__views-likes">
                <div className="hero__video-views-container">
                  <img
                    className="hero__video-views-icon"
                    src={viewsIcon}
                    alt="Views icon"
                  />
                  <div className="hero__video-views">{videoDetails.views}</div>
                </div>
                <div className="hero__video-likes-container">
                  <img
                    className="hero__video-likes-icon"
                    src={likesIcon}
                    alt="Likes icon"
                  />
                  <div className="hero__video-likes">{videoDetails.likes}</div>
                </div>
              </div>
            </div>
            <p className="hero__video-description">
              {videoDetails.description}
            </p>
          </div>
        </section>
      </section>
    )
  );
}
