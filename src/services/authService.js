import axios from "axios";
import jwtDecode from "jwt-decode";
import { ACCESS_TOKEN_STORAGE_KEY } from "../consts";

export const login = async (payload) => {
  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (payload.email === "lucashwolff@gmail.com" && payload.password === "123") {
        const { data } = {
          status: 200,
          data: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiTHVjYXMgV29sZmYiLCJpYXQiOjE1MTYyMzkwMjJ9.qc9hpC12QtaeJ78LHg0sg917xxEzB5kEQ96G38CCQmI",
          },
        };

        localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.access_token);
        const decodedAccessToken = jwtDecode(data.access_token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${decodedAccessToken}`;
        resolve();
      }
      return reject({ status: 401 });
    }, 2000)
  );
};

export const logout = () => {
  localStorage.clear();
  axios.defaults.headers.common["Authorization"] = null;
};
