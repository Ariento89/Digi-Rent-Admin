import DoughnutChartIndicator from "./commons/DoughnutChartIndicator";

export default function UniqueWebsiteVisitorsChartIndicator() {
  return (
    <DoughnutChartIndicator
      label="Unique Website Visitor"
      data={{
        labels: ["Computer", "Mobile", "Others"],
        datasets: [
          {
            label: "# of Votes",
            data: [482, 127, 276],
          },
        ],
      }}
    />
  );
}
