import { Text } from "@components/ui";
import React from "react";
import { summary } from "../../data";
import { List } from "../list";
import { TotalUsers } from "./totalUsers";

export function Summary() {
  return (
    <>
      <TotalUsers />

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
