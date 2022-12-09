import React from "react";

type Props = {
  title: string;
  value: number;
  percentage: number;
  icon: React.ReactNode;
};

export function AnalyticsCard({ percentage, title, value, icon }: Props) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        {icon}
      </div>

      <div>
        <h2>{value}</h2>
        <h2>{percentage}</h2>
      </div>
    </div>
  );
}
