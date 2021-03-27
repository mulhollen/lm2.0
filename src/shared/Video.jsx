import React from 'react';

const Video = ({video}) => {
  return (
    <video id="myvid" loop autoPlay="autoplay" className="w-100">
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Video;



