import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import BaseLayout from "./core/layout/BaseLayout";

export default function ProtectedRoutes({ children }) {
  const isAuthenticated = localStorage.getItem("DigiRent@accessToken");

  return isAuthenticated ? <BaseLayout>{children}</BaseLayout> : <Redirect to="/login" />;
}

ProtectedRoutes.propTypes = {
  children: PropTypes.node,
};
