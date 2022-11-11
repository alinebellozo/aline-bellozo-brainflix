import "./homePage.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "44ae354b-6e2d-41cf-a5bb-1edbe13b3d4d";

// export default function HeroSection({ searchVideoByVideoTitle, videoDetails }) {
export default function HomePage({videoDetails}) {
    //need to have the main video still as a state
    const [mainVid, setMainVid] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');
    //THERE BEFORE
    const [videos, setVideos] = useState([]);
    const defaultVideoId = videos.length > 0 ? videos[0].id : null;
    const { videoId } = useParams();
    
    //getting list of videos
    useEffect(() => {
      axios
          .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
        .then((response) => {
          console.log(response.data);
          //set state video with the reponse from the API
          setVideos(response.data);
        })
        .catch((error) => console.log(error));
    }, []);

    //use effect for the main video
    useEffect(() => {
        //you will need to see if the videoId is undefined, like you are currently getting since 
        //it hasn't been defined to anything with the useParams
        if(videoId !== undefined) {
        axios
            .get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
          .then((response) => {
            //console.log(response.data);
            //set your main video with the data from the api call
            setMainVid(response.data)
          })
          .catch((error) => console.log(error));
          //else statement for if the video id is not defined
        } else {
            axios
            //you will set the video id to the default in the state.  You may need to change this to
            //hard code the id of the BMX code.  I can't test it since there are not any videos to swap between
            //be aware of this once you can click on the videos in the video list
            .get(`https://project-2-api.herokuapp.com/videos/${mainVid}?api_key=${apiKey}`)
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
       videoDetails && (
            <section className="hero">
                <section className="hero__video-container">
                    <video src="" poster={videoDetails.image} className="hero__video" controls />
                    <div className="hero__video-details-container">
                        <h1 className="hero__video-title">{videoDetails.title}</h1>
                        <div className="hero__video-details">
                            <div className="hero__channel-date">
                                <h4 className="hero__video-channel">By {videoDetails.channel}</h4>
                                <p className="hero__video-date">{new Date(videoDetails.timestamp).toLocaleDateString()}</p>
                            </div>
                            <div className="hero__views-likes">
                                <div className="hero__video-views-container">
                                    <img className="hero__video-views-icon" src={viewsIcon} alt="Views icon" />
                                    <div className="hero__video-views">{videoDetails.views}</div>
                                </div>
                                <div className="hero__video-likes-container">
                                    <img className="hero__video-likes-icon" src={likesIcon} alt="Likes icon" />
                                    <div className="hero__video-likes">{videoDetails.likes}</div>
                                </div>
                            </div>
                        </div>
                        <p className="hero__video-description">{videoDetails.description}</p>
                    </div>
                </section>
            </section>
        )
    )
}