import PropTypes from "prop-types";

export default function Card({ title, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        width: "100%",
        padding: "25px 20px",
        borderRadius: "4px",
      }}
    >
      {title && (
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <span style={{ color: "#000", fontSize: "20px", fontFamily: "GothamMedium" }}>{title}</span>
        </div>
      )}
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
