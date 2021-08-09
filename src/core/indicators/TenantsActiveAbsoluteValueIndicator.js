import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function TenantsActiveAbsoluteValueIndicator({ size, isLoading, value }) {
  return (
    <AbsoluteValueIndicator
      label="Tenants Active"
      size={size}
      value={value}
      icon="radar"
      primaryColor="#00bfb1"
      secondaryColor="#effbf2"
      isLoading={isLoading}
    />
  );
}

TenantsActiveAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

TenantsActiveAbsoluteValueIndicator.defaultProps = {
  isLoading: false,
};
