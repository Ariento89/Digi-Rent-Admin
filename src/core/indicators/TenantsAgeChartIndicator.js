import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";

export default function TenantsAgeChartIndicator() {
  return (
    <DoughnutChartIndicator
      label="Tenant Age"
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
