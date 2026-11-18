import axios from "./axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const getPopularMovies = async () => {
  try {
    const { status, data } = await axios.get("/movie/popular", {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    if (status === 200 || status === 201) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return error.response.data;
  }
};

const api = {
  getPopularMovies,
};

export default api;
