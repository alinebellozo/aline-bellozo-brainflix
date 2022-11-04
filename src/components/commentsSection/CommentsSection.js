import "./CommentsSection";
import Image from "../../assets/images/Mohan-muruge.jpg";

export default function CommentsSection() {
    return (
        <section className="comments">
            <h4 className="comments__number"></h4>
            <p className="comments__join">Join the conversation</p>
            <div className="comments__input-container">
                <div className="comments__avatar-pic">
                    <img src={Image} alt="Left side of a man's face" className="comments__avatar-image" />
                </div>
                <input className="comments__input-field" id="input-field" type="text" placeholder="Add a new comment"></input>
                <button className="comments__button" type="submit">Comment</button>
            </div>
            <div className="comments__details-container">
                <div className="comments__avatar"></div>
                <div className="comments__details">
                    <p className="comments__name-date">
                        <p className="comments__name"></p>
                        <p className="comments__date"></p>
                    </p>
                    <p className="comments__text"></p>
                </div>
            </div>
        </section>
    );
}