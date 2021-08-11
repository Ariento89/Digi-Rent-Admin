import PropTypes from "prop-types";
import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";

export default function TotalPropertiesAbsoluteValueIndicator({ value, isLoading }) {
  return (
    <AbsoluteValueIndicator
      label="Total Properties"
      value={value}
      icon="properties"
      primaryColor="#0d96ef"
      secondaryColor="#ebf5ff"
      size="md"
      isLoading={isLoading}
    />
  );
}

TotalPropertiesAbsoluteValueIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
};

TotalPropertiesAbsoluteValueIndicator.defaultTypes = {
  isLoading: false,
};
