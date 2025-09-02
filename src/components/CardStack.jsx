import React from "react";
import "../styles/CardStack.css";

const CardStack = () => {
  return (
    <div className="card-stack">
      {/* Left Card with Video */}
      <div className="card card-left">
        <video className="card-video" autoPlay muted loop playsInline>
          <source src="/videos/demo1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Card with Video */}
      <div className="card card-right">
        <video className="card-video" autoPlay muted loop playsInline>
          <source src="/videos/demo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CardStack;
