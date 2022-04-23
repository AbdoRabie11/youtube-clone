import axios from "axios";

const KEY = "AIzaSyC5EkbwZX2ifnJJWl2Jo__NY5bnBmOi2-A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
