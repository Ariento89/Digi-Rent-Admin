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
            backgroundColor: ["#def2ff", "#32a5f3", "#fcde6b", "#35c9bc"],
            borderColor: ["#def2ff", "#32a5f3", "#fcde6b", "#35c9bc"],
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
