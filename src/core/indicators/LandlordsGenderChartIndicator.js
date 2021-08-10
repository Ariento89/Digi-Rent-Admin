import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function LandlordsGenderChartIndicator({ size, isLoading, values }) {
  return (
    <DoughnutChartIndicator
      label="Landlord gender"
      isLoading={isLoading}
      size={size}
      data={{
        labels: ["Female Tentant", "Male Landlord", "N/A"],
        datasets: [
          {
            data: values,
          },
        ],
      }}
    />
  );
}

LandlordsGenderChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

LandlordsGenderChartIndicator.propTypes = {
  isLoading: false,
};
