import PropTypes from "prop-types";
import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";

export default function PropertiesDisplayedAbsoluteValueIndicator({ value, isLoading }) {
  return (
    <AbsoluteValueIndicator
      label="Properties Displayed"
      value={value}
      icon="display"
      primaryColor="#012aff"
      secondaryColor="#f1f0fe"
      size="md"
      isLoading={isLoading}
    />
  );
}

PropertiesDisplayedAbsoluteValueIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
};

PropertiesDisplayedAbsoluteValueIndicator.defaultTypes = {
  isLoading: false,
};
