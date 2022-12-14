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

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [20, 40, 30, 60, 50, 65, 70, 90, 80, 100, 120],
      // data: randNumber({ length: 30 }),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#8219D4",
      borderWidth: 1,
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
          x: { grid: { lineWidth: 0.5 } },
          y: { grid: { lineWidth: 0.5 } },
        },
      }}
      data={data}
    />
  );
}
