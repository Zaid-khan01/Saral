import axios from "axios";

const API = axios.create({
    baseURL: "https://saral-hh7e.onrender.com/api",
});

export default API;