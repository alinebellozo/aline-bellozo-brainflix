import "./homePage.scss";
import Comments from "../../components/comments/Comments";
import CommentsForm from "../../components/commentsForm/CommentsForm";
import NextVideos from "../../components/nextVideos/NextVideos";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "44ae354b-6e2d-41cf-a5bb-1edbe13b3d4d";

export default function HomePage() {
  //main video still as a state
  const [mainVid, setMainVid] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  //THERE BEFORE
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const defaultVideoId = videos.length > 0 ? videos[0].id : null;
  const { videoId } = useParams();

  //getting list of videos
  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
      .then((response) => {
        //set state video with the response from the API
        setVideos(response.data);
      })
      .catch((error) => console.log(error));
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${mainVid}?api_key=${apiKey}`
      )
      .then((response) => {
        setVideoDetails(response.data);
      });
  }, []);

  // use effect for the main video
  useEffect(() => {
    //check if the videoId is undefined
    if (videoId !== undefined) {
      axios
        .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
        .then((response) => {
          //set state video with the response from the API
          setVideos(response.data);
        })
        .catch((error) => console.log(error));
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
        )
        .then((response) => {
          //set main video with the data from the api call
          setMainVid(response.data);
          setVideoDetails(response.data);
          // console.log(response.data);
        })
        .catch((error) => console.log(error));
      //else statement for if the video id is not defined
    } else {
      axios
        //you will set the video id to the default in the state. You may need to change this to
        //hard code the id of the BMX code.
        .get(
          `https://project-2-api.herokuapp.com/videos/${mainVid}?api_key=${apiKey}`
        )
        .then((response) => {
          //console.log(response.data);
          //set the data from this axios call to the setMainVid state
          setMainVid(response.data);
        })
        .catch((error) => console.log(error));
    }
    //this use effect is dependant on the videoId
  }, [videoId]);

  return (
    <>
      <section className="home">
        <section className="home__video-container">
          <video
            src=""
            poster={videoDetails.image}
            className="home__video"
            controls
          />
          <div className="home__video-details-container">
            <h1 className="home__video-title">{videoDetails.title}</h1>
            <div className="home__video-details">
              <div className="home__channel-date">
                <h4 className="home__video-channel">
                  By {videoDetails.channel}
                </h4>
                <p className="home__video-date">
                  {new Date(videoDetails.timestamp).toLocaleDateString()}
                </p>
              </div>
              <div className="home__views-likes">
                <div className="home__video-views-container">
                  <img
                    className="home__video-views-icon"
                    src={viewsIcon}
                    alt="Views icon"
                  />
                  <div className="home__video-views">{videoDetails.views}</div>
                </div>
                <div className="home__video-likes-container">
                  <img
                    className="home__video-likes-icon"
                    src={likesIcon}
                    alt="Likes icon"
                  />
                  <div className="home__video-likes">{videoDetails.likes}</div>
                </div>
              </div>
            </div>
            <p className="home__video-description">
              {videoDetails.description}
            </p>
          </div>
        </section>
      </section>

      <CommentsForm />

      {videoDetails.comments?.map((video, index) => (
        <Comments
          key={video.id}
          comment={video.comment}
          name={video.name}
          date={video.timestamp}
        />
      ))}
      <NextVideos videos={videos} videoDetails={videoDetails} />
    </>
    // )
  );
}
