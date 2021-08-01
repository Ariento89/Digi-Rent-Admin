import PropTypes from "prop-types";
import DoughnutChart from "../../charts/DoughnutChart";
import Card from "../../layout/Card";

export default function DoughnutChartIndicator({ label, data, size }) {
  const height = { md: "226px", sm: "116px" }[size];

  return (
    <Card title={label}>
      <div style={{ height: height }}>
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
                    size: "11px",
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
  data: PropTypes.array.isRequired,
  size: PropTypes.oneOf(["md", "sm"]),
};

DoughnutChartIndicator.defaultProps = {
  size: "md",
};
