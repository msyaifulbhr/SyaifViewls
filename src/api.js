import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
  },
  params: {
    api_key: "61e128e196425342f6e52e7cb3f73a27",
  },
});

export default API 
