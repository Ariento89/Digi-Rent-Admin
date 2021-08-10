import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function LandlordsAgeChartIndicator({ size, values, isLoading }) {
  return (
    <DoughnutChartIndicator
      label="Landlord Age"
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

LandlordsAgeChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

LandlordsAgeChartIndicator.propTypes = {
  isLoading: false,
};
