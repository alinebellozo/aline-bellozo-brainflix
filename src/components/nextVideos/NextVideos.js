import "./nextVideos.scss";

export default function NextVideos({videos, onClick}) {
    return (

        <aside className="next-videos">
            <h4 className="next-videos__title">Next videos</h4>
            {videos.slice(0, 8).map((video) => (
                <>
                    <div className="next-videos__thumbnail-container">
                        <video
                        key={video.id}
                        poster={video.image}
                        className="next-videos__thumbnail"
                        onClick={(clickEvnt) => onClick(clickEvnt, video.id)} />
                    
                        <div className="next-videos__description">
                            <p className="next-videos__video-title">{video.title}</p>
                            <p className="next-videos__channel">{video.channel}</p>
                        </div>
                    </div>
                    </>
            ))} 
        </aside>
    );
}