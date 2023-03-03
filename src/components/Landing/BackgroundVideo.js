import "./BackgroundVideo.css";
import moon from "../Images/moon-hero.mp4";
import moon2 from "../Images/moon-hero.ogv";
import moon3 from "../Images/moon-hero.webm";
import moonMobile from "../Images/moon-mobile.jpg";

export default function BackgroundVideo() {
  return (
    <div>
      <div className="video-overlay" />
      <video
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
        id="bg-video"
        className="bg-video"
        poster={moonMobile}
        src={moon}
      />
    </div>
  );
}
