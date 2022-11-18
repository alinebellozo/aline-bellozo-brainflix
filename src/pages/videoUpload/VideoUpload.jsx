import "./videoUpload.scss";
import React from "react";
// import SuccessPage from "../successPage/SuccessPage";
import ThumbnailImage from "../../assets/images/Upload-video-preview.jpg";
import PublishVideo from "../../assets/icons/publish.svg";
import { useState } from "react";

// store the data and then send it back to the api
export default function VideoUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // create a change handler for all inputs
  const handleChangeTitle = (event) => {
    // get inputted value from event, update state with value
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const isFormValid = () => {
    // Check if the field is filled
    if (title === "" || description === "") {
      // invalid form -> return
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      // This is where we would make an axios request
      // to our backend to add the user to our database.
      alert("Video uploaded successfully");
    } else {
      alert("Failed to upload your video :(");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
                name="videoTitle"
                placeholder="Add a title to your video"
                onChange={handleChangeTitle}
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
                name="videoDescription"
                placeholder="Add a decription to your video"
                onChange={handleChangeDescription}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="video-upload__button-container">
          <p className="video-upload__cancel">Cancel</p>
          <button
            disabled={!isFormValid()}
            className="video-upload__button"
            type="submit"
          >
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
    </form>
  );
}
