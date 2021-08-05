import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { ACCESS_TOKEN_STORAGE_KEY } from "./consts";
import BaseLayout from "./core/layout/BaseLayout";

export default function ProtectedRoutes({ children }) {
  const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

  return isAuthenticated ? <BaseLayout>{children}</BaseLayout> : <Redirect to="/login" />;
}

ProtectedRoutes.propTypes = {
  children: PropTypes.node,
};
