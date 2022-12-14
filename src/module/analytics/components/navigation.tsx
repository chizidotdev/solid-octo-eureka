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
          title: {
            display: true,
            text: "Navigation",
          },
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } },
        },
      }}
      data={data}
    />
  );
}
