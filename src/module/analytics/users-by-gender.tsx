import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Men", "Women"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#A954EB", "#8219D4"],
    },
  ],
};

export function UsersByGender() {
  return <Pie data={data} />;
}
