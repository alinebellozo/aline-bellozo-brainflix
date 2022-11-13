import "./videoUpload.scss";
import React from "react";
import ThumbnailImage from "../../assets/images/Upload-video-preview.jpg";
import PublishVideo from "../../assets/icons/publish.svg";

export default function VideoUpload() {
  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <div className="video-upload__container">
        <div className="video-upload__thumbnail-container">
          <h4 className="video-upload__thumbnail">Video Thumbnail</h4>
          <img
            className="video-upload__thumbnail-image"
            src={ThumbnailImage}
            alt="Video thumbnail"
          />
        </div>
        <div className="video-upload__details">
          <div className="video-upload__title-container">
            <h4 className="video-upload__video-title">Title your video</h4>
            <input
              className="video-upload__title-input"
              id="input-field"
              type="text"
              placeholder="Add a title to your video"
            ></input>
          </div>
          <div className="video-upload__description-container">
            <h4 className="video-upload__description">
              Add a video description
            </h4>
            <textarea
              className="video-upload__description-input"
              id="input-field"
              type="text"
              placeholder="Add a decription to your video"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="video-upload__button-container">
        <p className="video-upload__cancel">Cancel</p>
        <button className="video-upload__button" type="submit">
          <img
            className="video-upload__button-icon"
            src={PublishVideo}
            alt="Publish video icon"
          />
          Publish
        </button>
        <p className="video-upload__cancel-second">Cancel</p>
      </div>
    </section>
  );
}
