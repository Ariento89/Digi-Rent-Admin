import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function TenantsGenderChartIndicator({ size, isLoading, values }) {
  return (
    <DoughnutChartIndicator
      label="Tenant gender"
      isLoading={isLoading}
      size={size}
      data={{
        labels: ["Female Tenant", "Male Tenant", "N/A"],
        datasets: [
          {
            data: values,
          },
        ],
      }}
    />
  );
}

TenantsGenderChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

TenantsGenderChartIndicator.propTypes = {
  isLoading: false,
};
