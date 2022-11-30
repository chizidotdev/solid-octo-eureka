import Text from "@ui/text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Options = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

type Props = {
  data: Options;
};

export default function SettingsCard({ data }: Props) {
  const { description, title, icon, href } = data;

  return (
    <Link href={`/settings/${href}`}>
      <div className="flex w-72 cursor-pointer items-center gap-5 rounded-lg border px-7 py-4 shadow-md dark:border-black_night">
        <Image
          src={icon}
          alt={title}
          width={42}
          height={54}
          className="h-auto w-auto"
        />

        <div className="mb-2 flex flex-col">
          <Text className="font-semibold">{title}</Text>
          <Text className="text-xs">{description}</Text>
        </div>
      </div>
    </Link>
  );
}
