import PropTypes from "prop-types";
import Icon from "../../layout/Icon";

export default function AbsoluteValueIndicatorIcon({ name, primaryColor, secondaryColor }) {
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        backgroundColor: secondaryColor,
      }}
    >
      <Icon name={name} color={primaryColor} size="md" />
    </div>
  );
}

AbsoluteValueIndicatorIcon.propTypes = {
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};
