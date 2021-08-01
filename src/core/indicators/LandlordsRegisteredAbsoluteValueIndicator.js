import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function LandlordsRegisteredAbsoluteValueIndicator({ size }) {
  return (
    <AbsoluteValueIndicator
      label="Landlords Registered"
      value="412"
      icon="tick-square"
      primaryColor="#41a2f9"
      secondaryColor="#ebf5ff"
      size={size}
    />
  );
}

LandlordsRegisteredAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
