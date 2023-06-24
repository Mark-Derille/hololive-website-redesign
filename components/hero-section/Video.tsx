import React from "react";

function Video() {
  return (
    <video
      autoPlay
      preload="auto"
      loop
      muted
      className="-z-10 absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/holo-connect.mp4" type="video/mp4" />
    </video>
  );
}

export default Video;
