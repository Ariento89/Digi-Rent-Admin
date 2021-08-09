import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function TenantsAgeChartIndicator({ size, values, isLoading }) {
  return (
    <DoughnutChartIndicator
      label="Tenant Age"
      isLoading={isLoading}
      size={size}
      data={{
        labels: ["18-25", "26-35", "36-45", "56+", "N/A"],
        datasets: [
          {
            data: values,
          },
        ],
      }}
    />
  );
}

TenantsAgeChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

TenantsAgeChartIndicator.defaultProps = {
  isLoading: false,
};
