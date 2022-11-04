import "./heroSection.scss";

export default function HeroSection() {


    return (
        <section className="hero">
            <video src="" poster="https://i.imgur.com/l2Xfgpl.jpg" alt="Two people riding their mountain bikes and wearing a helmet" className="hero__video"/>
            <div className="hero__video-details-container">
                <h1 className="hero__video-title"></h1>
                <div className="hero__video-details">
                    <h4 className="hero__video-channel"></h4>
                    <p className="hero__video-date"></p>
                    <div className="hero__video-views"></div>
                    <div className="hero__video-likes"></div>
                </div>
                <p className="hero__video-description"></p>
            </div>
        </section>
    );
}