import AbsoluteValueIndicator from "./commons/AbsoluteValueIndicator";
import PropTypes from "prop-types";

export default function TenantsApplicationsAbsoluteValueIndicator({ isLoading, value }) {
  return (
    <AbsoluteValueIndicator
      label="Tenants Applications"
      value={value}
      icon="inbox"
      primaryColor="#ff4b77"
      secondaryColor="#fef1f4"
      isLoading={isLoading}
    />
  );
}

TenantsApplicationsAbsoluteValueIndicator.propTypes = {
  isLoading: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

TenantsApplicationsAbsoluteValueIndicator.defaultProps = {
  isLoading: false,
};
