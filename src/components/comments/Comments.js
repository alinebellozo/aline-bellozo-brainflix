import "./comments.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";
import commentButton from "../../assets/icons/add_comment.svg"

export default function Comments({comments}) {
    return (
        <section className="comments">
            <h4 className="comments__number">3 comments</h4>
            <div className="comments__form-container">
                <p className="comments__join">Join the conversation</p>
                <div className="comments__input-container">
                    <div className="comments__avatar-container">
                        <img src={Image} alt="Left side of a man's face" className="comments__avatar-image"/>
                    </div>
                    <textarea className="comments__input-field" id="input-field" type="text" placeholder="Add a new comment"></textarea>
            </div>
                    <button className="comments__button" type="submit"><img className="comments__button-icon" src={commentButton} />Comment</button>
            </div>
            
               
        {comments.map((comment) => (    
            <section className="comments__container" key={comment.name}>               
                <div className="comments__avatar"></div>
                <div className="comments__details">
                    <span className="comments__name-date">
                        <p className="comments__name">{comment.name}</p>
                        <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
                    </span>
                    <p className="comments__text">{comment.comment}</p>
                    </div>
            </section>
        ))}
        </section>
    );
}