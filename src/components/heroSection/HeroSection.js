import "./heroSection.scss";
import Image from "../../assets/images/Mohan-muruge.jpg";

export default function HeroSection() {

    return (
        <section className="hero">
            <section className="hero__video-container">
                <video src="" poster="https://i.imgur.com/l2Xfgpl.jpg" className="hero__video"/>
                <div className="hero__video-details-container">
                    <h1 className="hero__video-title"></h1>
                    <div className="hero__video-details">
                        {/* <h4 className="hero__video-channel"></h4> */}
                        {/* <p className="hero__video-date"></p> */}
                        {/* <div className="hero__video-views"></div> */}
                        {/* <div className="hero__video-likes"></div> */}
                    </div>
                    <p className="hero__video-description"></p>
                </div>
            </section>
            
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
            </section>
        </section>
    );
}