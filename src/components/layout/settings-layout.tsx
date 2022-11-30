import SettingsCard from "@components/settings-card";
import Text from "@ui/text";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export function SettingsLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <div className="flex flex-col gap-10 pr-10">
        <Text intent="h1">Settings</Text>

        <div className="flex flex-col gap-5 md:gap-10">
          {settingsOptions.map((item) => (
            <SettingsCard key={item.icon} data={item} />
          ))}
        </div>
      </div>

      <>{children}</>
    </div>
  );
}

const settingsOptions = [
  {
    title: "Appearance",
    description: "Dark and Light mode",
    icon: "/images/img_blue.png",
  },
  {
    title: "App Settings",
    description: "Admin app configurations",
    icon: "/images/img_orange.png",
  },
  {
    title: "Configurations",
    description: "Main app configurations",
    icon: "/images/img_green.png",
  },
  {
    title: "Account Settings",
    description: "Edit profile information",
    icon: "/images/img_teal.png",
  },
  {
    title: "Security",
    description: "Change Password",
    icon: "/images/img_yellow.png",
  },
];
