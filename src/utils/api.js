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
  options.url = `${BASE_URL}/${url}`;

  try {
    const { data } = await axios.request(options);
    console.log("URL Called::::: " + options.url);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
