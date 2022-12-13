import React from "react";
import { Bar } from "react-chartjs-2";
import { userRegistration } from "./data";

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
      data: userRegistration.newsletter as unknown as number[],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Registration",
      data: userRegistration.subscription as unknown as number[],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function UserRegistration() {
  return <Bar data={data} />;
}
