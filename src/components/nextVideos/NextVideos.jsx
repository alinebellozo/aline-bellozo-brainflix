import "./nextVideos.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function NextVideos(props) {
  // console.log(props.videoDetails);
  console.log(props.videos);

  const getVideoDetails = (videoDetailsArray, vidId) => {
    return videoDetailsArray.find((video) => video.id === vidId);
  };

  return (
    <aside className="next-videos">
      <h4 className="next-videos__title">Next videos</h4>
      {props.videos
        .filter((video) => video.id !== props.videoDetails.id)
        .map((video) => (
          <div key={video.id} className="next-videos__thumbnail-container">
            <Link to={"/" + video.id}>
              <img className="next-videos__thumbnail" src={video.image} />
            </Link>

            <div className="next-videos__description">
              <Link to={"/" + video.id} className="next-videos__video-title">
                {video.title}
              </Link>
              <Link to={"/" + video.id} className="next-videos__channel">
                {video.channel}
              </Link>
            </div>
          </div>
        ))}
    </aside>
  );
}
