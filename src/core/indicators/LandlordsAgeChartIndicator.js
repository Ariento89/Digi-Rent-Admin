import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";

export default function LandlordsAgeChartIndicator() {
  return (
    <DoughnutChartIndicator
      label="Landlord Age"
      data={{
        labels: ["18-25", "26-35", "36-45", "56+"],
        datasets: [
          {
            label: "# of Votes",
            data: [533, 112, 214, 244],
          },
        ],
      }}
    />
  );
}
