import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function TenantsAgeChartIndicator({ size }) {
  return (
    <DoughnutChartIndicator
      label="Tenant Age"
      size={size}
      data={{
        labels: ["18-25", "26-35", "36-45", "56+"],
        datasets: [
          {
            label: "# of Votes",
            data: [137, 276, 192, 243],
          },
        ],
      }}
    />
  );
}

TenantsAgeChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
