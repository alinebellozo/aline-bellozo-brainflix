import "./nextVideos.scss";

// always use map() for translating array of data into array of html tags (React elements)

// in map fn -> use round braces () if no return keyword is used
// or use curly braces {} if return keyword is used

export default function NextVideos({videos, onClick}) {
    return (
        <aside className="next-videos">
            {videos.slice(0, 8).map((video) => (
                <video
                    className="next-videos__thumbnail"
                    poster={video.image}
                    key = {video.id + video.channel}
                    onClick={(clickEvnt) => onClick(clickEvnt, video.id)}>
                </video>
            ))}
        </aside>
    );
}