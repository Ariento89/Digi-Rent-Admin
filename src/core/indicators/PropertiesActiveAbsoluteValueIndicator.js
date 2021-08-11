import PropTypes from "prop-types";
import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";

export default function PropertiesActiveAbsoluteValueIndicator({ value, isLoading }) {
  return (
    <AbsoluteValueIndicator
      label="Properties Active"
      value={value}
      icon="radar"
      primaryColor="#00bfb1"
      secondaryColor="#effbf2"
      size="md"
      isLoading={isLoading}
    />
  );
}

PropertiesActiveAbsoluteValueIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
};

PropertiesActiveAbsoluteValueIndicator.defaultTypes = {
  isLoading: false,
};
