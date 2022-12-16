import React from "react";
import { Text } from "@components/ui";
import type { ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { summary } from "../data";
import { List } from "./list";

export const data: ChartData<"doughnut", number[], unknown> = {
  datasets: [
    {
      label: "Total Users",
      data: [7, 19, 12],
      backgroundColor: ["#CD9DF3", "#6313A2", "#A954EB"],
      borderColor: ["#CD9DF3", "#6313A2", "#A954EB"],
    },
  ],
};

export function Summary() {
  return (
    <>
      <div className="relative max-w-max">
        <Doughnut options={{ radius: "70%" }} data={data} />

        <div className="absolute top-1/2 left-1/2 flex -translate-y-1/2 -translate-x-1/2 flex-col items-center">
          <Text intent="h4" className="text-black_night">
            Total Users
          </Text>
          <Text intent="h3">1,323</Text>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Text intent="h3" className="text-gray_night">
          Summary
        </Text>

        <List>
          <List.Item title="Registration" value={summary.registration} />
          <List.Item title="Traffic" value={summary.traffic} />
          <List.Item title="Top Country" value={summary.topCountry} />
          <List.Item title="Top Rhendor" value={summary.topRhendor} />
          <List.Item title="Top Service" value={summary.topService} />
        </List>
      </div>
    </>
  );
}
