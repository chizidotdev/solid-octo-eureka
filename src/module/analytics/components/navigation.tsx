import type { ChartData } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

export const data: ChartData<"bar", number[], string> = {
  labels: ["Login", "Register", "Dashboard", "Forgot Password", "Services"],
  datasets: [
    {
      label: "Navigation",
      data: [446, 285, 382, 368, 413],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#A954EB",
      borderRadius: 10,
    },
  ],
};

export function Navigation() {
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false },
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { display: false },
            ticks: { display: false, stepSize: 50 },
            min: 50,
            max: 500,
          },
        },
        aspectRatio: 1,
      }}
      data={data}
    />
  );
}
