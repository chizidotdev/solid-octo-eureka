import { Text } from "@components/ui";
import React from "react";
import { summary } from "../data";

export function Summary() {
  return (
    <div className="flex flex-col gap-5">
      <Text intent="h3" className="text-gray_night">
        Summary
      </Text>

      <div className="flex flex-col gap-2">
        <SummaryItem title="Registration" value={summary.registration} />
        <SummaryItem title="Traffic" value={summary.traffic} />
        <SummaryItem title="Top Country" value={summary.topCountry} />
        <SummaryItem title="Top Rhendor" value={summary.topRhendor} />
        <SummaryItem title="Top Service" value={summary.topService} />
      </div>
    </div>
  );
}

function SummaryItem({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="flex justify-between gap-5">
      <Text className="w-max text-black_night" intent="h4">
        {title}
      </Text>
      <Text className="w-max text-gray_night" intent="h4">
        {value.toLocaleString()}
      </Text>
    </div>
  );
}
