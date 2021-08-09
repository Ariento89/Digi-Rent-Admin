import axios from "axios";
import { post } from "../adapters/xhr";
import { ACCESS_TOKEN_STORAGE_KEY } from "../consts";
import safeCall from "./safeCall";

export const login = async (payload) => {
  const { data } = await safeCall(
    async () =>
      await post("admin/auth", {
        username: payload.email,
        password: payload.password,
        grant_type: "password",
        client_id: null,
        client_secret: null,
      }),
    "error_authentication",
    "Unexpected error to authenticate user"
  );
  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.access_token);
};

export const logout = () => {
  localStorage.clear();
  axios.defaults.headers.common["Authorization"] = null;
};
