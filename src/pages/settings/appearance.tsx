import Layout from "@components/layout";
import { Switch } from "@headlessui/react";
import Button from "@ui/button";
import Text from "@ui/text";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { useTheme } from "src/store/theme";
import type { NextPageWithLayout } from "../_app";

const Appearance: NextPageWithLayout = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <>
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
            checked={isDarkMode}
            onChange={setIsDarkMode}
            className={`${
              isDarkMode ? "bg-brand-primary_day" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${
                isDarkMode ? "translate-x-6" : "translate-x-1"
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
    </>
  );
};

Appearance.getLayout = function getLayout(page) {
  return <Layout settings>{page}</Layout>;
};

export default Appearance;
