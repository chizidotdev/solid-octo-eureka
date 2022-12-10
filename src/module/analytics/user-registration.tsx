import { randNumber } from "@ngneat/falso";
import React from "react";
import { Bar } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Rhenda App Analytics",
    },
  },
};

const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

export const data = {
  labels,
  datasets: [
    {
      label: "Newsletter",
      data: labels.map(() => randNumber({ min: 10, max: 200 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Registration",
      data: labels.map(() => randNumber({ min: 10, max: 200 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function UserRegistration() {
  return <Bar data={data} />;
}
