import React from "react";
import "./VideoItem.css";
function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="ui middle aligned animated list">
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
