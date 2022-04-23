import React from "react";
import VideoItem from "./VideoItem";
function VideoList({ videos, onVideoSelect }) {
  const renderdList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });
  return <div>{renderdList}</div>;
}

export default VideoList;
