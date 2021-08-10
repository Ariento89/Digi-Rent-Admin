import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function LandlordsRegisteredAbsoluteValueIndicator({ size, value, isLoading }) {
  return (
    <AbsoluteValueIndicator
      label="Landlords Registered"
      value={value}
      icon="tick-square"
      primaryColor="#41a2f9"
      secondaryColor="#ebf5ff"
      size={size}
      isLoading={isLoading}
    />
  );
}

LandlordsRegisteredAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

LandlordsRegisteredAbsoluteValueIndicator.defaultProps = {
  isLoading: false,
};
