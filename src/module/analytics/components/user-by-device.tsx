import type { ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export const data: ChartData<"doughnut", number[], unknown> = {
  datasets: [
    {
      label: "Total Users",
      data: [7, 19, 12],
      backgroundColor: ["#CD9DF3", "#6313A2", "#A954EB"],
      borderColor: ["#CD9DF3", "#6313A2", "#A954EB"],
    },
  ],
};

export function UserByDevice() {
  return <Doughnut options={{ responsive: true, radius: "70%" }} data={data} />;
}
