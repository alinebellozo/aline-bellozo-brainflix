import "./commentsForm.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg";
import React from "react";

export default function CommentsForm() {
  return (
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
              placeholder="Add a new comment"
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
  );
}
