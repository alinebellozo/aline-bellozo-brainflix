import "./heroSection.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "113326eb-4846-47ae-8940-ba5da86624a4";

export default function HeroSection({ searchVideoByVideoTitle, videoDetails }) {
    
    /* Component Mounted */
    useEffect(() => {
      axios
        .get(`https://developerjokes.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }, []);
    
    // const {
    //     title,
    //     channel,
    //     image,
    //     description,
    //     views,
    //     likes,
    //     timestamp,
    //     comments,
    //     ...rest
    // } = videoDetails;

    const { videoTitle } = useParams();
    const { title, channel, image, description, views, likes, timestamp, comments } = videoDetails;

    useEffect(() => {
        searchVideoByVideoTitle(videoTitle);
    }, [videoTitle]);

    return (
        Object.keys(videoDetails).length > 0 && (
        
            <section className="hero">
                <section className="hero__video-container">
                    <video src="" poster={image} className="hero__video" controls />
                    <div className="hero__video-details-container">
                        <h1 className="hero__video-title">{title}</h1>
                        <div className="hero__video-details">
                            <div className="hero__channel-date">
                                <h4 className="hero__video-channel">By {channel}</h4>
                                <p className="hero__video-date">{new Date(videoDetails.timestamp).toLocaleDateString()}</p>
                            </div>
                            <div className="hero__views-likes">
                                <div className="hero__video-views-container">
                                    <img className="hero__video-views-icon" src={viewsIcon} alt="Views icon" />
                                    <div className="hero__video-views">{views}</div>
                                </div>
                                <div className="hero__video-likes-container">
                                    <img className="hero__video-likes-icon" src={likesIcon} alt="Likes icon" />
                                    <div className="hero__video-likes">{likes}</div>
                                </div>
                            </div>
                        </div>
                        <p className="hero__video-description">{description}</p>
                    </div>
                </section>
            </section>
        )
    );
}