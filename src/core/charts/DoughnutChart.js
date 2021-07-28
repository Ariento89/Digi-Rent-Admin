import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ data, options }) {
  return (
    <Doughnut
      data={{
        ...data,
        datasets: [
          ...data.datasets.map((dataset) => ({
            ...dataset,
            backgroundColor: ["#32a5f3", "#35c9bc", "#def2ff", "#fcde6b"],
            borderColor: ["#32a5f3", "#35c9bc", "#def2ff", "#fcde6b"],
          })),
        ],
      }}
      options={{
        ...options,
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}

DoughnutChart.propTypes = {
  data: PropTypes.object,
  options: PropTypes.object,
};

DoughnutChart.defaultProps = {
  data: {},
  options: {},
};
