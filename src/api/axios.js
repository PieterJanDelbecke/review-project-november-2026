import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3", // Replace with your backend URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
