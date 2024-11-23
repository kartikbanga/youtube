// import axios from "axios";

// const BASE_URL = "https://yt-api.p.rapidapi.com/search?query=car";

// const options = {
//   method: "GET",
//   // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   // params: { hl: "en", gl: "US" },
//   headers: {
//     "x-rapidapi-key": process.env.REACT_APP_YOUTUBE_API_KEY,
//     "x-rapidapi-host": "https://yt-api.p.rapidapi.com",
//   },
// };

import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  method: "GET",
  url: "",
  // params: { query: "cat" },
  headers: {
    "x-rapidapi-key": "2afac2fedfmshb5571a7c9e5e8d9p175a59jsncab613b3810a",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  options.url = `${BASE_URL}/${url}`

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};



