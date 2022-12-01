import Text from "@ui/text";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

const settingsCardStyles = cva(
  [
    "flex items-center gap-5",
    "w-full lg:w-72",
    "border border-white_day dark:border-black_night",
    "cursor-pointer rounded-xl px-7 py-4",
    "shadow-md",
  ],
  {
    variants: {
      status: {
        active: [
          "bg-brand-secondary_day",
          "text-white_day",
          "shadow-black_night",
          "dark:border-gray_day",
        ],
      },
    },
  }
);

export default function SettingsCard({ data }: Props) {
  const { pathname } = useRouter();
  const { description, title, icon, href } = data;
  const status = href === pathname.split("/").pop() ? "active" : undefined;

  return (
    <Link href={`/settings/${href}`}>
      <div className={settingsCardStyles({ status })}>
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
