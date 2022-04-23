import React from "react";
import VideoItem from "./VideoItem";
function VideoList({ videos }) {
  const renderdList =  videos.map((video) => {
        return <VideoItem video={video}/>
    })
  return <div>{renderdList}</div>;

}

export default VideoList;
