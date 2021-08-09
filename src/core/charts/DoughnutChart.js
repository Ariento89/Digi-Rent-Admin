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
            backgroundColor: ["#32a5f3", "#35c9bc", "#fcde6b", "#def2ff", "#d7d7d7"],
            borderColor: ["#32a5f3", "#35c9bc", "#fcde6b", "#def2ff", "#d7d7d7"],
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
