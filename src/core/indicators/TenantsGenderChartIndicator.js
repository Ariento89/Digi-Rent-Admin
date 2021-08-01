import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";
import PropTypes from "prop-types";

export default function TenantsGenderChartIndicator({ size }) {
  return (
    <DoughnutChartIndicator
      label="Tenant gender"
      size={size}
      data={{
        labels: ["Female Tenant", "Male Tenant"],
        datasets: [
          {
            label: "# of Votes",
            data: [357, 296],
          },
        ],
      }}
    />
  );
}

TenantsGenderChartIndicator.propTypes = {
  size: PropTypes.string.isRequired,
};
