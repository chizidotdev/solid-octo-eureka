import { Text } from "@components/ui";
import React from "react";

export type AnalyticsCardProps = {
  title: string;
  value: number;
  percentage: number;
  icon: React.ReactNode;
};

export function AnalyticsCard({
  percentage,
  title,
  value,
  icon,
}: AnalyticsCardProps) {
  const percentageColor =
    percentage < 0 ? "text-red-700" : "text-brand-secondary_night";

  return (
    <div className="grid w-52 gap-3 rounded-md p-5 shadow-md">
      <div className="flex items-center justify-between text-black_night">
        <Text className="text-black_night text-sm font-medium">{title}</Text>
        <span>{icon}</span>
      </div>

      <div className="flex items-center justify-between">
        <Text intent="h3" className="text-gray_night">{value.toLocaleString()}</Text>
        <Text className={`text-xs ${percentageColor}`}>{percentage}%</Text>
      </div>
    </div>
  );
}
