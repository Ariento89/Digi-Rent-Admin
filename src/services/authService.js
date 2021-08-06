import axios from "axios";
import jwtDecode from "jwt-decode";
import { post } from "../adapters/xhr";
import { ACCESS_TOKEN_STORAGE_KEY } from "../consts";
import safeCall from "./safeCall";

export const login = async (payload) => {
  const { data } = await safeCall(
    async () =>
      await post("auth", {
        username: payload.email,
        password: payload.password,
        grant_type: "password",
        client_id: null,
        client_secret: null,
      }),
    "error_authentication",
    "Unexpected error to authenticate user"
  );

  console.log(data);

  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.access_token);
  const decodedAccessToken = jwtDecode(data.access_token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${decodedAccessToken}`;
};

export const logout = () => {
  localStorage.clear();
  axios.defaults.headers.common["Authorization"] = null;
};
