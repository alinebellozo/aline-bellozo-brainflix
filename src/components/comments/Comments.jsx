import "./comments.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg";
import React from "react";

export default function Comments({ comments }) {
  return (
    <section className="comments">
      <h4 className="comments__number">{comments.length}comments</h4>
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

      {comments.map((comment) => (
        <section className="comments__container" key={comment.name}>
          <div className="comments__avatar"></div>
          <div className="comments__details">
            <span className="comments__name-date">
              <p className="comments__name">{comment.name}</p>
              <p className="comments__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </p>
            </span>
            <p className="comments__text">{comment.comment}</p>
          </div>
        </section>
      ))}
    </section>
  );
}
