import Text from "@ui/text";
import Image from "next/image";
import React from "react";

type Props = {
  data: {
    title: string;
    description: string;
    icon: string;
  };
};

export default function SettingsCard({ data }: Props) {
  const { description, title, icon } = data;

  return (
    <div className="flex w-72 items-center gap-5 rounded-lg border px-7 py-4 shadow-md dark:border-black_night">
      <Image src={icon} alt={title} width={42} height={54} />

      <div className="mb-2 flex flex-col">
        <Text className="font-semibold">{title}</Text>
        <Text className="text-xs">{description}</Text>
      </div>
    </div>
  );
}
