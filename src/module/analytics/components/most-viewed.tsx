import { Text } from "@components/ui";
import Image from "next/image";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { mostViewedRhendors, mostViewedServices } from "../data";
import type { TMostViewed } from "../types";

type MostViewedProps = {
  title: string;
  data: TMostViewed[];
};

function MostViewed({ data, title }: MostViewedProps) {
  return (
    <div className="flex flex-col gap-10 rounded-xl py-5 shadow-md">
      <Text intent="h4" className="px-5 text-black_night">
        {title}
      </Text>

      <div className="flex flex-col gap-7 px-5">
        {data.map(({ status, title, value, imageUrl }) => {
          const rank =
            status.rank === "up"
              ? "/images/img_rank_up.png"
              : "/images/img_rank_down.png";

          return (
            <div
              key={title}
              className="flex items-center justify-between gap-3"
            >
              {imageUrl && (
                <Image src={imageUrl} alt={title} width={35} height={35} />
              )}

              <div className="flex-1">
                <Text intent="h4">{title}</Text>
                <Text className="text-xs text-black_night">{value} view</Text>
              </div>

              <div className="flex items-center gap-2">
                <span>{status.value}</span>
                <Image src={rank} alt={title} width={14} height={14} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex cursor-pointer items-center justify-center gap-10 border-t pt-5 text-sm font-semibold text-brand-primary_day">
        <Text>View full list</Text>
        <FiChevronRight />
      </div>
    </div>
  );
}

export const MostViewedRhendors = () => (
  <MostViewed data={mostViewedRhendors} title="Most Viewed Rhendors" />
);

export const MostViewedServices = () => (
  <MostViewed data={mostViewedServices} title="Most Viewed Services" />
);
