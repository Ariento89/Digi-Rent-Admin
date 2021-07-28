import PropTypes from "prop-types";

export default function Row({ children }) {
  return <div style={{ display: "flex", marginBottom: "15px", flexDirection: "row" }}>{children}</div>;
}

Row.propTypes = {
  children: PropTypes.node,
};
