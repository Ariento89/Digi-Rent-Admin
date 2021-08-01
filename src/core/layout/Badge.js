import PropTypes from "prop-types";

export default function Badge({ label, status }) {
  const backgroundColor = { success: "#e7f8ea", error: "#fee9ef" }[status];
  const fontColor = { success: "#34c354", error: "#ff4b77" }[status];

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "80px",
        height: "25px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ color: fontColor, fontFamily: "GothamMedium", fontSize: "13px" }}>{label}</span>
    </div>
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
