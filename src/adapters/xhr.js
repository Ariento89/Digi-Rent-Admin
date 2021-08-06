import axios from "axios";
import { keys } from "lodash";
import browserHistory from "../browserHistory";
import { ACCESS_TOKEN_STORAGE_KEY } from "../consts";

function axiosInstance() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "application/json",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 422) {
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        if (error.config.url !== "auht/") {
          browserHistory.push("/login");
        }
      }
      return Promise.reject(error);
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
  const formData = new FormData();
  keys(body).reduce((_, key) => formData.append(key, body[key]), []);

  return await api.post(`${url}/`, formData);
}
