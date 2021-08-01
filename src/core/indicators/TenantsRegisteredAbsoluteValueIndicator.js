import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function TenantsRegisteredAbsoluteValueIndicator({ size }) {
  return (
    <AbsoluteValueIndicator
      label="Tenants Registered"
      size={size}
      value="1250"
      icon="tick-square"
      primaryColor="#41a2f9"
      secondaryColor="#ebf5ff"
    />
  );
}

TenantsRegisteredAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
