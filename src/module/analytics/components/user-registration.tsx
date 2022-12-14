import type { ChartData } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { userRegistration } from "../data";

const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

export const data: ChartData<"bar", number[], string> = {
  labels,
  datasets: [
    {
      label: "Newsletter",
      data: userRegistration.newsletter as unknown as number[],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderRadius: 5,
    },
    {
      label: "Registration",
      data: userRegistration.subscription as unknown as number[],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderRadius: 5,
    },
  ],
};

export function UserRegistration() {
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { lineWidth: 0.5 },
            min: 0,
            max: 200,
            ticks: { stepSize: 50 },
          },
        },
      }}
      data={data}
    />
  );
}
