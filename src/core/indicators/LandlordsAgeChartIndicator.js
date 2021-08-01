import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function LandlordsAgeChartIndicator({ size }) {
  return (
    <DoughnutChartIndicator
      label="Landlord Age"
      size={size}
      data={{
        labels: ["18-25", "26-35", "36-45", "56+"],
        datasets: [
          {
            label: "# of Votes",
            data: [533, 112, 214, 244],
          },
        ],
      }}
    />
  );
}

LandlordsAgeChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
