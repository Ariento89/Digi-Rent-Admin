import PropTypes from "prop-types";

export default function Card({ title, children }) {
  return (
    <div style={{ display: "flex", backgroundColor: "#fff", width: "100%", padding: "25px", borderRadius: "4px" }}>
      {title && <div>{title}</div>}
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
