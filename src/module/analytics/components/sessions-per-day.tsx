import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sessions per Day",
    },
  },
  scales: {
    x: { grid: { lineWidth: 0.5 } },
    y: { grid: { lineWidth: 0.5 } },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [20, 40, 50, 70, 80, 100, 120],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#8219D4",
      borderWidth: 1,
    },
  ],
};

export function SessionsPerDay() {
  return <Line options={options} data={data} />;
}
