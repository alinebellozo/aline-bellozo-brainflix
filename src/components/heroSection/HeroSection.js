import "./heroSection.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

export default function HeroSection({ videoDetails }) {

    const {
        title,
        channel,
        image,
        description,
        views,
        likes,
        timestamp,
        comments,
        ...rest
    } = videoDetails;

    return (
        <section className="hero">
            <section className="hero__video-container">
                <video src="" poster={image} className="hero__video" controls/>
                <div className="hero__video-details-container">
                    <h1 className="hero__video-title">{title}</h1>
                    <div className="hero__video-details">
                        <h4 className="hero__video-channel">By {channel}</h4>
                        <p className="hero__video-date">{new Date(videoDetails.timestamp).toLocaleDateString()}</p>
                        <div className="hero__video-views-container">
                            <img className="hero__video-views-icon" src={viewsIcon} alt="Views icon" />
                            <div className="hero__video-views">{views}</div>
                        </div>
                        <div className="hero__video-likes-container">
                            <img className="hero__video-likes-icon" src={likesIcon} alt="Likes icon" />
                            <div className="hero__video-likes">{likes}</div>
                        </div>
                    </div>
                    <p className="hero__video-description">{description}</p>
                </div>
            </section>
        </section>
    );
}