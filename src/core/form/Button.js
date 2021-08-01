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
  iconColor,
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
        minWidth: isIconButton ? "auto" : "120px",
        width: isIconButton ? "32px" : "auto",
        height: isIconButton ? "32px" : "38px",
        outline: 0,
        padding: isIconButton ? "auto" : "0 20px",
        border: `1px solid ${backgroundColor}`,
        borderRadius: "7px",
        cursor: "pointer",
        ...style,
      }}
    >
      {icon && <Icon name={icon} size={iconSize} color={iconColor ? iconColor : fontColor} />}
      {label && (
        <span
          style={{
            color: fontColor,
            fontSize: "14px",
            lineHeight: "20px",
            marginLeft: icon && !isIconButton ? "8px" : "0",
          }}
        >
          {label}
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  style: PropTypes.object,
  iconSize: PropTypes.string,
};

Button.defaultProps = {
  label: null,
  icon: null,
  isIconButton: false,
  htmlType: "button",
  onClick: () => {},
  style: {},
  fontColor: "#fff",
  backgroundColor: "transparent",
};
