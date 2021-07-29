import PropTypes from "prop-types";
import Icon from "../layout/Icon";

export default function Button({
  htmlType,
  label,
  onClick,
  backgroundColor,
  isIconButton,
  style,
  icon,
  iconSize,
  fontColor,
}) {
  return (
    <button
      type={htmlType}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isIconButton ? "32px" : "220px",
        height: isIconButton ? "32px" : "44px",
        outline: 0,
        border: `1px solid ${backgroundColor}`,
        cursor: "pointer",
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={iconSize} color={fontColor} />}
      {label && <span style={{ fontFamily: "Lato", fontSize: "16px", color: fontColor }}>{label}</span>}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  style: PropTypes.object,
  iconSize: PropTypes.string,
};

Button.defaultProps = {
  label: null,
  icon: null,
  htmlType: "button",
  onClick: () => {},
  style: {},
  fontColor: "#fff",
  backgroundColor: "transparent",
};
