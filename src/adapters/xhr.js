import axios from "axios";
import browserHistory from "../browserHistory";

function axiosInstance() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "application/json",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.statusCode === 401) {
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        browserHistory.push("/login");
      }
    }
  );
  return instance;
}

export async function get(url) {
  const api = axiosInstance();
  return await api.get(`${url}/`);
}

export async function post(url, body) {
  const api = axiosInstance();
  return await api.post(`${url}/`, body);
}
