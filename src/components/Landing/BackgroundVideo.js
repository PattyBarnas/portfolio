import "./BackgroundVideo.css";
import React from "react";
import clouds from "../Images/beach12.mp4";
import moon from "../Images/moon-hero.mp4";

export default function BackgroundVideo() {
  return (
    <div>
      <div className="overlay" />
      <video loop autoPlay muted id="bg-video">
        <source src={moon} type="video/mp4" />
      </video>
    </div>
  );
}
