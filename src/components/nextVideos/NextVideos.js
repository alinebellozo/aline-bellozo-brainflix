import "./NextVideos";

// export default function NextVideos({videos, onClick}) {
//     return (
//         <aside className="next-videos">
//             {videos.slice(0, 8).map((video) => (
//                 <video
//                     className="next-videos__thumbnail"
//                     poster={video.image}
//                     key = {video.id + video.channel}
//                     onClick={(clickEvnt) => onClick(clickEvnt, video.id)}>
//                 </video>
//             ))}
//         </aside>
//     );
// }