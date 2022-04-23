import axios from "axios";

const KEY = "AIzaSyAl3AfbUhlnW3IwpMa9Dgaw5WzNhJwhY6I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
