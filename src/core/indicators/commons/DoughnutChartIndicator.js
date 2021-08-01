import PropTypes from "prop-types";
import DoughnutChart from "../../charts/DoughnutChart";
import Card from "../../layout/Card";

export default function DoughnutChartIndicator({ label, data }) {
  return (
    <Card title={label}>
      <div style={{ height: "226px" }}>
        <DoughnutChart
          data={{ ...data }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "right",
                align: "center",
                labels: {
                  usePointStyle: true,
                  font: {
                    color: "#a5a9ad",
                    size: "14px",
                    family: "GothamBook",
                  },
                  boxWidth: 14,
                },
              },
              tooltip: {
                cornerRadius: 5,
                usePointStyle: true,
              },
            },
          }}
        />
      </div>
    </Card>
  );
}

DoughnutChartIndicator.propTypes = {
  label: PropTypes.string.isRequired,
};
