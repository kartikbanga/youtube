import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  method: "GET",
  url: "",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  options.url = `${BASE_URL}/${url}`;

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
