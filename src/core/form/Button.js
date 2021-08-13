import PropTypes from "prop-types";
import Icon from "../layout/Icon";
import Spinner from "../layout/Spinner";

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
  fontSize,
  fontFamily,
  iconColor,
  rounded,
  isDisabled,
  isLoading,
  isFullWidth,
  rotateIcon,
}) {
  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={isDisabled}
      style={{
        backgroundColor: backgroundColor,
        opacity: isDisabled ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: isIconButton ? "auto" : "120px",
        width: isIconButton ? "32px" : "100%",
        maxWidth: isFullWidth ? "100%" : "200px",
        height: isIconButton ? "32px" : "38px",
        outline: 0,
        padding: isIconButton ? "auto" : "0",
        border: `1px solid ${backgroundColor}`,
        borderRadius: rounded ? "50px" : "7px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {isLoading ? (
        <Spinner size="xs" />
      ) : (
        <>
          {icon && <Icon name={icon} size={iconSize} color={iconColor ? iconColor : fontColor} rotate={rotateIcon} />}
          {label && (
            <span
              style={{
                color: fontColor,
                fontSize: fontSize,
                fontFamily: fontFamily,
                lineHeight: "20px",
                marginLeft: icon && !isIconButton ? "8px" : "0",
              }}
            >
              {label}
            </span>
          )}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  style: PropTypes.object,
  fontSize: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  fontFamily: PropTypes.string,
  iconSize: PropTypes.string,
  rounded: PropTypes.bool,
  rotateIcon: PropTypes.string,
};

Button.defaultProps = {
  label: null,
  icon: null,
  rotateIcon: null,
  isIconButton: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  htmlType: "button",
  onClick: () => {},
  style: {},
  fontSize: "14px",
  fontFamily: "GothamBook",
  rounded: false,
  fontColor: "#fff",
  backgroundColor: "transparent",
};
