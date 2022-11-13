import "./nextVideos.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function NextVideos({ videos, onClick }) {
  return (
    <aside className="next-videos">
      <h4 className="next-videos__title">Next videos</h4>
      {videos.map((video) => (
        <>
          <div className="next-videos__thumbnail-container">
            <Link
              to={"/" + video.id}
              key={video.id}
              poster={video.image}
              className="next-videos__thumbnail"
              onClick={(clickEvnt) => onClick(clickEvnt, video.id)}
            ></Link>

            <div className="next-videos__description">
              <Link to={"/" + video.id} className="next-videos__video-title">
                {video.title}
              </Link>
              <Link to={"/" + video.id} className="next-videos__channel">
                {video.channel}
              </Link>
            </div>
          </div>
        </>
      ))}
    </aside>
  );
}
