import PropTypes from "prop-types";

export default function Button({ htmlType, label }) {
  return <button type={htmlType}>{label}</button>;
}

Button.propTypes = {
  htmlType: PropTypes.oneOf(["button", "submit"]),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  htmlType: "button",
};
