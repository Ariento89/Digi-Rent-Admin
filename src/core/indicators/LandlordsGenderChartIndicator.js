import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function LandlordsGenderChartIndicator({ size }) {
  return (
    <DoughnutChartIndicator
      label="Landlord gender"
      size={size}
      data={{
        labels: ["Female Tentant", "Male Landlord"],
        datasets: [
          {
            label: "# of Votes",
            data: [700, 1023],
          },
        ],
      }}
    />
  );
}

LandlordsGenderChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
