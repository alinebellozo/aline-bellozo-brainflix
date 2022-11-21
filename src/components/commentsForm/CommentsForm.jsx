import "./commentsForm.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// store the data and then send it back to the api
export default function CommentsForm({ handleSubmitChange, mainVid }) {
  const [comment, setComment] = useState("");
  const { videoId } = useParams();

  // create a change handler for all inputs
  const handleChangeComment = (event) => {
    // get inputted value from event, update state with value
    setComment(event.target.value);
  };

  const isFormValid = () => {
    // Check if the field is filled
    if (comment === "") {
      // invalid form -> alert and return
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = typeof videoId !== undefined ? mainVid : videoId;

    if (isFormValid()) {
      axios
        .post(`http://localhost:8080/videos/${id}/comment`, {
          comment: comment,
        })
        .then((response) => {
          // console.log(response);
          alert("Comment posted successfully");
          setComment("");
          //event.target.value = "";
          handleSubmitChange();
        })
        .catch((error) => {
          // console.log(error);
          alert("Failed to upload your comment...");
        });
    } else {
      alert("Failed to upload your comment :(");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="comments">
        <div className="comments__form-container">
          <h4 className="comments__join">Join the conversation</h4>
          <div className="comments__input-container">
            <div className="comments__avatar-container">
              <img
                src={Image}
                alt="Left side of a man's face"
                className="comments__avatar-image"
              />
            </div>
            <div className="comments__text-button">
              <textarea
                className="comments__input-field"
                id="input-field"
                type="text"
                name="comment"
                placeholder="Add a new comment"
                value={comment}
                onChange={handleChangeComment}
              ></textarea>
              <button className="comments__button" type="submit">
                <img
                  className="comments__button-icon"
                  src={commentButton}
                  alt="Add comment icon"
                />
                Comment
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
