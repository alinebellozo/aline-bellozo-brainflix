import "./commentsForm.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg";
import React from "react";
import { useState } from "react";

// store the data and then send it back to the api
export default function CommentsForm() {
  const [comment, setComment] = useState("");

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

    if (isFormValid()) {
      // This is where we would make an axios request
      // to our backend to add the user to our database.
      alert("Comment posted successfully");
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
                onChange={handleChangeComment}
              ></textarea>
              <button
                disabled={!isFormValid()}
                className="comments__button"
                type="submit"
              >
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
