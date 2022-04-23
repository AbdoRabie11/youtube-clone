import React from "react";

function VideoItem({ video }) {
  return (
    <div className="ui middle aligned animated list">
      <div className="item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="content">
            <div className="header">
            {video.snippet.title}
            </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
