import "./heroSection.scss";

export default function HeroSection() {

    return (
        <section className="hero">
            <section className="hero__video-container">
                <video src="" poster="https://i.imgur.com/l2Xfgpl.jpg" className="hero__video"/>
                <div className="hero__video-details-container">
                    <h1 className="hero__video-title"></h1>
                    <div className="hero__video-details">
                        {/* <h4 className="hero__video-channel">{channel}</h4>
                        <p className="hero__video-date">{timestamp}</p>
                        <div className="hero__video-views">{views}</div>
                        <div className="hero__video-likes">{likes}</div> */}
                    </div>
                    <p className="hero__video-description"></p>
                </div>
            </section>
        </section>
    );
}