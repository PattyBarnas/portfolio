import React from "react";

import "./BackgroundVideo.css";

import vid from "../Images/vid.mp4";

export default function BackgroundVideo() {
  return (
    <div>
      <div className="video-overlay" />
      <video
        muted
        autoPlay
        preload="true"
        loop
        id="bg-video"
        className="bg-video"
        src={vid}
      />
    </div>
  );
}
