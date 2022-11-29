import React from "react";

type Props = React.ComponentPropsWithoutRef<"input"> & {};

export function Input(props: Props) {
  return (
    <input
      className="h-10 w-full rounded-lg border-brand_200 bg-inherit font-medium text-brand-primary_day placeholder:text-brand-primary_day placeholder:opacity-50 dark:text-brand-primary_night dark:placeholder:text-brand-primary_night"
      {...props}
    />
  );
  //   className="w-full p-[0] font-roboto font-medium text-purple_800 placeholder:text-purple_800 lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px]"
}
