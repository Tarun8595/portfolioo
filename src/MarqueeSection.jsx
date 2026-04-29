import React from "react";
import "./MarqueeSection.css";

const text = "✺ Driven by Passion, Built with Code ✺ Custom Web Experiences ✺ Innovative Self-Made Creations ✺ ";

function MarqueeSection() {
  return (
    <div className="marquee-container">

      {/* TOP */}
      <div className="marquee marquee_top">
        <div className="track">
          <p>{text.repeat(6)}</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="marquee marquee_bottom">
        <div className="track">
          <p>{text.repeat(6)}</p>
        </div>
      </div>

    </div>
  );
}

export default MarqueeSection;