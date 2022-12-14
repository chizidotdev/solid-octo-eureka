import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Men", "Women"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#CD9DF3", "#8219D4"],
    },
  ],
};

export function UsersByGender() {
  return <Pie options={{ responsive: true, radius: "80%" }} data={data} />;
}
