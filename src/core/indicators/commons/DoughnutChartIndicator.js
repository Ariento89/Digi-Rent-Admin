import PropTypes from "prop-types";
import { BLUE_1 } from "../../../consts/colors";
import DoughnutChart from "../../charts/DoughnutChart";
import Card from "../../layout/Card";
import Spinner from "../../layout/Spinner";

export default function DoughnutChartIndicator({ label, data, size, isLoading }) {
  const height = { md: "226px", sm: "116px" }[size];

  return (
    <Card title={label}>
      <div style={{ height: height }}>
        {isLoading ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Spinner size="xs" color={BLUE_1} />
          </div>
        ) : (
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
        )}
      </div>
    </Card>
  );
}

DoughnutChartIndicator.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  size: PropTypes.oneOf(["md", "sm"]),
  isLoading: PropTypes.bool,
};

DoughnutChartIndicator.defaultProps = {
  size: "md",
  isLoading: false,
};
