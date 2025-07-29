import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://199.192.19.130:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
