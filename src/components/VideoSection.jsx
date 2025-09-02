// src/components/VideoSection.jsx
import "../styles/VideoSection.css";

export default function VideoSection() {
    return (
      <section className="video-section">
        <div className="video">
        <video src="./video_banner.mp4" autoPlay muted loop playsInline></video>
        </div>
      </section>
    );
  }