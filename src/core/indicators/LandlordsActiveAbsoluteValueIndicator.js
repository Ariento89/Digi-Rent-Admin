import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function LandlordsActiveAbsoluteValueIndicator({ size }) {
  return (
    <AbsoluteValueIndicator
      label="Landlords Active"
      value="543"
      icon="radar"
      primaryColor="#00bfb1"
      secondaryColor="#effbf2"
      size={size}
    />
  );
}

LandlordsActiveAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
