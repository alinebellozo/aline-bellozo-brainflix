import "./comments.scss";
import React from "react";

export default function Comments({ name, comment, date }) {
  return (
    <>
      <section className="comments__container">
        <div className="comments__avatar"></div>
        <div className="comments__details">
          <span className="comments__name-date">
            <p className="comments__name">{name}</p>
            <p className="comments__date">
              {new Date(date).toLocaleDateString()}
            </p>
          </span>
          <p className="comments__text">{comment}</p>
        </div>
      </section>
    </>
  );
}
