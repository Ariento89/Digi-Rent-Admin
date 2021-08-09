import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function TenantsRegisteredAbsoluteValueIndicator({ size, isLoading, value }) {
  return (
    <AbsoluteValueIndicator
      label="Tenants Registered"
      size={size}
      value={value}
      icon="tick-square"
      primaryColor="#41a2f9"
      secondaryColor="#ebf5ff"
      isLoading={isLoading}
    />
  );
}

TenantsRegisteredAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

TenantsRegisteredAbsoluteValueIndicator.defaultProps = {
  isLoading: false,
};
