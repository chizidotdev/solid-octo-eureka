import { Text } from "@components/ui";
import React from "react";
import { bottomCountries, topCountries } from "../data";
import { List } from "./list";

export function TopCountries() {
  return (
    <div className="flex flex-col gap-5">
      <Text intent="h3" className="text-gray_night">
        Top Countries
      </Text>

      <List>
        {topCountries.map(({ country, amount }) => (
          <List.Item title={country} value={amount} key={country} />
        ))}
      </List>
    </div>
  );
}

export function BottomCountries() {
  return (
    <div className="flex flex-col gap-5">
      <Text intent="h3" className="text-gray_night">
        Bottom Countries
      </Text>

      <List>
        {bottomCountries.map(({ country, amount }) => (
          <List.Item title={country} value={amount} key={country} />
        ))}
      </List>
    </div>
  );
}
