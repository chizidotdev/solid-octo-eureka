import Layout from "@components/layout";
import SettingsCard from "@components/settings-card";
import { Switch } from "@headlessui/react";
import Button from "@ui/button";
import Text from "@ui/text";
import Image from "next/image";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

export default function Settings() {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    if (!document) return;
    document.documentElement.classList.toggle("dark");
    // : document.documentElement.classList.remove("dark");
    setEnabled((enabled) => !enabled);
  };

  return (
    <Layout>
      <div className="grid grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-10 pr-10">
          <Text intent="h1">Settings</Text>

          <div className="flex flex-col gap-5 md:gap-10">
            {navItems.map((item) => (
              <SettingsCard key={item.icon} data={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 border-l pl-10 dark:border-black_night">
          <Text intent="h2">Appearances</Text>

          <div className="flex items-center gap-4">
            <Image
              src="/images/img_darkmode.png"
              alt="darkmode icon"
              aria-hidden
              width={50}
              height={50}
              className="flex-1 shrink-0 grow-0"
            />

            <div className="flex flex-[5] flex-col justify-center">
              <Text className="font-semibold">Dark mode</Text>
              <Text className="text-xs">Set dark mode</Text>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <Switch
                checked={enabled}
                onChange={handleToggle}
                className={`${
                  enabled ? "bg-brand-primary_day" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable dark mode</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>

          <div className="mt-10 self-end">
            <Button size="small" variant="rounded">
              <span className="grid grid-cols-[1fr_6fr] place-items-center gap-5 pr-5">
                <FiCheck />
                Done
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const navItems = [
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
