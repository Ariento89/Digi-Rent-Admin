import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function TenantsActiveAbsoluteValueIndicator({ size }) {
  return (
    <AbsoluteValueIndicator
      label="Tenants Active"
      size={size}
      value="7260"
      icon="radar"
      primaryColor="#00bfb1"
      secondaryColor="#effbf2"
    />
  );
}

TenantsActiveAbsoluteValueIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
