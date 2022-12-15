import type { ChartData } from "chart.js";
import { Line } from "react-chartjs-2";

const labels = [
  "January",
  "",
  "February",
  "",
  "March",
  "",
  "April",
  "",
  "May",
  "",
  "June",
];

export const data: ChartData<"line", number[], string> = {
  labels,
  datasets: [
    {
      fill: { above: "#f5f5f5" },
      data: [20, 40, 30, 60, 50, 65, 70, 90, 80, 100, 120],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#8219D4",
      borderWidth: 1,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      tension: 0.5,
    },
  ],
};

export function SessionsPerDay() {
  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false },
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { lineWidth: 0.5 }, ticks: { stepSize: 50 } },
        },
      }}
      data={data}
    />
  );
}
