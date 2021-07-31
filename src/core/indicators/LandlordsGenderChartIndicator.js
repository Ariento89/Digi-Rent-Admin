import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";

export default function LandlordsGenderChartIndicator() {
  return (
    <DoughnutChartIndicator
      label="Landlord gender"
      data={{
        labels: ["Female Tentant", "Male Landlord"],
        datasets: [
          {
            label: "# of Votes",
            data: [700, 1023],
          },
        ],
      }}
    />
  );
}
