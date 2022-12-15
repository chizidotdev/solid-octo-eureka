import React from "react";
import { Text } from "@components/ui";

type ListItemProps = {
  title: string;
  value: string | number;
};

function ListRoot({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

function Item({ title, value }: ListItemProps) {
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

export const List = Object.assign(ListRoot, { Item });
