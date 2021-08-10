import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function LandlordsActiveAbsoluteValueIndicator({ size, value, isLoading }) {
  return (
    <AbsoluteValueIndicator
      label="Landlords Active"
      value={value}
      icon="radar"
      primaryColor="#00bfb1"
      secondaryColor="#effbf2"
      size={size}
      isLoading={isLoading}
    />
  );
}

LandlordsActiveAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

LandlordsActiveAbsoluteValueIndicator.defaultProps = {
  isLoading: false,
};
