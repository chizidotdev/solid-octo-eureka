import { randNumber } from "@ngneat/falso";
import type { ChartData } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data: ChartData<"line", number[], string> = {
  labels,
  datasets: [
    {
      data: labels.map(() => randNumber({ min: 0, max: 300 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      data: labels.map(() => randNumber({ min: 0, max: 300 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
          y: { grid: { lineWidth: 0.5 } },
        },
      }}
      data={data}
    />
  );
}
