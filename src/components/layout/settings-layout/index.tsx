import SettingsCard from "./settings-card";
import Text from "@ui/text";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export function SettingsLayout({ children }: Props) {
  return (
    <div className="grid lg:grid-cols-[1fr_2fr]">
      <div
        className={`flex flex-col gap-10 sm:mx-auto sm:w-2/3 lg:w-full lg:pr-10 ${
          children && "hidden lg:flex"
        }`}
      >
        <Text intent="h1">Settings</Text>

        <div className="flex flex-col gap-7 md:gap-10">
          {settingsOptions.map((item) => (
            <SettingsCard key={item.icon} data={item} />
          ))}
        </div>
      </div>

      {children && (
        <section className="flex flex-col gap-10 dark:border-black_night lg:border-l lg:pl-10">
          {children}
        </section>
      )}
    </div>
  );
}
const settingsOptions = [
  {
    title: "Appearance",
    description: "Dark and Light mode",
    icon: "/images/img_blue.png",
    href: "appearance",
  },
  {
    title: "App Settings",
    description: "Admin app configurations",
    icon: "/images/img_orange.png",
    href: "app",
  },
  {
    title: "Configurations",
    description: "Main app configurations",
    icon: "/images/img_green.png",
    href: "configurations",
  },
  {
    title: "Account Settings",
    description: "Edit profile information",
    icon: "/images/img_teal.png",
    href: "account",
  },
  {
    title: "Security",
    description: "Change Password",
    icon: "/images/img_yellow.png",
    href: "security",
  },
];
