import PropTypes from "prop-types";
import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";

export default function TotalApplicationsAbsoluteValueIndicator({ value, isLoading }) {
  return (
    <AbsoluteValueIndicator
      label="Total Applications"
      value={value}
      icon="inbox"
      primaryColor="#ff4b77"
      secondaryColor="#fef1f4"
      size="md"
      isLoading={isLoading}
    />
  );
}

TotalApplicationsAbsoluteValueIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
};

TotalApplicationsAbsoluteValueIndicator.defaultTypes = {
  isLoading: false,
};
