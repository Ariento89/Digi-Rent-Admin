import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";

export default function TenantsGenderChartIndicator() {
  return (
    <DoughnutChartIndicator
      label="Tenant gender"
      data={{
        labels: ["Female Tentant", "Male Tenant"],
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
