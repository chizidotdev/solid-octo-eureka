import type { ChartData } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const labels = [
  "May 5",
  "May 6",
  "May 7",
  "May 8",
  "May 9",
  "May 10",
  "May 11",
];

const data: ChartData<"line", number[], string> = {
  labels,
  datasets: [
    {
      data: [100, 120, 80, 180, 140, 80, 100],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointBorderColor: "transparent",
      tension: 0.5,
    },
    {
      data: [200, 150, 140, 300, 250, 130, 120],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      pointBorderColor: "transparent",
      tension: 0.5,
    },
  ],
};

export function UniqueVisitors() {
  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: false,
          },
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { lineWidth: 0.5 }, ticks: { stepSize: 100 } },
        },
        aspectRatio: 2,
      }}
      data={data}
    />
  );
}
